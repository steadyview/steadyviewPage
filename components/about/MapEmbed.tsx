"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { useTranslations } from "next-intl";
import { companyInfo } from "@/content/company";

declare global {
  interface Window {
    // 네이버 지도 SDK는 공식 타입 패키지가 없어 any로 선언한다.
    naver: any;
  }
}

const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

type Status = "loading" | "ready" | "error";

/**
 * 네이버맵 임베드 — 지도는 클라이언트에서 렌더링하고,
 * 정확한 좌표는 서버 라우트(/api/geocode)에서 Client Secret으로 지오코딩해 가져온다
 * (네이버 지오코딩 API는 Secret이 필요해 클라이언트에서 직접 호출할 수 없음).
 * 실패 시 content/company.ts의 폴백 좌표를 사용한다.
 * NEXT_PUBLIC_NAVER_MAP_CLIENT_ID 필요 (NCP 콘솔 → Maps → Application, Web 서비스 URL 등록 필수).
 * PRD §4.2.3, §12 오픈 이슈 / Task 5.4
 */
export default function MapEmbed() {
  const t = useTranslations("LocationPage");
  const mapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  async function initMap() {
    const naver = window.naver;
    if (!mapRef.current || !naver?.maps) return;

    let { lat, lng } = companyInfo.coordinates;
    try {
      const res = await fetch("/api/geocode");
      const data = await res.json();
      if (data.success) {
        lat = data.lat;
        lng = data.lng;
      }
    } catch {
      // 지오코딩 실패 시 폴백 좌표 사용
    }

    const coords = new naver.maps.LatLng(lat, lng);
    const map = new naver.maps.Map(mapRef.current, {
      center: coords,
      zoom: 16,
    });

    new naver.maps.Marker({
      position: coords,
      map,
      icon: {
        content: `<div style="display:inline-block;padding:5px 10px;font-size:13px;font-weight:600;line-height:1.2;white-space:nowrap;background:#fff;border:1px solid #7681a8;border-radius:4px;color:#1C1C1A;transform:translate(-50%,-140%);">STEADYVIEW</div>`,
        anchor: new naver.maps.Point(0, 0),
      },
    });

    setStatus("ready");
  }

  if (!NAVER_CLIENT_ID) {
    return (
      <div>
        <div className="flex h-[360px] w-full items-center justify-center rounded-lg border border-dashed border-border bg-surface-muted px-6 text-center text-sm text-text-muted md:h-[440px]">
          {t("mapUnavailable")}
        </div>
        <p className="mt-3 text-xs text-text-muted">{t("mapNote")}</p>
      </div>
    );
  }

  return (
    <div>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_CLIENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => initMap()}
        onError={() => setStatus("error")}
      />
      <div className="relative overflow-hidden rounded-lg border border-border">
        <div ref={mapRef} className="h-[360px] w-full md:h-[440px]" />
        {status === "error" && (
          <div className="absolute inset-0 flex items-center justify-center bg-surface-muted px-6 text-center text-sm text-text-muted">
            {t("mapUnavailable")}
          </div>
        )}
      </div>
      <p className="mt-3 text-xs text-text-muted">{t("mapNote")}</p>
    </div>
  );
}

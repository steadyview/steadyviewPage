"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useTranslations } from "next-intl";
import { companyInfo } from "@/content/company";

declare global {
  interface Window {
    // Kakao Maps SDK는 공식 타입 패키지가 없어 any로 선언한다.
    kakao: any;
  }
}

const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;

type Status = "loading" | "ready" | "error";

/**
 * 카카오맵 임베드 — 도로명주소 지오코딩으로 정확한 위치를 찾아 표시.
 * (장소명 검색은 지도 서비스에 잘못 등록된 업체 정보와 매칭될 수 있어, 주소 지오코딩이 더 안정적이다.)
 * NEXT_PUBLIC_KAKAO_MAP_API_KEY 필요 (Kakao Developers → JavaScript 키, 도메인 등록 필수).
 * PRD §4.2.3, §12 오픈 이슈 / Task 5.4
 */
export default function MapEmbed() {
  const t = useTranslations("LocationPage");
  const mapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  function initMap() {
    const kakao = window.kakao;
    if (!mapRef.current || !kakao?.maps) return;

    const { lat, lng } = companyInfo.coordinates;
    const map = new kakao.maps.Map(mapRef.current, {
      center: new kakao.maps.LatLng(lat, lng),
      level: 4,
    });

    function placeMarker(coords: any, label: string) {
      new kakao.maps.Marker({ position: coords, map });
      // InfoWindow는 콘텐츠 크기와 무관하게 박스 너비를 150px로 고정하므로,
      // 콘텐츠 크기에 맞춰 자동으로 폭이 정해지는 CustomOverlay를 사용한다.
      const overlay = new kakao.maps.CustomOverlay({
        position: coords,
        yAnchor: 1.55,
        content: `<div style="display:inline-block;padding:5px 10px;font-size:13px;font-weight:600;line-height:1.2;white-space:nowrap;background:#fff;border:1px solid #7681a8;border-radius:4px;color:#1C1C1A;">${label}</div>`,
      });
      overlay.setMap(map);
    }

    if (!kakao.maps.services) {
      placeMarker(map.getCenter(), "STEADYVIEW");
      setStatus("ready");
      return;
    }

    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(companyInfo.addressKo, (result: any[], geoStatus: string) => {
      if (geoStatus === kakao.maps.services.Status.OK && result[0]) {
        const coords = new kakao.maps.LatLng(Number(result[0].y), Number(result[0].x));
        map.setCenter(coords);
        placeMarker(coords, "STEADYVIEW");
      } else {
        placeMarker(map.getCenter(), "STEADYVIEW");
      }
      setStatus("ready");
    });
  }

  useEffect(() => {
    if (!KAKAO_KEY) return;
    if (window.kakao?.maps) {
      window.kakao.maps.load(initMap);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!KAKAO_KEY) {
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
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        onLoad={() => window.kakao.maps.load(initMap)}
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

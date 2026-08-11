import { NextResponse } from "next/server";
import { companyInfo } from "@/content/company";

/**
 * 회사 주소를 네이버 지오코딩으로 좌표 변환. Client Secret이 필요해 서버에서만 호출 가능.
 * 임의 주소를 받지 않고 companyInfo.addressKo만 조회 — 공개 지오코딩 프록시 악용 방지.
 * PRD §4.2.3 / MapEmbed
 */
export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
  const clientSecret = process.env.NAVER_MAP_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json({ success: false, error: "not_configured" }, { status: 500 });
  }

  try {
    const url = `https://maps.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(companyInfo.addressKo)}`;
    const res = await fetch(url, {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": clientId,
        "X-NCP-APIGW-API-KEY": clientSecret,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ success: false, error: "geocode_failed" }, { status: 502 });
    }

    const data = await res.json();
    const address = data?.addresses?.[0];
    if (!address) {
      return NextResponse.json({ success: false, error: "not_found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      lat: Number(address.y),
      lng: Number(address.x),
    });
  } catch (err) {
    console.error("[geocode] fetch exception:", err);
    return NextResponse.json({ success: false, error: "geocode_failed" }, { status: 502 });
  }
}

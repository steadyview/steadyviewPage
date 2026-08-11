export type LocalizedText = { ko: string; en: string; zh: string };
export type HistoryEntry = { year: string; event: LocalizedText };

/**
 * 회사 개요 정적 데이터 (PRD §8.3 — content/ JSON/TS로 관리).
 * 좌표·연혁은 고객 확정 자료로 교체 필요 (PRD §10 콘텐츠 체크리스트).
 */
export const companyInfo = {
  founded: "2026",
  // 지도 지오코딩용 정본 주소(한국어 고정) — /api/geocode가 네이버 지오코딩으로 실제 도로명주소를 검색해 좌표를 찾는다.
  addressKo: "경기도 시흥시 광석천길 18 광양프런티어밸리8차지식산업센터 제B121호",
  // 지오코딩 실패·API 키 미설정 시 폴백 중심좌표(네이버지도 "스테디뷰" 등록 업체 페이지 좌표, place id 2032822202)
  coordinates: { lat: 37.3777082, lng: 126.8129773 },
};

export const history: HistoryEntry[] = [
  {
    year: "2026",
    event: {
      ko: "스테디뷰 설립",
      en: "STEADYVIEW founded",
      zh: "STEADYVIEW 成立",
    },
  },
];

# Task ID: 5

**Title:** 회사소개 페이지 구현 (소개/CEO/찾아오시는 길)

**Status:** done

**Dependencies:** 3 ✓

**Priority:** medium

**Description:** 회사 개요, 비전/미션, 연혁, CEO 인사말, 지도 임베드 및 위치 정보 페이지 구현

**Details:**

1. `app/[locale]/about/page.tsx` (STEADYVIEW 소개):
   - `components/about/CompanyOverview.tsx`: 회사 개요
   - `components/about/VisionSection.tsx`: 비전/미션/핵심 역량
   - `components/about/HistoryTimeline.tsx`: 연혁 타임라인 (수직 타임라인 UI)
   - `content/company.json`: 연혁 데이터 관리
2. `app/[locale]/about/ceo/page.tsx` (CEO 인사말):
   - `components/about/CeoGreeting.tsx`: CEO 사진, 인사말, 서명
   - 다국어 번역 파일에 인사말 원고 저장
3. `app/[locale]/about/location/page.tsx` (찾아오시는 길):
   - `components/about/MapEmbed.tsx`: 지도 임베드 (카카오맵/네이버맵/구글맵 중 선택)
   - `components/about/ContactInfo.tsx`: 주소, 전화/팩스/이메일, 교통 안내
   - 주소 복사 버튼 (clipboard API)
4. 반응형 레이아웃, 애니메이션
5. SEO: 페이지별 메타데이터 설정

**Test Strategy:**

- 각 페이지(/about, /about/ceo, /about/location) 접근 확인
- 연혁 타임라인 스크롤/표시 확인
- 지도 로딩 및 상호작용 확인 (줌, 드래그)
- 주소 복사 버튼 클릭 시 클립보드 복사 확인
- CEO 이미지 최적화 확인
- 다국어 전환 시 모든 텍스트 번역 확인
- 모바일 반응형 확인

## Subtasks

### 5.1. /about 소개 페이지 (개요/비전)

**Status:** done  
**Dependencies:** None  

회사소개 메인 페이지를 구현한다.

**Details:**

CompanyOverview(회사 개요), VisionSection(비전/미션/핵심 역량) 컴포넌트, 페이지 메타데이터.

### 5.2. HistoryTimeline 및 content/company.json

**Status:** done  
**Dependencies:** 5.1  

연혁 타임라인을 구현한다.

**Details:**

수직 타임라인 UI, content/company.json 연혁 데이터 바인딩, 반응형.

### 5.3. /about/ceo CEO 인사말 페이지

**Status:** done  
**Dependencies:** None  

CEO 인사말 페이지를 구현한다.

**Details:**

CeoGreeting: CEO 사진(next/image), 인사말(i18n), 서명/직함.

### 5.4. /about/location 지도 임베드

**Status:** done  
**Dependencies:** None  

찾아오시는 길 지도를 구현한다.

**Details:**

MapEmbed(카카오/네이버/구글 중 선택), 지도 API 키 env 처리, 지연 로딩.

### 5.5. ContactInfo 및 주소 복사

**Status:** done  
**Dependencies:** 5.4  

연락처·교통 안내를 구현한다.

**Details:**

주소·전화/팩스/이메일, 대중교통·자가용 안내, clipboard API 주소 복사 버튼.

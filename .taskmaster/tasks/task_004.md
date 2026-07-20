# Task ID: 4

**Title:** 메인 페이지 구현 (히어로 슬라이더 + 소개 섹션)

**Status:** done

**Dependencies:** 3 ✓

**Priority:** high

**Description:** 자동 순환 이미지 슬라이더(2차전지/X-ray/3D 반도체), 회사 간단 소개, 제품 카드, 견적문의 CTA 구현

**Details:**

1. `app/[locale]/page.tsx` 메인 페이지 생성
2. `components/home/HeroSlider.tsx` 구현:
   - Swiper 또는 Embla Carousel 사용
   - 슬라이드 3개: 
     - 슬라이드 1: 2차전지 검사 (이미지 + 제목 + 설명 + CTA 버튼 → /products/2d-vision)
     - 슬라이드 2: 산업용 X-ray 검사 (→ /products/xray)
     - 슬라이드 3: 3D 반도체 검사 (→ /products/3d-vision)
   - 자동재생 (5초 간격), 일시정지 버튼
   - 화살표 네비게이션, 인디케이터 점
   - 모바일: 스와이프 지원
   - next/image로 이미지 최적화 (priority 설정)
3. `components/home/IntroSection.tsx`: 회사 소개 문구 (1-2 문단)
4. `components/home/ProductCards.tsx`: 3개 카드 (2D/3D/X-ray) 그리드 레이아웃
5. `components/home/CtaBanner.tsx`: "견적문의 하기" 버튼 → /[locale]/contact
6. 반응형 레이아웃, 애니메이션 효과 (fade-in)
7. 다국어 번역 적용

**Test Strategy:**

- 슬라이더 자동 순환 확인 (5초마다 전환)
- 화살표 클릭/모바일 스와이프로 슬라이드 이동 확인
- 일시정지/재생 버튼 동작 확인
- 각 슬라이드 CTA 버튼 클릭 시 올바른 제품 페이지로 이동
- 제품 카드 클릭 시 해당 제품 페이지로 이동
- 견적문의 CTA 버튼 클릭 시 /contact로 이동
- 이미지 로딩 성능 확인 (LCP < 2.5s)
- 모바일/태블릿/데스크톱 반응형 확인

## Subtasks

### 4.1. HeroSlider 슬라이더 구현

**Status:** done  
**Dependencies:** None  

3장 자동 순환 슬라이더를 구현한다.

**Details:**

Swiper/Embla 기반 3슬라이드(2차전지/X-ray/3D 반도체), 자동재생(5초)+일시정지, 화살표/인디케이터, 모바일 스와이프.

### 4.2. 슬라이드 오버레이 콘텐츠·CTA 및 이미지 최적화

**Status:** done  
**Dependencies:** 4.1  

슬라이드별 텍스트/CTA와 이미지 최적화를 적용한다.

**Details:**

슬라이드별 제목/설명/제품 페이지 CTA(2d-vision/xray/3d-vision), next/image priority·반응형·alt, 슬라이더 ARIA.

### 4.3. IntroSection 구현

**Status:** done  
**Dependencies:** None  

회사 소개 섹션을 구현한다.

**Details:**

한두 문단 소개 + 핵심 키워드(정밀 검사/머신비전/X-ray), i18n 번역, fade-in 애니메이션.

### 4.4. ProductCards 구현

**Status:** done  
**Dependencies:** None  

제품 바로가기 카드를 구현한다.

**Details:**

2D/3D/X-ray 3개 카드(썸네일·제목·요약·링크) 그리드 레이아웃, 반응형.

### 4.5. CtaBanner 및 페이지 조립

**Status:** done  
**Dependencies:** 4.1, 4.3, 4.4  

문의 CTA와 메인 페이지를 조립한다.

**Details:**

'견적문의 하기'→/contact 배너, app/[locale]/page.tsx 섹션 조립, 메타데이터.

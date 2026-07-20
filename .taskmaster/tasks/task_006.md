# Task ID: 6

**Title:** 제품 페이지 구현 (2D/3D/X-ray 비전)

**Status:** done

**Dependencies:** 3 ✓

**Priority:** high

**Description:** 3개 제품 라인(2D 비전, 3D 비전, X-ray)의 상세 페이지 구현 - 개요, 특징, 사양표, 적용 분야, 갤러리

**Details:**

1. 공통 제품 페이지 컴포넌트 생성:
   - `components/products/ProductHero.tsx`: 제품명 + 히어로 이미지
   - `components/products/ProductFeatures.tsx`: 주요 특징 (아이콘 + 설명)
   - `components/products/SpecTable.tsx`: 사양표 (테이블 형식)
   - `components/products/ApplicationList.tsx`: 적용 분야 리스트
   - `components/products/ProductGallery.tsx`: 이미지 갤러리 (썸네일 + 라이트박스)
2. 제품별 페이지 생성:
   - `app/[locale]/products/2d-vision/page.tsx`
   - `app/[locale]/products/3d-vision/page.tsx`
   - `app/[locale]/products/xray/page.tsx`
3. `content/products.json`: 제품별 데이터 관리 (개요, 특징, 사양, 적용 분야)
4. 각 페이지 하단에 "견적문의" CTA 버튼
5. 반응형 사양표 (모바일에서 스크롤 가능)
6. 이미지 최적화, lazy loading
7. SEO: Open Graph 이미지, 구조화 데이터(Product Schema)

**Test Strategy:**

- 3개 제품 페이지 모두 접근 확인
- 사양표 데이터 정확히 표시 확인
- 이미지 갤러리 클릭 시 라이트박스 열림 확인
- 견적문의 버튼 클릭 시 /contact로 이동
- 다국어 전환 시 제품 정보 번역 확인
- 모바일에서 사양표 가로 스크롤 확인
- 이미지 lazy loading 동작 확인
- Open Graph 메타 태그 확인 (소셜 공유 시)

## Subtasks

### 6.1. 제품 공통 컴포넌트 세트

**Status:** done  
**Dependencies:** None  

재사용 제품 컴포넌트를 구현한다.

**Details:**

ProductHero, ProductFeatures, SpecTable, ApplicationList, ProductGallery(라이트박스)를 데이터 주도형으로 구현. 반응형 사양표.

### 6.2. content/products.json 데이터 스키마

**Status:** done  
**Dependencies:** None  

제품 데이터 구조를 정의한다.

**Details:**

제품별 개요·특징·사양·적용분야·이미지 스키마(TS 타입/zod), 다국어 필드, 로딩 유틸.

### 6.3. /products/2d-vision 페이지

**Status:** done  
**Dependencies:** 6.1, 6.2  

2D 비전 페이지를 구현한다.

**Details:**

2D 머신비전 개요·특징·사양·적용분야(2차전지·전자부품), 공통 템플릿 사용, 견적문의 CTA.

### 6.4. /products/3d-vision 페이지

**Status:** done  
**Dependencies:** 6.1, 6.2  

3D 비전 페이지를 구현한다.

**Details:**

3D 머신비전 개요·특징·사양·적용분야(3D 반도체), 공통 템플릿 사용, 견적문의 CTA.

### 6.5. /products/xray 페이지 및 SEO

**Status:** done  
**Dependencies:** 6.1, 6.2  

X-ray 페이지와 제품 SEO를 마무리한다.

**Details:**

산업용 X-ray 개요·특징·사양·적용분야(2차전지·반도체 내부), 갤러리, CTA, Open Graph·Product Schema 구조화 데이터.

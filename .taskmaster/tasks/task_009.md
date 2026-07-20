# Task ID: 9

**Title:** SEO 최적화 및 메타데이터 설정

**Status:** done

**Dependencies:** 4 ✓, 5 ✓, 6 ✓, 7 ✓, 8 ✓

**Priority:** medium

**Description:** 페이지별 메타 태그, Open Graph, sitemap.xml, robots.txt, 구조화 데이터 구현

**Details:**

1. 각 페이지별 `metadata` export 추가:
   - title, description, keywords
   - Open Graph: og:title, og:description, og:image, og:type
   - Twitter Card: twitter:card, twitter:title, twitter:description, twitter:image
   - 언어별 다른 메타데이터 (useTranslations)
2. `app/sitemap.ts` 생성:
   - 동적 sitemap.xml 생성
   - 모든 정적 페이지 + 언어별 URL 포함
   - lastmod, changefreq, priority 설정
3. `app/robots.ts` 생성:
   - User-agent: *
   - Allow: /
   - Sitemap: https://도메인/sitemap.xml
4. 구조화 데이터 추가 (JSON-LD):
   - Organization Schema (회사 정보)
   - Product Schema (제품 페이지)
   - BreadcrumbList Schema (브레드크럼)
5. `app/[locale]/layout.tsx`에 hreflang 태그 추가:
   - <link rel="alternate" hreflang="ko" href="..." />
   - <link rel="alternate" hreflang="en" href="..." />
   - <link rel="alternate" hreflang="zh" href="..." />
   - <link rel="alternate" hreflang="x-default" href="..." />
6. 폰트 최적화: next/font 사용 (Pretendard 또는 Inter)
7. 이미지 alt 텍스트 모든 이미지에 추가

**Test Strategy:**

- 각 페이지 <head> 확인 (View Page Source)
- Open Graph 미리보기 확인 (Facebook Debugger, LinkedIn Inspector)
- /sitemap.xml 접근 확인 (모든 페이지 포함)
- /robots.txt 접근 확인
- Google Rich Results Test로 구조화 데이터 검증
- hreflang 태그 확인 (SEO 도구)
- 이미지 alt 누락 확인 (접근성 검사 도구)
- Lighthouse SEO 점수 90+ 목표

## Subtasks

### 9.1. 페이지별 메타데이터 및 Open Graph

**Status:** done  
**Dependencies:** None  

SEO 메타를 구성한다.

**Details:**

generateMetadata로 페이지별 title/description/keywords/OG/Twitter Card, 언어별 메타데이터.

### 9.2. sitemap.ts 생성

**Status:** done  
**Dependencies:** 9.1  

동적 사이트맵을 만든다.

**Details:**

app/sitemap.ts로 모든 정적 페이지+언어별 URL, lastmod/changefreq/priority 설정.

### 9.3. robots.ts 생성

**Status:** done  
**Dependencies:** 9.2  

robots 규칙을 설정한다.

**Details:**

app/robots.ts로 User-agent/Allow/Sitemap 지정.

### 9.4. 구조화 데이터(JSON-LD)

**Status:** done  
**Dependencies:** 9.1  

구조화 데이터를 추가한다.

**Details:**

Organization/Product/BreadcrumbList JSON-LD 스키마 삽입.

### 9.5. hreflang, 폰트, 이미지 alt

**Status:** done  
**Dependencies:** 9.1  

다국어 SEO와 폰트/alt를 마무리한다.

**Details:**

layout에 hreflang(ko/en/zh/x-default) 태그, next/font 폰트 최적화, 모든 이미지 alt 추가.

# Task ID: 10

**Title:** 성능 최적화, 접근성 개선 및 배포 준비

**Status:** in-progress

**Dependencies:** 9 ✓

**Priority:** high

**Description:** 이미지 최적화, 코드 스플리팅, 접근성 검증, Vercel 배포 설정 및 최종 QA

**Details:**

1. 성능 최적화:
   - 모든 이미지 next/image 적용 확인
   - 슬라이더 이미지 priority 설정
   - 나머지 이미지 lazy loading
   - 폰트 최적화 (next/font, preload)
   - 코드 스플리팅: dynamic import로 무거운 컴포넌트 로딩 (지도, 갤러리)
   - `next/bundle-analyzer` 설치하여 번들 크기 분석
2. 접근성(a11y) 개선:
   - ARIA labels 추가 (네비게이션, 버튼, 폼)
   - 키보드 네비게이션 테스트 (Tab, Enter, Esc)
   - 명도 대비 검증 (WCAG AA 기준)
   - 스크린 리더 테스트 (NVDA/VoiceOver)
   - 슬라이더에 aria-live, aria-label 추가
3. Vercel 배포:
   - GitHub 저장소 연결
   - 환경변수 설정 (RESEND_API_KEY, 수신 이메일, 지도 API 키)
   - 프로덕션 빌드 테스트 (`npm run build`)
   - Vercel에 배포 후 프리뷰 확인
4. 최종 QA:
   - 모든 페이지 수동 테스트 (데스크톱/모바일)
   - 다국어 전환 테스트
   - 폼 제출 테스트 (실제 이메일 수신)
   - Lighthouse 검사 (Performance 90+, Accessibility 90+, Best Practices 90+, SEO 90+)
   - 브라우저 호환성 테스트 (Chrome, Safari, Firefox, Edge)
5. 커스텀 도메인 연결 (고객 도메인 확정 후)

**Test Strategy:**

- Lighthouse 모든 페이지에서 90+ 점수 확인
- LCP < 2.5s, FID < 100ms, CLS < 0.1
- bundle-analyzer로 페이지별 번들 크기 확인 (First Load JS < 200KB 목표)
- 키보드만으로 전체 사이트 네비게이션 가능 확인
- 스크린 리더로 주요 페이지 테스트
- 모바일 실기기 테스트 (iOS Safari, Android Chrome)
- Vercel 프로덕션 배포 후 실제 도메인에서 전체 기능 테스트
- 이메일 전송 실제 확인
- 다국어 모든 페이지 번역 확인

## Subtasks

### 10.2. 번들 크기 분석

**Status:** done  
**Dependencies:** None  

번들을 분석하고 줄인다.

**Details:**

next/bundle-analyzer 설치·분석, 페이지별 First Load JS<200KB 목표로 최적화.

### 10.3. 접근성 개선 및 검증

**Status:** done  
**Dependencies:** None  

a11y를 점검·개선한다.

**Details:**

네비/버튼/폼 ARIA, 키보드 네비(Tab/Enter/Esc), 명도 대비(WCAG AA), 슬라이더 aria-live/aria-label, 스크린리더 테스트.

### 10.4. Vercel 배포 설정

**Status:** pending  
**Dependencies:** None  

프로덕션 배포를 구성한다.

**Details:**

GitHub 연결, 환경변수(RESEND_API_KEY·수신 이메일·지도 키) 설정, npm run build 검증, main→Production 배포.

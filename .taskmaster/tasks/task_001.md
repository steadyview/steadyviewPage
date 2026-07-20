# Task ID: 1

**Title:** Next.js 프로젝트 초기 설정 및 기술 스택 구성

**Status:** done

**Dependencies:** None

**Priority:** high

**Description:** Next.js 14+ App Router, TypeScript, Tailwind CSS 기반 프로젝트 생성 및 핵심 의존성 설치

**Details:**

1. `npx create-next-app@latest steadyview-homepage --typescript --tailwind --app --src-dir=false --import-alias='@/*'` 실행
2. 필수 패키지 설치:
   - `next-intl` (다국어 지원)
   - `react-hook-form` + `zod` (폼 유효성 검사)
   - `resend` (이메일 전송)
   - `swiper` 또는 `embla-carousel-react` (슬라이더)
3. 프로젝트 구조 설정:
   - `app/[locale]/` 구조 생성 (ko, en, zh)
   - `components/` 폴더 생성
   - `content/` 폴더 생성 (정적 콘텐츠)
   - `messages/` 폴더 생성 (ko.json, en.json, zh.json)
   - `public/images/`, `public/ir/` 폴더 생성
4. `next.config.js`에 next-intl 설정 추가
5. `tailwind.config.ts`에 커스텀 색상/폰트 설정
6. `.env.local` 파일 생성 및 환경변수 템플릿 추가
7. `tsconfig.json` path alias 확인

**Test Strategy:**

- `npm run dev` 실행 후 localhost:3000 접속 확인
- TypeScript 컴파일 에러 없음 확인
- Tailwind CSS 적용 확인 (간단한 클래스 테스트)
- 각 로케일 경로 접근 가능 확인 (/ko, /en, /zh)

## Subtasks

### 1.1. create-next-app으로 프로젝트 초기화

**Status:** done  
**Dependencies:** None  

App Router + TypeScript + Tailwind 기반으로 Next.js 프로젝트를 생성한다.

**Details:**

create-next-app(App Router, TypeScript, Tailwind, import alias @/*)으로 초기화. package.json 스크립트(dev/build/start/lint) 확인, tsconfig strict 모드 활성화.

### 1.2. 핵심 의존성 설치

**Status:** done  
**Dependencies:** 1.1  

i18n·폼·이메일·슬라이더 패키지를 설치한다.

**Details:**

next-intl, react-hook-form + zod, resend, swiper 또는 embla-carousel-react 설치 및 버전 정리.

### 1.3. 프로젝트 폴더 구조 스캐폴딩

**Status:** done  
**Dependencies:** 1.1  

PRD 8.2 폴더 구조를 생성한다.

**Details:**

app/[locale]/, app/api/, components/, content/, messages/(ko/en/zh.json), public/(images, ir) 디렉터리 생성 및 placeholder/.gitkeep 배치.

### 1.4. 설정 파일 구성 (next/tailwind/tsconfig)

**Status:** done  
**Dependencies:** 1.2, 1.3  

핵심 설정 파일을 정비한다.

**Details:**

next.config.js에 next-intl 플러그인, tailwind.config.ts 커스텀 색상/폰트 토큰(placeholder), tsconfig path alias 확인.

### 1.5. 환경변수 템플릿 정비

**Status:** done  
**Dependencies:** 1.1  

.env 템플릿과 gitignore를 구성한다.

**Details:**

.env.local/.env.example에 RESEND_API_KEY, CONTACT_RECIPIENT_EMAIL, 지도 API 키 등 정의. .gitignore에 .env 포함 확인.

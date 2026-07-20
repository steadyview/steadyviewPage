# Task ID: 2

**Title:** 다국어(i18n) 라우팅 및 번역 시스템 구축

**Status:** done

**Dependencies:** 1 ✓

**Priority:** high

**Description:** next-intl을 활용한 3개 언어(ko/en/zh) 지원 시스템 구축 및 기본 UI 텍스트 번역 파일 생성

**Details:**

1. `i18n.ts` 설정 파일 생성:
   - locales: ['ko', 'en', 'zh']
   - defaultLocale: 'ko'
   - localeDetection 설정
2. `middleware.ts` 생성:
   - createMiddleware from next-intl
   - 언어 자동 감지 및 리다이렉트 로직
3. `app/[locale]/layout.tsx` 생성:
   - NextIntlClientProvider 래핑
   - 메타데이터 다국어 처리
   - hreflang 태그 추가
4. 번역 파일 생성 (`messages/`):
   - `ko.json`: 헤더, 푸터, 공통 UI 텍스트
   - `en.json`: 영어 번역
   - `zh.json`: 중국어 번역 (간체 가정)
5. 언어 선택기 컴포넌트 생성 (`components/LanguageSwitcher.tsx`):
   - 현재 언어 표시
   - 드롭다운 또는 버튼으로 언어 전환
   - 쿠키에 선택 언어 저장

**Test Strategy:**

- 각 로케일 URL 접근 시 올바른 번역 표시 확인
- 언어 전환 시 URL 및 콘텐츠 변경 확인
- 브라우저 Accept-Language 헤더에 따른 자동 리다이렉트 테스트
- 쿠키에 선택 언어 저장 확인
- 존재하지 않는 로케일 접근 시 404 또는 기본 언어로 리다이렉트 확인

## Subtasks

### 2.1. i18n 설정 파일 구성

**Status:** done  
**Dependencies:** None  

next-intl 로케일 설정을 만든다.

**Details:**

i18n.ts에 locales(['ko','en','zh']), defaultLocale('ko'), getRequestConfig로 메시지 로딩 연결, localeDetection 설정.

### 2.2. middleware 언어 감지·리다이렉트

**Status:** done  
**Dependencies:** 2.1  

미들웨어로 로케일 라우팅을 처리한다.

**Details:**

next-intl createMiddleware, matcher 설정, Accept-Language 자동 감지, 미지원 로케일 처리.

### 2.3. app/[locale]/layout.tsx 구성

**Status:** done  
**Dependencies:** 2.1  

로케일 레이아웃과 provider를 구성한다.

**Details:**

NextIntlClientProvider 래핑, generateStaticParams, html lang 속성, 메타데이터 다국어 처리, hreflang 태그.

### 2.4. 번역 파일 생성 (ko/en/zh)

**Status:** done  
**Dependencies:** 2.1  

공통 UI 텍스트 번역 파일을 만든다.

**Details:**

messages/{ko,en,zh}.json에 헤더/푸터/공통 네임스페이스 키 정의(ko 작성, en/zh 동기화). 누락 키 폴백 정책.

### 2.5. LanguageSwitcher 컴포넌트

**Status:** done  
**Dependencies:** 2.2, 2.3  

언어 선택기를 구현한다.

**Details:**

현재 언어 표시, 동일 경로 유지하며 로케일 전환, 선택 언어 쿠키 저장(사용자 선택 우선).

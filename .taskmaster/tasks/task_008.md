# Task ID: 8

**Title:** 견적문의 폼 및 이메일 전송 API 구현

**Status:** done

**Dependencies:** 3 ✓

**Priority:** high

**Description:** 회사명, 담당자, 연락처, 이메일, 관심 제품, 문의 내용 입력 폼 및 이메일 전송 기능 구현

**Details:**

1. `app/[locale]/contact/page.tsx` 생성
2. `components/contact/ContactForm.tsx` 구현:
   - react-hook-form + zod 사용
   - 입력 필드:
     - 회사명 (text, required)
     - 담당자명 (text, required)
     - 연락처 (tel, required, 형식 검증)
     - 이메일 (email, required, 형식 검증)
     - 관심 제품 (select, required: 2D 비전/3D 비전/X-ray/기타)
     - 문의 내용 (textarea, required, 10자 이상)
     - 개인정보 수집·이용 동의 (checkbox, required)
   - 클라이언트 유효성 검사 (실시간 에러 메시지)
   - 제출 버튼 (로딩 상태 표시)
3. `app/api/contact/route.ts` (Route Handler):
   - POST 요청 처리
   - zod로 서버 측 유효성 검사
   - Resend API를 사용하여 회사 대표 이메일로 전송
   - 이메일 템플릿 (HTML 형식)
   - 스팸 방지: Honeypot 필드 추가 (선택: reCAPTCHA)
   - 에러 핸들링, 200/400/500 응답
4. 제출 성공 시: 성공 메시지 모달, 폼 초기화
5. 제출 실패 시: 에러 메시지 표시
6. 중복 제출 방지 (버튼 비활성화)
7. 다국어 에러 메시지, 라벨 번역

**Test Strategy:**

- 모든 필드 유효성 검사 확인 (빈 값, 형식 오류)
- 이메일 형식 검증 (example@domain.com)
- 전화번호 형식 검증
- 개인정보 동의 체크 필수 확인
- 폼 제출 시 로딩 상태 표시 확인
- 이메일 전송 성공 확인 (수신 이메일 확인)
- 제출 성공 후 성공 메시지 표시
- 서버 에러 시 에러 메시지 표시
- 중복 제출 방지 확인
- 다국어 전환 시 모든 라벨/에러 메시지 번역 확인

## Subtasks

### 8.1. zod 스키마 및 폼 필드 정의

**Status:** done  
**Dependencies:** None  

폼 검증 스키마를 정의한다.

**Details:**

zod 스키마(회사명/담당자명/연락처(tel)/이메일/관심제품(2D/3D/X-ray/기타)/문의내용(10자+)/개인정보 동의), FormField 공통 컴포넌트.

### 8.2. ContactForm 및 클라이언트 검증

**Status:** done  
**Dependencies:** 8.1  

폼 UI와 실시간 검증을 구현한다.

**Details:**

react-hook-form + zodResolver, 개인정보 동의 체크박스, 실시간 에러 메시지(i18n), 제출 버튼 로딩 상태.

### 8.3. app/api/contact 라우트 핸들러 + Resend

**Status:** done  
**Dependencies:** 8.1  

서버에서 이메일을 전송한다.

**Details:**

POST 핸들러, zod 서버 재검증, 입력 새니타이즈, Resend로 대표 이메일 전송(HTML 템플릿, 수신 주소·키 env), 200/400/500 응답.

### 8.4. 스팸 방지 및 중복 제출 방지

**Status:** done  
**Dependencies:** 8.3  

스팸/중복 제출을 방지한다.

**Details:**

허니팟 필드(선택 reCAPTCHA), 제출 중 버튼 비활성화·디바운스로 중복 방지.

### 8.5. 결과 피드백 및 페이지 조립

**Status:** done  
**Dependencies:** 8.2, 8.3  

성공/실패 UX와 페이지를 완성한다.

**Details:**

성공 메시지 모달·폼 초기화, 실패 에러 메시지, app/[locale]/contact/page.tsx 조립, 라벨/메시지 다국어 번역.

# Task ID: 3

**Title:** 공통 레이아웃 컴포넌트 구현 (헤더, 푸터, 네비게이션)

**Status:** done

**Dependencies:** 2 ✓

**Priority:** high

**Description:** GNB(글로벌 네비게이션 바), 푸터, 모바일 햄버거 메뉴를 포함한 전역 레이아웃 컴포넌트 개발

**Details:**

1. `components/layout/Header.tsx` 생성:
   - 로고 (링크: /[locale])
   - 메인 메뉴: 회사소개(드롭다운: 소개/CEO/찾아오시는 길), 제품(드롭다운: 2D/3D/X-ray), IR, 견적문의
   - 언어 선택기 통합
   - 모바일: 햄버거 메뉴 아이콘
   - sticky 헤더 (스크롤 시 상단 고정)
2. `components/layout/MobileMenu.tsx` 생성:
   - 오버레이 메뉴 (full screen)
   - 아코디언 형태의 드롭다운
   - 닫기 버튼
3. `components/layout/Footer.tsx` 생성:
   - 회사명, 주소, 연락처 (전화/팩스/이메일)
   - 저작권 문구
   - (선택) 개인정보처리방침 링크
   - 다국어 번역 적용
4. `app/[locale]/layout.tsx`에 Header, Footer 적용
5. Tailwind로 반응형 디자인 구현 (breakpoints: sm, md, lg, xl)
6. 접근성: ARIA labels, 키보드 네비게이션 지원

**Test Strategy:**

- 데스크톱: 드롭다운 메뉴 hover/click 동작 확인
- 모바일: 햄버거 메뉉 열기/닫기, 메뉴 항목 클릭 확인
- 언어 전환 시 헤더/푸터 텍스트 변경 확인
- 로고 클릭 시 메인 페이지로 이동 확인
- 키보드 Tab 네비게이션 테스트
- 스크린 리더로 접근성 검증 (NVDA/VoiceOver)

## Subtasks

### 3.1. Header/GNB 및 메인 메뉴

**Status:** done  
**Dependencies:** None  

헤더와 데스크톱 드롭다운 메뉴를 구현한다.

**Details:**

로고(홈 링크), 메뉴(회사소개/제품 드롭다운, IR, 견적문의), sticky 헤더, 활성 상태 표시, next-intl Link 사용.

### 3.2. 언어 선택기 헤더 통합

**Status:** done  
**Dependencies:** 3.1  

LanguageSwitcher를 헤더에 통합한다.

**Details:**

헤더에 언어 선택기 배치, 전환 시 현재 경로 유지 및 쿠키 갱신(태스크 2 연동).

### 3.3. MobileMenu 오버레이

**Status:** done  
**Dependencies:** 3.1  

모바일 햄버거 메뉴를 구현한다.

**Details:**

full screen 오버레이, 아코디언 드롭다운, 닫기 버튼, 스크롤 잠금, 포커스 트랩, ESC 닫기.

### 3.4. Footer 구현

**Status:** done  
**Dependencies:** None  

공통 푸터를 구현한다.

**Details:**

회사명·주소·연락처(전화/팩스/이메일)·저작권, (선택)개인정보처리방침 링크, 다국어 번역, 반응형.

### 3.5. 레이아웃 적용 및 접근성/반응형

**Status:** done  
**Dependencies:** 3.1, 3.3, 3.4  

Header/Footer를 레이아웃에 적용하고 접근성을 반영한다.

**Details:**

app/[locale]/layout.tsx에 Header/Footer 적용, Tailwind 반응형(sm/md/lg/xl), ARIA 라벨·키보드 네비게이션.

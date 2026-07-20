# Task ID: 7

**Title:** IR 페이지 구현 (IR DATA 자료 목록 및 다운로드)

**Status:** done

**Dependencies:** 3 ✓

**Priority:** medium

**Description:** 투자자 관계 자료 목록 페이지 구현 - PDF 다운로드 링크, 자료 분류 및 정렬 기능

**Details:**

1. `app/[locale]/ir/page.tsx` 생성
2. `components/ir/IrList.tsx`: IR 자료 목록 컴포넌트
   - 테이블 또는 카드 형식
   - 컬럼: 제목, 구분(공시/재무), 게시일, 다운로드
3. `components/ir/IrDownloadItem.tsx`: 개별 자료 항목
   - PDF 다운로드 링크 (public/ir/ 폴더)
   - 파일 크기 표시
4. `content/ir-data.json`: IR 자료 메타데이터 관리
   ```json
   [
     {
       "id": 1,
       "title": {"ko": "2025년 1분기 실적 발표", "en": "Q1 2025 Earnings", "zh": "2025年第一季度业绩"},
       "category": "financial",
       "date": "2025-04-15",
       "filename": "2025-q1-earnings.pdf"
     }
   ]
   ```
5. (선택) 카테고리 필터 버튼 (전체/공시/재무)
6. 정렬 기능 (최신순/오래된순)
7. 다운로드 버튼 클릭 시 PDF 다운로드
8. 반응형 테이블 (모바일: 카드 형식)

**Test Strategy:**

- IR 자료 목록 렌더링 확인
- PDF 다운로드 링크 클릭 시 파일 다운로드 확인
- 카테고리 필터 동작 확인 (전체/공시/재무)
- 정렬 기능 확인
- 다국어 전환 시 제목 번역 확인
- 자료가 없을 때 빈 상태 메시지 표시
- 모바일 반응형 확인

## Subtasks

### 7.1. content/ir-data.json 스키마 및 데이터

**Status:** done  
**Dependencies:** None  

IR 자료 데이터 구조를 정의한다.

**Details:**

id/제목(다국어)/구분(category)/게시일/파일명 스키마(TS 타입), public/ir PDF 배치 규칙, 샘플 데이터.

### 7.2. IrList / IrDownloadItem 컴포넌트

**Status:** done  
**Dependencies:** 7.1  

목록과 항목 UI를 구현한다.

**Details:**

테이블/카드 형식(제목·구분·게시일·다운로드), PDF 다운로드 링크(download 속성), 파일 크기 표시, 반응형.

### 7.3. 카테고리 필터 및 정렬

**Status:** done  
**Dependencies:** 7.2  

필터/정렬 기능을 구현한다.

**Details:**

구분(전체/공시/재무) 필터, 최신순/오래된순 정렬, 필터/정렬 상태 관리.

### 7.4. /ir 페이지 조립 및 빈 상태

**Status:** done  
**Dependencies:** 7.2  

IR 페이지를 완성한다.

**Details:**

app/[locale]/ir/page.tsx 조립, 페이지 히어로·메타데이터, 자료 없을 때 빈 상태 메시지, 접근성.

### 7.5. IR 자료 갱신 워크플로 문서화

**Status:** done  
**Dependencies:** 7.1  

자료 추가 절차를 문서화한다.

**Details:**

PDF를 public/ir에 추가하고 ir-data.json에 항목 추가 후 Git push→Vercel 재배포 절차 문서화.

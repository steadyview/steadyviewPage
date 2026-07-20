
## 프로젝트 개요

STEADYVIEW 기업 홈페이지 — 머신비전·산업용 X-ray 검사장비 B2B 기업의 마케팅 사이트다. **스코프와 요구사항의 단일 출처는 `docs/PRD.md`**(한국어, v1.0)이다. 페이지나 기능을 구현하기 전에 반드시 읽을 것. PRD에는 정보구조(IA), 페이지별 컴포넌트 목록, 폼 필드, 다국어 전략, 범위 외 항목이 정의되어 있다.

현재는 **그린필드 저장소**다: 애플리케이션 코드, `package.json`, Next.js 스캐폴드가 아직 없다. 작업은 TaskMaster 태스크로 관리되며(아래 참조), 태스크 1이 실제 Next.js 프로젝트를 부트스트랩한다.

## 계획된 아키텍처 (PRD §8 기준)

- **프레임워크:** Next.js (App Router) + TypeScript, Tailwind CSS 스타일링
- **라우팅:** 로케일 세그먼트 구조 — `app/[locale]/...`, `ko`(기본)/`en`/`zh`. 미들웨어에서 Accept-Language 감지, 단 사용자 선택이 우선(쿠키 + URL)
- **다국어:** `next-intl`. UI 텍스트는 `messages/{ko,en,zh}.json`에 위치. `ko`를 먼저 작성하고 `en`/`zh` 키를 동기화
- **정적 콘텐츠, CMS 없음:** 제품 사양·회사 연혁·IR 목록은 `content/` 아래 JSON/TS로 관리, 자산(이미지·IR PDF·로고)은 `public/` 아래. 콘텐츠 수정은 파일 편집 → Git push → Vercel 자동 재배포로 반영
- **견적문의 폼:** `react-hook-form` + `zod`. 제출 시 DB 저장 없이 회사 이메일로 전송하며, `app/api/contact/route.ts` 라우트 핸들러에서 Resend 사용. 이메일 키·수신 주소는 서버 측 환경변수
- **히어로 슬라이더:** Swiper 또는 Embla
- **배포:** Vercel — `main` → Production, PR → Preview

빌드 의존 순서는 TaskMaster 태스크 순서와 동일하다: 프로젝트 셋업 → i18n 라우팅 → 공통 레이아웃 → 페이지(메인/회사소개/제품/IR/견적문의) → SEO → 성능/접근성/배포.

## TaskMaster 워크플로우

태스크는 `.taskmaster/tasks/tasks.json`에 있다(PRD에서 도출한 상위 태스크 10개 + 서브태스크, 한국어). `.taskmaster/tasks/`의 태스크별 `.md`/`.txt` 파일은 **자동 생성**되므로 직접 수정하지 말 것 — 명령으로 태스크를 편집한 뒤 `task-master generate`로 재동기화한다(자주 겪는 함정: `tasks.json`만 수정하고 재생성하지 않으면 `task_0XX.md`가 옛 내용으로 남는다).

자주 쓰는 명령어(`task-master`가 전역 설치되어 있지 않으면 `npx -y --package=task-master-ai task-master <cmd>` 형태로 실행):

```bash
task-master list                          # 전체 태스크 + 상태
task-master next                          # 다음 작업 가능한 태스크
task-master show <id>                     # 태스크 상세 (예: 8 또는 8.2)
task-master set-status --id=<id> --status=in-progress|done
task-master remove-subtask --id=<parent.sub>
task-master remove-dependency --id=<id> --depends-on=<id>
task-master validate-dependencies         # dangling 의존성 검사
task-master generate                      # tasks.json에서 태스크 .md 재생성
```

전체 워크플로우는 아래에 임포트된 Task Master 가이드를 참조한다.

### 모델 / API 키 함정

`.mcp.json`의 API 키는 **플레이스홀더**이고 `.env`도 없어서, AI를 사용하는 TaskMaster 명령(`parse-prd`, `expand`, `add-task`, `update*`)은 Anthropic/Perplexity 호출에서 실패한다. 그래서 이 저장소의 `main` 모델은 외부 키가 필요 없는 **`claude-code` 프로바이더**로 설정되어 있다(`task-master models --set-main sonnet --claude-code`). 단 `claude-code` 프로바이더는 중첩된 `claude` 프로세스를 띄우므로 느릴 수 있다 — 가능하면 AI를 쓰지 않는 명령(status, generate, validate, remove-*)을 우선 사용한다. 실제 프로바이더를 쓰려면 `.env`에 `ANTHROPIC_API_KEY`(또는 `PERPLEXITY_API_KEY`)를 설정하고 `task-master models`로 모델을 되돌린다.

## 컨벤션

- 프로젝트 콘텐츠, 태스크 텍스트, 문서는 **한국어**로 작성한다(`.taskmaster/config.json`의 `responseLanguage`가 Korean).
- 페이지나 컴포넌트를 추가할 때는 `docs/PRD.md` §4–5에 명시된 정확한 컴포넌트 이름과 필수 섹션을 대조한다(예: `HeroSlider`, `SpecTable`, `ContactForm` — PRD가 이름을 명시적으로 지정한다).

## Task Master AI Instructions
**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md

# STEADYVIEW 브랜드 아이덴티티 & 디자인 시스템

> **문서 버전** v1.0 · **기준** `Images/Logo.png` (원본 불변) · **연동** PRD §5, §7, §8 / TaskMaster Task 1
> **목적** 로고를 변경하지 않고, 로고에서 추출한 색·형태·톤을 프리미엄 B2B 디자인 시스템(디자인 토큰)으로 확장한다. 본 문서는 Task 1.4(Tailwind 설정)와 Task 3(공통 레이아웃) 이후 모든 UI의 **단일 기준**이다.

---

## 1. 브랜드 분석 (로고 기반)

STEADYVIEW 로고는 회사의 사업(2D/3D 머신비전·산업용 X-ray 검사)과 일관된 시각 언어를 이미 담고 있다. 새 아이덴티티는 이를 "발명"하지 않고 **명문화·확장**한다.

| 요소 | 로고에서의 표현 | 브랜드 의미 | 시스템으로의 확장 |
|---|---|---|---|
| **심볼** | 동심 조리개(aperture) 링 | 광학·렌즈·초점·"View" | 섹션 디바이더, 로딩 스피너, 불릿, 배경 모티프로 재사용 |
| **워드마크 이원구조** | `Steady`(차콜) + `View`(그린) | 안정성 × 시각/정밀 | 텍스트 강조 시 핵심어를 그린으로 처리 |
| **그라디언트** | 포레스트 그린 → 올리브 → 골드 → 브론즈 | 정밀함(골드) + 신뢰·안정(그린) + 자연스러운 프리미엄 | 그린=구조/신뢰, 골드=정밀/강조(절제) |
| **태그라인** | "Unwavering Vision, Clear Direction" | 흔들림 없는 시야, 명확한 방향 | 톤앤매너: 단정·정밀·확신 |

**전략적 포지셔닝** — 산업 검사 B2B의 관습적인 "테크 블루"를 의도적으로 회피한다. **어시(earthy) 그린 + 골드**는 (1) 경쟁사와 즉시 구분되고, (2) 정밀 광학의 "프리미엄 기기" 느낌을 주며, (3) 안정성·신뢰라는 사명("Steady")과 색이 일치한다.

**디자인 원칙 4**
1. **정밀(Precision)** — 넉넉한 여백, 엄격한 그리드, 광학적 정렬. 장식은 최소.
2. **절제된 온기(Restrained Warmth)** — 골드는 강조에만. 면적의 5% 미만. 남용하면 저렴해진다.
3. **명료(Clarity)** — 사양·데이터 가독성 최우선. 대비 WCAG AA 이상.
4. **정적인 확신(Steady Confidence)** — 과한 모션 금지. 느리고 부드러운 이징.

---

## 2. 컬러 시스템 (디자인 토큰)

### 2.1 코어 브랜드 컬러 (로고 직접 추출)

| 토큰 | HEX | 출처 |
|---|---|---|
| `brand.forest` | `#4A7324` | 워드마크 "View" 그린 (브랜드 코어) |
| `brand.forestDeep` | `#2E4A1C` | 조리개 다크 그린 링 |
| `brand.gold` | `#CFA53E` | 조리개 앰버/골드 하이라이트 (강조 액센트) |
| `brand.umber` | `#8A6A34` | 태그라인 브론즈 / 브라운 링 |
| `brand.ink` | `#1C1C1A` | 워드마크 "Steady" 차콜 |

### 2.2 확장 스케일 (50–900)

**Forest (Primary / 그린 — 구조·신뢰·인터랙션)**
```
forest-50  #F3F6EE   forest-500 #5F8134
forest-100 #E3EBD5   forest-600 #4A7324  ← 코어(=View)
forest-200 #C8D8AE   forest-700 #3A5A1E
forest-300 #A6C07E   forest-800 #2E4A1C  ← Deep
forest-400 #82A353   forest-900 #1F3313
```

**Aureum (Accent / 골드 — 정밀·강조. 절제 사용)**
```
aureum-50  #FBF6E9   aureum-500 #B98C2F
aureum-100 #F4E9C6   aureum-600 #98701F
aureum-200 #E9D28C   aureum-700 #775617
aureum-300 #DCBA55   aureum-800 #5C4210
aureum-400 #CFA53E  ← 코어 액센트
```

**Umber (Secondary / 브론즈 — 어시 톤, 보조 강조·태그라인류)**
```
umber-400 #A5824A   umber-600 #6E5228
umber-500 #8A6A34   umber-700 #5C3B1E
```

**Ink (Neutral / 웜 그레이 — 텍스트·보더·서피스. 순수 회색이 아니라 살짝 웜)**
```
ink-50  #F7F6F0   ink-500 #6B6B64
ink-100 #ECEBE3   ink-600 #55554F
ink-200 #DAD9CF   ink-700 #3D3D39
ink-300 #B8B8AD   ink-800 #2A2A27
ink-400 #8F8F86   ink-900 #1C1C1A
paper   #FDFDFB   (기본 배경 — 순백이 아닌 웜 페이퍼)
```

### 2.3 시맨틱 토큰 (컴포넌트는 코어 스케일이 아니라 이 토큰을 참조)

| 시맨틱 | Light | Dark |
|---|---|---|
| `bg` (배경) | `paper` #FDFDFB | `#14150F` |
| `surface` (카드/패널) | `#FFFFFF` | `#1E201A` |
| `surface-muted` | `ink-50` #F7F6F0 | `#262922` |
| `border` | `ink-200` #DAD9CF | `#33362C` |
| `text` (본문) | `ink-900` #1C1C1A | `ink-100` #ECEBE3 |
| `text-muted` (보조) | `ink-500` #6B6B64 | `ink-300` #B8B8AD |
| `primary` (인터랙션) | `forest-600` #4A7324 | `forest-400` #82A353 |
| `primary-hover` | `forest-700` #3A5A1E | `forest-300` #A6C07E |
| `accent` (강조) | `aureum-400` #CFA53E | `aureum-300` #DCBA55 |
| `ring` (포커스) | `forest-500` #5F8134 | `forest-400` #82A353 |

**상태 색(어시 팔레트와 조화롭게 튜닝)**: `success` #4A7324(forest 재사용) · `warning` #B98C2F · `error` #A6402E · `info` #3A6A5A

### 2.4 대비 검증 (WCAG)
- `text` #1C1C1A on `paper` #FDFDFB → **16.8:1** (AAA)
- `primary` #4A7324 on white → **4.9:1** (AA, 버튼/링크 텍스트 가능)
- `text-muted` #6B6B64 on `paper` → **5.1:1** (AA)
- ⚠️ `accent` #CFA53E는 흰 배경 대비 **1.9:1** — **텍스트로 쓰지 말 것**. 배경/보더/아이콘/그래픽에만. 골드 위 텍스트는 `ink-900` 사용.

### 2.5 그라디언트 (로고 그라디언트 계승)
```
brand-gradient: linear-gradient(135deg, #2E4A1C 0%, #5F8134 40%, #CFA53E 100%)
```
히어로 스크림·CTA 배너·강조 라인에 제한적으로. 히어로 이미지 위 텍스트 가독성 스크림:
```
hero-scrim: linear-gradient(180deg, rgba(20,21,15,0) 0%, rgba(20,21,15,0.75) 100%)
```

---

## 3. 타이포그래피

다국어(ko/en/zh)·데이터 밀도 높은 B2B에 맞춘 선택.

| 역할 | 폰트 | 근거 |
|---|---|---|
| 본문·헤드라인 (ko + Latin) | **Pretendard Variable** | 한국어/라틴 모두 프리미엄·중립적, 굵기 폭 넓음, `next/font/local` 최적 |
| 중국어 (zh 로케일) | **Noto Sans SC** | Pretendard 한자 커버리지 보완 (zh 로케일에서만 로드) |
| 사양 수치·코드 | **JetBrains Mono** (선택) | SpecTable 숫자 정렬·비교 가독 |

> `next/font`로 self-host, `display: swap`, `preload`. PRD §9 폰트 최적화 준수. 폰트 파일은 `public/fonts/` 또는 `next/font/local`.

**타입 스케일** (base 16px, ratio ≈ 1.25 Major Third, 튜닝됨)

| 토큰 | size / line-height | weight | tracking | 용도 |
|---|---|---|---|---|
| `display` | 56 / 60 | 700 | -0.02em | 히어로 메인 카피 |
| `h1` | 40 / 46 | 700 | -0.02em | 페이지 타이틀 |
| `h2` | 32 / 40 | 600 | -0.01em | 섹션 타이틀 |
| `h3` | 24 / 32 | 600 | -0.01em | 서브섹션 |
| `h4` | 20 / 28 | 600 | 0 | 카드 제목 |
| `body-lg` | 18 / 30 | 400 | 0 | 리드 문단 |
| `body` | 16 / 26 | 400 | 0 | 기본 본문 |
| `small` | 14 / 22 | 400 | 0 | 보조 |
| `caption` | 12 / 16 | 500 | 0.02em | 라벨·캡션 |
| `overline` | 12 / 16 | 600 | 0.12em UPPER | 섹션 아이라벨(그린/골드) |

**규칙**
- 모바일 반응형: `display`/`h1`은 `clamp()`로 축소 (예: `clamp(2rem, 6vw, 3.5rem)`).
- 강조 핵심어는 로고 이원구조를 반영해 **`primary`(그린)** 로. 골드 텍스트 금지(§2.4).
- 한 화면 폰트 굵기 3종 이내.

---

## 4. 스페이싱 · 그리드 · 형태

- **스페이싱 스케일** 4px 베이스: `0,1(4),2(8),3(12),4(16),6(24),8(32),12(48),16(64),24(96),32(128)`
- **컨테이너** max-width `1280px`, 좌우 거터 `24px`(mobile) / `40px`(desktop)
- **그리드** 12칼럼, gap `24px`. 브레이크포인트 `sm 640 / md 768 / lg 1024 / xl 1280`
- **라운드(radius)** `sm 4 / md 8 / lg 12 / xl 16 / full`. 프리미엄 = 절제된 라운드(카드 `lg`, 버튼 `md`).
- **보더** 기본 `1px solid border`(#DAD9CF). 프리미엄 룩은 그림자보다 **정밀한 헤어라인 보더** 우선.
- **엘리베이션(웜 틴트 섀도, 절제)**
  - `sm` `0 1px 2px rgba(28,28,26,.06)`
  - `md` `0 4px 12px rgba(28,28,26,.08)`
  - `lg` `0 12px 32px rgba(28,28,26,.10)`
- **모션** duration `fast 150 / base 250 / slow 400`ms, easing `cubic-bezier(0.22,1,0.36,1)`(ease-out-quint). "Steady" 톤 — 큰 바운스·과속 금지. `prefers-reduced-motion` 존중.

---

## 5. 로고 사용 규정 (원본 불변)

로고 파일(`Images/Logo.png` → 배포 시 `public/logo/`)은 **재도색·재배치·왜곡 없이** 사용한다.

- **여백(clear space)**: 로고 심볼 내부 원 지름 이상을 사방 여백으로 확보.
- **최소 크기**: 가로형 기준 너비 `≥ 140px`(디지털). 헤더 표시 높이 `32–40px`.
- **배경**: 흰색/`paper`/`ink-50` 등 밝고 저채도 배경 위. 사진 위에는 흰 배경 pill 또는 충분한 여백 확보.
- **다크모드**: 원본 로고 위 대비 부족 시, 원본을 밝은 배경 컨테이너에 담아 배치(로고 색 변경 금지). 별도 화이트/모노 버전은 고객에게 요청(PRD §10 자산 체크리스트 — 투명 PNG/SVG).
- **금지**: 색 변경, 심볼/워드마크 분리 임의 사용, 그림자·외곽선 추가, 비율 왜곡, 저대비 배경.

> **자산 요청 권고**: 현재 `Logo.png`는 흰 배경 래스터로 보인다. 프리미엄 구현·다크모드·레티나를 위해 **투명 배경 SVG(가로형/심볼-only)** 를 고객에게 요청(PRD §10 이미 명시).

---

## 6. 아페르튀르 모티프 (로고 확장 — 로고 자체는 불변)

로고의 동심원 조리개를 **브랜드 장식 언어**로 코드에서 재생성(로고 이미지 재사용 아님):
- **섹션 디바이더**: 얇은 그린→골드 그라디언트 라인 + 우측 끝 미세 동심원.
- **로딩 스피너**: 회전하는 조리개 링(SVG).
- **불릿/아이콘 프레임**: 특징·사양 리스트 마커에 미니 동심원.
- **배경 워터마크**: 히어로/CTA에 초대형 저투명(≤5%) 조리개 아웃라인.
> 이는 로고를 "변형"하는 것이 아니라, 로고의 조형 원리를 UI 요소로 파생하는 것.

---

## 7. 컴포넌트 디자인 언어 (PRD 컴포넌트 매핑)

| 컴포넌트(PRD) | 디자인 규정 |
|---|---|
| **Button (primary)** | bg `primary`(forest-600), text white, radius `md`, hover `primary-hover`, focus ring `ring` 2px. |
| **Button (secondary)** | 투명 bg, `1px` `primary` 보더 + `primary` 텍스트, hover `forest-50` bg. |
| **Button (accent)** | `accent`(골드) bg + `ink-900` 텍스트. 최상위 CTA 1개에만(예: "견적문의 하기"). |
| **ProductCards** | `surface` bg, `border` 헤어라인, radius `lg`. hover 시 `md`→`lg` 섀도 + 상단 `2px` 골드 액센트 라인 등장 + 미세 상승(translateY -4px). |
| **HeroSlider** | `hero-scrim` 오버레이로 텍스트 대비 확보, 카피 `display`/`body-lg` 화이트, CTA는 accent 버튼. 인디케이터는 조리개 도트. |
| **SpecTable** | 짝수행 `surface-muted`, 헤더 `forest-800` bg/화이트 텍스트, 수치 `JetBrains Mono` 우측정렬. 모바일 가로 스크롤(overflow-x). |
| **Header/GNB** | `surface` bg + 하단 `border`, sticky 시 `sm` 섀도 + 살짝 반투명. 활성 메뉴 `primary` 언더라인. |
| **Footer** | `ink-900` bg, `ink-100` 텍스트, 링크 hover `aureum-300`. |
| **CtaBanner** | `brand-gradient` 배경 + 저투명 조리개 워터마크, 화이트 카피, accent 버튼. |
| **ContactForm** | 필드 `surface`, `border` 헤어라인, focus 시 `ring`. 에러 `error` 텍스트/보더. 라벨 `caption`/overline. |

---

## 8. 아키텍처 통합 (Task 1 연동 스펙)

디자인 토큰이 코드로 흐르는 경로:

```
brand-identity.md (본 문서, SoT)
        │
        ▼
app/globals.css  ──  :root / [data-theme="dark"] CSS 변수 (시맨틱 토큰)
        │
        ▼
tailwind.config.ts  ──  theme.extend.colors 가 CSS 변수를 참조
        │
        ▼
컴포넌트  ──  bg-primary / text-muted / border 등 시맨틱 유틸 사용
        │
next/font  ──  Pretendard(local) + Noto Sans SC(zh) → fontFamily 토큰
```

**Task 1.4 산출용 — `tailwind.config.ts` (theme.extend) 스펙**
```ts
// tailwind.config.ts (발췌 — Task 1.4에서 적용)
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 코어 스케일
        forest: { 50:"#F3F6EE",100:"#E3EBD5",200:"#C8D8AE",300:"#A6C07E",400:"#82A353",500:"#5F8134",600:"#4A7324",700:"#3A5A1E",800:"#2E4A1C",900:"#1F3313" },
        aureum: { 50:"#FBF6E9",100:"#F4E9C6",200:"#E9D28C",300:"#DCBA55",400:"#CFA53E",500:"#B98C2F",600:"#98701F",700:"#775617",800:"#5C4210" },
        umber:  { 400:"#A5824A",500:"#8A6A34",600:"#6E5228",700:"#5C3B1E" },
        ink:    { 50:"#F7F6F0",100:"#ECEBE3",200:"#DAD9CF",300:"#B8B8AD",400:"#8F8F86",500:"#6B6B64",600:"#55554F",700:"#3D3D39",800:"#2A2A27",900:"#1C1C1A" },
        paper:  "#FDFDFB",
        // 시맨틱(테마 전환 위해 CSS 변수 참조)
        bg:            "var(--bg)",
        surface:       "var(--surface)",
        "surface-muted":"var(--surface-muted)",
        border:        "var(--border)",
        text:          "var(--text)",
        "text-muted":  "var(--text-muted)",
        primary:       "var(--primary)",
        "primary-hover":"var(--primary-hover)",
        accent:        "var(--accent)",
        ring:          "var(--ring)",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "var(--font-noto-sc)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      borderRadius: { sm:"4px", md:"8px", lg:"12px", xl:"16px" },
      boxShadow: {
        sm:"0 1px 2px rgba(28,28,26,.06)",
        md:"0 4px 12px rgba(28,28,26,.08)",
        lg:"0 12px 32px rgba(28,28,26,.10)",
      },
      transitionTimingFunction: { brand: "cubic-bezier(0.22,1,0.36,1)" },
      maxWidth: { container: "1280px" },
    },
  },
};
export default config;
```

**`app/globals.css` (시맨틱 토큰 — 발췌)**
```css
:root {
  --bg:#FDFDFB; --surface:#FFFFFF; --surface-muted:#F7F6F0;
  --border:#DAD9CF; --text:#1C1C1A; --text-muted:#6B6B64;
  --primary:#4A7324; --primary-hover:#3A5A1E; --accent:#CFA53E; --ring:#5F8134;
}
[data-theme="dark"] {
  --bg:#14150F; --surface:#1E201A; --surface-muted:#262922;
  --border:#33362C; --text:#ECEBE3; --text-muted:#B8B8AD;
  --primary:#82A353; --primary-hover:#A6C07E; --accent:#DCBA55; --ring:#82A353;
}
```

> 위 두 블록은 **Task 1.4(설정 파일 구성)** 의 구현 입력이다. `/sc:design`은 스펙까지 생성하며, 실제 파일 반영은 `/sc:implement` 또는 Task 1 진행 시 수행한다.

---

## 9. Task 1 연계 & 다음 단계

| Task 1 서브태스크 | 본 문서가 제공하는 입력 |
|---|---|
| 1.3 폴더 구조 | `public/logo/`(로고), `public/fonts/`(Pretendard) 디렉터리 |
| **1.4 설정 파일** | §8 `tailwind.config.ts` colors/font/radius/shadow 토큰, `globals.css` CSS 변수 |
| 3.x 공통 레이아웃 | §7 Header/Footer 디자인 규정, §5 로고 사용 규정 |
| 4.x 메인/제품 | §7 HeroSlider·ProductCards·SpecTable·CtaBanner 규정, §6 조리개 모티프 |

**미해결/고객 확인 필요**
1. 투명 배경 **로고 SVG**(가로형/심볼) — 다크모드·레티나·프리미엄 구현에 필요 (PRD §10).
2. 다크모드 지원 범위 확정 여부(본 시스템은 light/dark 모두 정의).
3. 중국어 표기 간체/번체 — 폰트(Noto Sans SC vs TC) 선택에 영향 (PRD §12 오픈 이슈).

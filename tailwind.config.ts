import type { Config } from "tailwindcss";

/**
 * 디자인 토큰은 docs/brand-identity.md(§2, §8)에서 도출.
 * 코어 스케일은 정적 HEX, 시맨틱 토큰은 globals.css의 CSS 변수를 참조하여
 * 라이트/다크 테마 전환에 대응한다.
 */
const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#F3F6EE",
          100: "#E3EBD5",
          200: "#C8D8AE",
          300: "#A6C07E",
          400: "#82A353",
          500: "#5F8134",
          600: "#4A7324",
          700: "#3A5A1E",
          800: "#2E4A1C",
          900: "#1F3313",
        },
        aureum: {
          50: "#FBF6E9",
          100: "#F4E9C6",
          200: "#E9D28C",
          300: "#DCBA55",
          400: "#CFA53E",
          500: "#B98C2F",
          600: "#98701F",
          700: "#775617",
          800: "#5C4210",
        },
        umber: {
          400: "#A5824A",
          500: "#8A6A34",
          600: "#6E5228",
          700: "#5C3B1E",
        },
        ink: {
          50: "#F7F6F0",
          100: "#ECEBE3",
          200: "#DAD9CF",
          300: "#B8B8AD",
          400: "#8F8F86",
          500: "#6B6B64",
          600: "#55554F",
          700: "#3D3D39",
          800: "#2A2A27",
          900: "#1C1C1A",
        },
        paper: "#FDFDFB",
        // 시맨틱 토큰 (테마 전환 위해 CSS 변수 참조)
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-muted": "var(--surface-muted)",
        border: "var(--border)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        accent: "var(--accent)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(28,28,26,.06)",
        md: "0 4px 12px rgba(28,28,26,.08)",
        lg: "0 12px 32px rgba(28,28,26,.10)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22,1,0.36,1)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

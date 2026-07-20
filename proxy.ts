import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16의 proxy 컨벤션(구 middleware). next-intl 로케일 라우팅 처리.
export default createMiddleware(routing);

export const config = {
  // API·정적 파일·Next 내부 경로를 제외한 모든 경로에서 로케일 처리
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

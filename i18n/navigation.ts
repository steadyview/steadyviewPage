import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * 로케일 인식 네비게이션 API.
 * 컴포넌트에서는 next/link 대신 이 Link/useRouter 등을 사용해
 * 현재 로케일을 자동 유지한다.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

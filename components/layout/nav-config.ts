/** GNB/모바일 메뉴 공통 내비게이션 구조. href는 i18n/navigation의 Link가 로케일을 자동 부여한다. */
export type NavLeaf = { labelKey: string; href: string };
export type NavItem =
  | { type: "link"; labelKey: string; href: string }
  | { type: "group"; labelKey: string; href: string; children: NavLeaf[] };

export const navItems: NavItem[] = [
  {
    type: "group",
    labelKey: "about",
    href: "/about",
    children: [
      { labelKey: "aboutOverview", href: "/about" },
      { labelKey: "ceo", href: "/about/ceo" },
      { labelKey: "location", href: "/about/location" },
    ],
  },
  {
    type: "group",
    labelKey: "products",
    href: "/products/2d-vision",
    children: [
      { labelKey: "product2d", href: "/products/2d-vision" },
      { labelKey: "product3d", href: "/products/3d-vision" },
      { labelKey: "productXray", href: "/products/xray" },
    ],
  },
  { type: "link", labelKey: "ir", href: "/ir" },
  { type: "link", labelKey: "contact", href: "/contact" },
];

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import type { MainNavItem } from "@/types";

interface MainNavigationProps {
  items?: MainNavItem[];
}

export default function MobileNavigation({ items }: MainNavigationProps) {
  return <div>MobileNavigation</div>;
}

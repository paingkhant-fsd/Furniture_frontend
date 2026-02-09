import React from "react";
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

interface NavItem {
  title: string;
  card?: { title: string; href: string; description: string }[];
  menu?: { title: string; href: string }[];
}

interface MainNavigationProps {
  items?: NavItem[];
}

export default function MainNavigation({ items }: MainNavigationProps) {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link to="/" className="items-center space-x-2 flex">
        <div className="size-6" aria-hidden="true">
          <Icons.logo />
        </div>
        <span className="font-bold inline-block">{siteConfig.title}</span>
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {items?.[0]?.card && (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-96">
                  {items[0].card.map((item) =>
                    item.href ? (
                      <ListItem
                        key={String(item.title || item.href)}
                        href={item.href}
                        title={item.title}
                      >
                        {item.description}
                      </ListItem>
                    ) : null,
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
          {items?.[0]?.menu &&
            items[0].menu.map((item) => (
              <NavigationMenuItem key={String(item.title || item.href)}>
                <NavigationMenuLink asChild>
                  <Link to={String(item.href)}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={String(href)}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

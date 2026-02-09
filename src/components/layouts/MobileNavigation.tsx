import { Link } from "react-router-dom";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface NavItem {
  title: string;
  card?: { title: string; href: string; description: string }[];
  menu?: { title: string; href: string }[];
}

interface MobileNavigationProps {
  items?: NavItem[];
}

export default function MobileNavigation({ items }: MobileNavigationProps) {
  const navItems = items ?? siteConfig.mainNav;

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-4 size-5">
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="pt-6">
          <SheetClose asChild>
            <Link to="/" className="flex items-center gap-2 px-4 mb-4">
              <div className="size-4 mr-2">
                <Icons.logo />
              </div>
              <span className="font-bold">{siteConfig.title}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>

          <ScrollArea className="my-2 h-[calc(100vh-6rem)] pb-8 px-4">
            <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{items?.[0].title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-2">
                        {items?.[0].card?.map((item) => (
                          <SheetClose asChild key={item.title}> 
                          <Link to={String(item.href)} className="text-foreground/70">{item.title}</Link> 
                          </SheetClose>
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="flex flex-col space-y-2 mt-4">
              {navItems?.[0].menu?.map((item) => (
                <SheetClose asChild key={item.title}> 
                          <Link to={String(item.href)} className="">{item.title}</Link> 
                          </SheetClose>
              )
            )}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}

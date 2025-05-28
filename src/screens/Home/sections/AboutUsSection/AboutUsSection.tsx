import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "../../../../components/ui/sheet";

export const AboutUsSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Home", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Silver", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const NavigationLinks = () => (
    <>
      {navigationItems.map((item, index) => (
        <NavigationMenuItem key={index}>
          <NavigationMenuLink
            href={item.href}
            className="[font-family:'Roboto_Serif',Helvetica] font-normal text-[#e4d9d7] text-[28px] tracking-[-0.56px] leading-8"
          >
            {item.label}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </>
  );

  return (
    <header className="flex items-center justify-between py-[18px] w-full bg-[#0d0402] z-[2]">
      <div className="flex items-center h-12 gap-3">
        <h1 className="[font-family:'Source_Serif_4',Helvetica] font-semibold text-[#e4d9d7] text-[42px] tracking-[-1.68px] leading-[42px]">
          Leichtfried
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex items-start gap-9">
            <NavigationLinks />
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-[#e4d9d7]">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#0d0402] border-[#e4d9d7] border-opacity-20">
            <SheetTitle className="text-[#e4d9d7]">Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Roboto_Serif',Helvetica] font-normal text-[#e4d9d7] text-2xl tracking-[-0.56px] leading-8"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const AboutUsSection = (): JSX.Element => {
  // Navigation items data for mapping
  const navigationItems = [
    { label: "Home", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Silver", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between py-[18px] w-full bg-[#0d0402] z-[2]">
      {/* Brand logo/name */}
      <div className="flex items-center h-12 gap-3">
        <h1 className="[font-family:'Source_Serif_4',Helvetica] font-semibold text-[#e4d9d7] text-[42px] tracking-[-1.68px] leading-[42px]">
          Leichtfried
        </h1>
      </div>

      {/* Navigation menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex items-start gap-9">
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
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

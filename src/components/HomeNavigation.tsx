"use client";

import Link from "next/link";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function HomeNavigation() {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-md">
        <div>
          <Link href="/" className="font-bold text-xl">Anonymous Messenger</Link>
        </div>
        <div>
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList>
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuLink asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuLink asChild>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/sign-in">Login</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/sign-up">Sign-up</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}

export default HomeNavigation;

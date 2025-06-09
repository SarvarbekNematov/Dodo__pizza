"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Navbar__data } from "@/data";
import "./head.css";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const Navbar = () => {
  const visibleItems = Navbar__data.slice(0, Navbar__data.length - 3);
  const dropdownItems = Navbar__data.slice(-3);

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="overflow-x-hidden">
      <NavigationMenu className="navigation__list ">
        <div className="lg:hidden">
          <NavigationMenuList className="flex gap-[5px]">
            {Navbar__data.map((item, index) => (
              <NavigationMenuItem
                className="bg-[#f3f3f7] px-[12px] py-[7px] flex justify-center cursor-pointer rounded-[40px] "
                key={index}
              >
                <NavigationMenuLink className="p-0" asChild>
                  <Link href={item.link}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </div>
      </NavigationMenu>
      <nav className="hidden relative  lg:flex justify-between ">
        <div className="flex items-center gap-4 flex-wrap">
          {visibleItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="text-sm font-medium text-black hover:text-red-500"
            >
              {item.title}
            </a>
          ))}

          {/* See more dropdown */}
          {/* <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-[9999px]">
                Components
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:grid-cols-2 w-[200px] ">
                  {dropdownItems.map((item) => (
                    <a key={item.title} title={item.title} href={item.link}>
                      {item.title}
                    </a>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu> */}

          <Select>
            <SelectTrigger className="w-[180px] rounded-[9999px]">
              <SelectValue placeholder="Components" />
            </SelectTrigger>
            <SelectContent>
              <ul className="grid gap-3 p-4 md:grid-cols-1 w-[200px] ">
                  {dropdownItems.map((item) => (
                    <a key={item.title} title={item.title} href={item.link}>
                      {item.title}
                    </a>
                  ))}
                </ul>
            </SelectContent>
          </Select>

          <span className="text-xl">•</span>
          <a
            href="#promotions"
            className="text-sm font-medium text-black hover:text-red-500"
          >
            Promotions
          </a>
        </div>
        <div>
          <Button onClick={() => setIsOpen(true)} className="bg-[#ff6700]">
            My order{" "}
          </Button>
        </div>
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;

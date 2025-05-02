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

const Navbar = () => {
  return (
    <div className="overflow-x-hidden">
      <NavigationMenu className="navigation__list">
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

          <NavigationMenuItem className="hidden ">
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;

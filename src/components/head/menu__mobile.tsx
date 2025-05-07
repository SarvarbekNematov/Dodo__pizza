import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

import { IoMenu } from "react-icons/io5";
import Login from './login';


const Menu__mobile = () => {



  return (
    <div>
        <Sheet>
              <SheetTrigger>
                <IoMenu className="w-[25px] h-[25px]" />
              </SheetTrigger>
              <SheetContent className="w-full">
                <DialogTitle></DialogTitle>
                <SheetHeader>
                  <ul className="gap-[20px] items-center grid grid-cols-1 text-center">
                    <li className="flex items-center justify-center">
                      <span className="block w-[9px] h-[9px] rounded-[50%] bg-red-500"></span>
                      <p className="text-[14px] leading-[20px] pl-[10px]">
                        Live
                      </p>
                    </li>
                    <li>
                      <a
                        className="CustomFont text-[14px] leading-[20px]"
                        href=""
                      >
                        Franchise
                      </a>
                    </li>
                    <li>
                      <Link
                        className="CustomFont text-[14px] leading-[20px]"
                        href="/product"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="CustomFont text-[14px] leading-[20px]"
                        href={"/contacts"}
                      >
                        Store info
                      </Link>
                    </li>
                    <li>
                      <Login extraclass={false}/>
                    </li>
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
    </div>
  )
}

export default Menu__mobile
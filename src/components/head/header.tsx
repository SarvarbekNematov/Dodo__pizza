import { IoMenu } from "react-icons/io5";
import { DodoCoinIcon, LogoIcon } from "../../../public/icons";
import { Button } from "../ui/button";
import "./head.css";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex gap-[40px]">
          <div className="w-[150px] h-[50px]">
            <LogoIcon />
          </div>
          <div className="hidden pizza">
            <h2>Pizza delivery </h2>
            <button>Ташкент</button>
          </div>
          <div className="hidden">
            <h3>1168</h3>
            <p>Call toll free</p>
          </div>
        </div>

        <div>
          <div className="hidden">
            <DodoCoinIcon />
            <p>Dodocoins</p>
          </div>
          <div className="hidden">
            <Button className="px-[16px] py-[8px] bg-[#f3f3f7] text-black rounded-[9999px] border-0 font-medium">
              Log in
            </Button>
          </div>
          <div className=" flex items-center md:hidden ">
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
                      <Dialog>
                        <DialogTrigger
                          asChild
                          className="border-1 px-[12px] py-[4px] rounded-[12px]"
                        >
                          <Button>Log in</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Kodni Kiriting</DialogTitle>
                            <DialogDescription className="text-[#101010d0] leading-[18px]">
                              <a
                                className="text-black underline text-[16px]"
                                href="https://t.me/dodaPizzaBot"
                              >
                                Dodo_pizza_bot
                              </a>{" "}
                              telegram botiga kiring va 1 daqiqalik kodingizni
                              kiriting
                            </DialogDescription>
                          </DialogHeader>
                          <div>
                            <div className="flex justify-center">
                              <InputOTP maxLength={6}>
                                <InputOTPGroup className="flex gap-[10px]">
                                  <InputOTPSlot index={0} className="rounded-[10px] h-[50px]"/>
                                  <InputOTPSlot index={1} className="rounded-[10px] h-[50px]"/>
                                  <InputOTPSlot index={2} className="rounded-[10px] h-[50px]"/>
                                  <InputOTPSlot index={3} className="rounded-[10px] h-[50px]"/>
                                  <InputOTPSlot index={4} className="rounded-[10px] h-[50px]"/>
                                  <InputOTPSlot index={5} className="rounded-[10px] h-[50px]"/>
                                </InputOTPGroup>
                              </InputOTP>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </li>
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

import { IoMenu } from "react-icons/io5";
import { request } from "@/api";
import { handleGetAccessToken } from "@/lib/actions";
import { handleSignIn } from "@/actions/auth";
import SignIn from "@/app/sign-in";
import { useRouter } from "next/navigation";

interface UserInfo {
  email?: string;
  sub?: string;
  name?: string;
  isAuthenticated?: boolean;
}

const Menu__mobile = () => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const fetchUserInfo = async () => {
      try {
        // localStorage-dan tokenni olish
        const token = localStorage.getItem('access_token');
        if (token) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Token tekshirishda xatolik:', error);
        setIsAuthenticated(false);
      }
    };
  
    useEffect(() => {
      const init = async () => {
        await fetchUserInfo();
      };
  
    }, []);
  
    useEffect(() => {
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === 'access_token') {
          fetchUserInfo();
        }
      };
      window.addEventListener('storage', handleStorageChange);
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);
  
    const GetAccessToken = ({ onGetAccessToken }: { onGetAccessToken: () => Promise<string> }) => {
      useEffect(() => {
        const fetchToken = async () => {
          try {
            const token = await onGetAccessToken();
            if (token) {
              localStorage.setItem('access_token', token);
              request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
              
              // Token olingandan keyin user ma'lumotlarini yangilash
              await fetchUserInfo();
            }
          } catch (error) {
            console.error('Error fetching access token:', error);
          }
        };
  
        fetchToken();
      }, [onGetAccessToken]);
  
      return null;
    };

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <IoMenu className="w-[25px] h-[25px]" />
        </SheetTrigger>
        <SheetContent className="w-full">
          <DialogTitle></DialogTitle>
          <SheetHeader>
            <ul className="gap-[20px] items-center grid grid-cols-1 text-center">
              <li className="flex items-center justify-center">
                <span className="block w-[9px] h-[9px] rounded-[50%] bg-red-500"></span>
                <p className="text-[14px] leading-[20px] pl-[10px]">Live</p>
              </li>
              <li>
                <a className="CustomFont text-[14px] leading-[20px]" href="">
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
              <li className="flex items-center justify-center ">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center gap-2">
                      {userInfo?.name && (
                        <span className="text-sm">Hello, {userInfo.name}!</span>
                      )}
                      {userInfo?.email && (
                        <span className="text-sm text-gray-600">
                          ({userInfo.email})
                        </span>
                      )}
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => {
                          setOpen(false);
                          router.push("/profile");
                        }}
                      >
                        Profile
                      </button>
                    </div>
                  </>
                ) : (
                  <SignIn onSignIn={handleSignIn} setOpen={setOpen} />
                )}
              </li>
            </ul>
          </SheetHeader>
        </SheetContent>
      <GetAccessToken onGetAccessToken={handleGetAccessToken} />
      </Sheet>
    </div>
  );
};

export default Menu__mobile;

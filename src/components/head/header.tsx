"use client"

import { DodoCoinIcon, LogoIcon } from "../../../public/icons";
import Menu__mobile from "./menu__mobile";
import SignIn from "@/app/sign-in";
import { handleSignIn } from "@/actions/auth";
import { handleGetAccessToken } from "@/lib/actions";
import { request } from "@/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import "./head.css";

interface UserInfo {
  email?: string;
  sub?: string;
  name?: string;
  isAuthenticated?: boolean;
}

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
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
    <div className="">
      <div className="flex justify-between md:px-[10px]">
        <div className="flex gap-[40px]">
          <div onClick={() => router.push('/')} className="w-[150px] h-[50px] md:w-[250px]">
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
          <div className="hidden md:block">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2">
                  {userInfo?.name && <span className="text-sm">Hello, {userInfo.name}!</span>}
                  {userInfo?.email && <span className="text-sm text-gray-600">({userInfo.email})</span>}
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => router.push('/profile')}
                  >
                    Profile
                  </button>
                </div>
              </>
            ) : (
              <SignIn onSignIn={handleSignIn} setOpen={setOpen} />
            )}
          </div>
          <div className="flex items-center md:hidden">
            <Menu__mobile />
          </div>
        </div>
      </div>
      <GetAccessToken onGetAccessToken={handleGetAccessToken} />
    </div>
  );
};

export default Header;

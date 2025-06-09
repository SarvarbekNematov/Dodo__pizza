"use client"

import { DodoCoinIcon, LogoIcon } from "../../../public/icons";
import Menu__mobile from "./menu__mobile";
import SignOut from "@/app/sign-out";
import SignIn from "@/app/sign-in";
import { handleSignIn, handleSignOut } from "@/actions/auth";
import { handleGetAccessToken } from "@/lib/actions";
import { request, saveUserInfo } from "@/api";

import "./head.css";
import { useEffect, useState } from "react";

interface UserInfo {
  email?: string;
  sub?: string;
  name?: string;
  isAuthenticated?: boolean;
}

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  useEffect(() => {

  },[])
  const fetchUserInfo = async () => {
    // try {
    //   const res = await fetch("/api/auth/context");
    //   const data = await res.json();
      
    //   // console.log("=== DEBUG INFO START ===");
    //   // console.log("Raw response data:", data);
      
    //   // if (data.claims) {
    //   //   console.log("All claims:", data.claims);
    //   //   console.log("Username:", data.claims.username);
    //   //   console.log("Name:", data.claims.name);
    //   //   console.log("Email:", data.claims.email);
    //   //   console.log("Preferred username:", data.claims.preferred_username);
    //   //   console.log("Subject:", data.claims.sub);
    //   // }
      
    //   // console.log("=== DEBUG INFO END ===");

    //   if (data.isAuthenticated && data.claims) {
    //     // Barcha mumkin bo'lgan maydonlarni tekshiramiz
    //     const userInfo = {
    //       email: data.claims.email || 
    //              data.claims.preferred_username || 
    //              data.claims.username ||
    //              data.claims['https://auth.logto.io/email'] || '',
    //       name: data.claims.name || 
    //             data.claims.nickname || 
    //             data.claims.name || 
    //             data.claims.preferred_username ||
    //             data.claims['https://auth.logto.io/username'] || '',
    //       sub: data.claims.sub || '',
    //       isAuthenticated: true
    //     };
        
    //     // console.log("Processed user info:", userInfo);
        
    //     setUserInfo(userInfo);
    //     saveUserInfo(userInfo);
    //   }
      
    //   setIsAuthenticated(data.isAuthenticated);
    // } catch (error) {
    //   console.error("Auth context error:", error);
    // }
  };

  useEffect(() => {
    const init = async () => {
      await fetchUserInfo();
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
          <div className="w-[150px] h-[50px] md:w-[250px]">
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
                  <SignOut onSignOut={handleSignOut} />
                </div>
              </>
            ) : (
              <SignIn onSignIn={handleSignIn} />
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

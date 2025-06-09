'use server'

import { getAccessToken, signIn, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "@/app/logto";

export async function handleGetAccessToken() {
  try {
    const token = await getAccessToken(logtoConfig);
    return token || '';
  } catch (error) {
    console.error('Error getting access token:', error);
    return '';
  }
}

export async function handleSignIn() {
  return signIn(logtoConfig);
}

export async function handleSignOut() {
  try {
    // Server tomondan logout
    await signOut(logtoConfig);
    
    // Client tomondan tozalash uchun funksiya
    if (typeof window !== 'undefined') {
      // LocalStorage-ni tozalash
      localStorage.clear();
      
      // Sessionstorage-ni tozalash
      sessionStorage.clear();
      
      // Cookie-larni tozalash
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
    }
  } catch (error) {
    console.error('Error during sign out:', error);
  }
}
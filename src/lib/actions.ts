'use server'

import { getAccessToken, signIn, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "@/app/logto";

export async function handleGetAccessToken() {
  return getAccessToken(logtoConfig);
}

export async function handleSignIn() {
  return signIn(logtoConfig);
}

export async function handleSignOut() {
  return signOut(logtoConfig);
}
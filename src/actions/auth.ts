'use server';

import { logtoConfig } from "@/app/logto";
import { signIn as logtoSignIn, signOut as logtoSignOut } from "@logto/next/server-actions";

export async function handleSignIn() {
  await logtoSignIn(logtoConfig);
}

export async function handleSignOut() {
  await logtoSignOut(logtoConfig);
}

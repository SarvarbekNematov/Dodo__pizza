'use client';

import { Button } from "@/components/ui/button";

type Props = { onSignIn: () => Promise<void> };

export default function SignIn({ onSignIn }: Props) {
  return <Button className="cursor-pointer" onClick={onSignIn}>Kirish</Button>;
}

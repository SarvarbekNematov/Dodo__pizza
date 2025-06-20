'use client';

import { Button } from "@/components/ui/button";

type Props = { onSignIn: () => Promise<void> , setOpen: (open: boolean) => void };

export default function SignIn({ onSignIn , setOpen }: Props) {
  return <Button className="cursor-pointer" onClick={() => { onSignIn(); setOpen(false); }}>Kirish</Button>;
}

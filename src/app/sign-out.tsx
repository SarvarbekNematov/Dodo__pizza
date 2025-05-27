'use client';

type Props = { onSignOut: () => Promise<void> };

export default function SignOut({ onSignOut }: Props) {
  return <button className="cursor-pointer" onClick={onSignOut}>Chiqish</button>;
}

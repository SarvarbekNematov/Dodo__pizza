'use client';

import { useRouter } from 'next/navigation';

interface Props {
  isAuthenticated: boolean;
}

export default function OrderButton({ isAuthenticated }: Props) {
  const router = useRouter();

  const handleClick = () => {
    if (isAuthenticated) router.push('/order');
    else router.push('/sign-in');   // signIn server-action ham bo‘ladi, ammo
  };

  return <button onClick={handleClick}>Buyurtma berish</button>;
} 

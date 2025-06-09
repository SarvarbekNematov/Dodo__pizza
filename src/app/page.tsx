
import QueryProvider from '@/components/providers/query-provider'
import { Suspense } from 'react'
import ClientHome from "@/components/client/client-home";
import { getAccessToken, getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import { logtoConfig } from './logto';


export default async function HomePage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);
 console.log(isAuthenticated, claims, 'isAuth')
  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QueryProvider>
        <ClientHome />
      </QueryProvider>
    </Suspense>
  )
}

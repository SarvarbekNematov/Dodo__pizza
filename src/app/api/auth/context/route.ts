// app/api/auth/context/route.ts
import { getLogtoContext } from '@logto/next/server-actions';
import { logtoConfig } from '@/app/logto'; // yo'li sizda qanday bo'lsa, shunday o'zgartiring

export async function GET() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);
  console.log(`User is authenticated: ${isAuthenticated}`);
  console.log(`User claims:`, claims);
  
  return Response.json({ isAuthenticated, claims });
}
import { getLogtoContext } from '@logto/next/server-actions';
import { redirect } from 'next/navigation';
import { logtoConfig } from '../logto';

export default async function OrderPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated) redirect('/order');

  return (
    <div>
      <h1>Buyurtma sahifasi</h1>
      <p>Foydalanuvchi: {claims?.name ?? claims?.sub}</p>
      {/* buyurtma formasi */}
    </div>
  );
}

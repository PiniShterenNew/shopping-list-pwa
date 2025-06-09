import type { Metadata } from 'next';
import { LogoutPage } from '@/components/auth/LogoutPage';

export const metadata: Metadata = {
  title: 'Logout | Shopping List App',
  description: 'Logging out of your account',
};

export default function LogoutRoute() {
  return <LogoutPage />;
}

import type { Metadata } from 'next';
import { LoginForm } from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Login | Shopping List App',
  description: 'Login to your shopping list account',
};

export default function LoginPage() {
  return <LoginForm />;
}

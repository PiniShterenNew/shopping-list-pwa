import type { Metadata } from 'next';
import { RegisterForm } from '@/components/auth/RegisterForm';

export const metadata: Metadata = {
  title: 'Register | Shopping List App',
  description: 'Create a new shopping list account',
};

export default function RegisterPage() {
  return <RegisterForm />;
}

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../store/auth';

export default function Logout() {
  const router = useRouter();
  const clear = useAuth((s) => s.clear);
  useEffect(() => {
    clear();
    router.push('/');
  }, [clear, router]);
  return <p className="p-8">Logging out...</p>;
}

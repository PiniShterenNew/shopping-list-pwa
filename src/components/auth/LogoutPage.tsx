'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

export function LogoutPage() {
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);
  
  useEffect(() => {
    // Small delay to allow the component to render before logout
    const timer = setTimeout(() => {
      logout();
      router.push('/login');
    }, 500);
    
    return () => clearTimeout(timer);
  }, [logout, router]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="animate-pulse text-center">
        <h1 className="text-2xl font-bold mb-4">Logging out...</h1>
        <p className="text-gray-600 dark:text-gray-400">Please wait while we log you out</p>
      </div>
    </div>
  );
}

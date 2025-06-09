'use client';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

interface LogoutButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'text';
}

export function LogoutButton({ className = '', variant = 'primary' }: LogoutButtonProps) {
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);
  
  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const baseClasses = 'font-medium py-2 px-4 rounded-md transition';
  
  const variantClasses = {
    primary: 'bg-red-600 hover:bg-red-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    text: 'text-red-600 hover:text-red-700 hover:underline px-0'
  };
  
  return (
    <button 
      onClick={handleLogout}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      Logout
    </button>
  );
}

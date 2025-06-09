'use client';
import Link from 'next/link';
import { useAuth } from '../store/auth';

export default function Home() {
  const { user } = useAuth();
  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Shopping List PWA</h1>
      {user ? (
        <>
          <p>Welcome {user.email}</p>
          <Link className="text-blue-600" href="/logout">Logout</Link>
        </>
      ) : (
        <div className="flex gap-4">
          <Link className="text-blue-600" href="/login">Login</Link>
          <Link className="text-blue-600" href="/register">Register</Link>
        </div>
      )}
    </div>
  );
}

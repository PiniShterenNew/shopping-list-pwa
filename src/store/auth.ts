import { create } from 'zustand';
import { User } from '../types/user';

interface State {
  user: User | null;
  token: string | null;
  setAuth: (token: string, user: User) => void;
  clear: () => void;
}

export const useAuth = create<State>((set) => ({
  user: null,
  token: null,
  setAuth: (token, user) => set({ token, user }),
  clear: () => set({ token: null, user: null }),
}));

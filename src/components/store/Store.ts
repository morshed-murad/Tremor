import create from "zustand";
import { persist } from "zustand/middleware";

export interface UserStore {
  isLoggedIn: boolean;

  login: () => void;
  logout: () => void;
}
export const UseContexts = create(
  persist<UserStore>(
    (set) => ({
      isLoggedIn: false,
      login: () => set(() => ({ isLoggedIn: true })),
      logout: () => set(() => ({ isLoggedIn: false })),
    }),
    {
      name: "UserStore",
    }
  )
);

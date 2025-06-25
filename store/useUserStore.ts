import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      fetchUser: async () => {
        try {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
          );
          const data: User = await res.json();
          set({ user: data });
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      },
    }),
    {
      name: "user-store", 
    }
  )
);

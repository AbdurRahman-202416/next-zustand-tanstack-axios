import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useMyData = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 }),
      decrement: () =>
        set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
    }),
    {
      name: "my-Counter-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useMyData;

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useMyData = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 }),
      decrement: () =>
        set((state) => {
          if (state.count > 0) {
            return { count: state.count - 1 };
          } else {
            alert("Count cannot be negative");
            return { count: 0 };
          }
        }),
    }),
    {
      name: "my-Counter-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useMyData;

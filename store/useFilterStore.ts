import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FilterState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
interface User {
  id: number;
  name: string;
  email: string;
}


export const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      searchTerm: "",
      setSearchTerm: (term) => set({ searchTerm: term }),
    }),
    {
      name: "filter-store",
    }
  )
);



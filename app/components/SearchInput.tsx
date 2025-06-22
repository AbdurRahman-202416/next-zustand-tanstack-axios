"use client";

import React from "react";
import { useFilterStore } from "../../store/useFilterStore";

export default function SearchInput() {
  const searchTerm = useFilterStore((state) => state.searchTerm);
  const setSearchTerm = useFilterStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search users..."
      className="border p-2 rounded w-full max-w-md"
    />
  );
}

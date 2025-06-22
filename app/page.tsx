"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/queryClient";
import SearchInput from "./components/SearchInput";
import UserList from "./components/UserList";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">User List App</h1>
        <SearchInput />
        <div className="mt-6">
          <UserList />
        </div>
      </main>
    </QueryClientProvider>
  );
}

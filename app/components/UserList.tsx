"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../lib/api";
import { useFilterStore } from "../../store/useFilterStore";
import { useUserStore } from "@/store/useUserStore";
import Link from "next/link";
import { T_userType } from "../test/page";

export default function UserList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const searchTerm = useFilterStore((state) => state.searchTerm.toLowerCase());
  const users = useUserStore((state) => state.user);
  console.log("Users from store:", users);

  if (isLoading) return <div>Loading users...</div>;
  if (isError) return <div>Error loading users.</div>;

  const filteredUsers = data.filter((user: T_userType) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <nav className="bg-white shadow-md rounded-lg p-4 mb-6">
        <ul className="flex  justify-between items-center gap-2 sm:gap-4">
          <li className="pr-4 border-r border-orange-600">
            <Link
              href="/"
              className="block text-sm md:text-base lg:text-lg font-semibold text-orange-600 px-2 hover:underline hover:text-orange-700 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li className="pr-4 border-r border-orange-600">
            <Link
              href="/counter"
              className="block text-sm md:text-base lg:text-lg font-semibold text-orange-600 px-2 hover:underline hover:text-orange-700 transition-colors duration-200"
            >
              Counter Page
            </Link>
          </li>
          <li>
            <Link
              href="/test"
              className="block text-sm md:text-base lg:text-lg font-semibold text-orange-600 px-2 hover:underline hover:text-orange-700 transition-colors duration-200"
            >
              NotFound Page
            </Link>
          </li>
        </ul>
      </nav>

      <ul className="list-disc pl-5">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user: T_userType) => (
            <li className="text-lg text-green-700" key={user.id}>
              {user.name}
            </li>
          ))
        ) : (
          <li>No users found.</li>
        )}
      </ul>
    </div>
  );
}

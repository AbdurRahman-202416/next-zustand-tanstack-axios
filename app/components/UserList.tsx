"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../lib/api";
import { useFilterStore } from "../../store/useFilterStore";
import { useUserStore } from "@/store/useUserStore";
import Link from "next/link";

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

  const filteredUsers = data.filter((user: any) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <nav className=" p-4 mb-6 ">
        <ul className="flex space-x-4">
          <li className="text-lg text-orange-600 font-bold px-2 border-r-2 border-gray-300">
            <Link href="/" className=" hover:underline">
              Home
            </Link>
          </li>
          <li className="text-lg text-orange-600 font-bold px-2 border-r-2 border-gray-300">
            <Link href="/counter" className=" hover:underline">
              Counter Page
            </Link>
          </li>
          <li className="text-lg text-orange-600 font-bold px-2 border-r-2 border-gray-300">
            <Link href="/123" className=" hover:underline">
              Not Found Page
            </Link>
          </li>
        </ul>
      </nav>

      <ul className="list-disc pl-5">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user: any) => (
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

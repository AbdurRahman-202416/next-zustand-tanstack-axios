"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../lib/api";
import { useFilterStore } from "../../store/useFilterStore";

export default function UserList() {
  const { data, isLoading, isError } = useQuery(["users"], fetchUsers);
  const searchTerm = useFilterStore((state) => state.searchTerm.toLowerCase());

  if (isLoading) return <div>Loading users...</div>;
  if (isError) return <div>Error loading users.</div>;

  const filteredUsers = data.filter((user: any) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <ul className="list-disc pl-5">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))
      ) : (
        <li>No users found.</li>
      )}
    </ul>
  );
}

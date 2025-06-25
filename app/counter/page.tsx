"use client";
import useMyData from "@/store/useCounterStore";
import Link from "next/link";
import React from "react";

export default function page() {
  const { count, increment, reset, decrement } = useMyData();
  return (
    <div className=" text-center mt-10 bg-gray-800">
      <Link
        href="/"
        className="text-lg text-orange-600 font-bold px-2 border-r-2 border-gray-300"
      >
        Home
      </Link>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
        <h1 className="text-2xl font-bold">Counter Page</h1>
        <p className="mt-2 text-sm text-wrap">
          You can increment, decrement, or reset the counter.
        </p>
        <div>
          <p className="text-lg mt-4">Current Count: {count}</p>
          <div className="mt-4">
            <button
              onClick={increment}
              className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
            >
              Decrement
            </button>
            <button
              onClick={reset}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

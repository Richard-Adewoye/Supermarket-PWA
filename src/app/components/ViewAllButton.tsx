"use client";

import Link from "next/link";

export default function ViewAllButton() {
  return (
    <div className="flex justify-center">
      <Link
        href="/shop"
        className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
      >
        See All
      </Link>
    </div>
  );
}

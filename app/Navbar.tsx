"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-200">
                MDEditor
              </span>
            </Link>
            <div className="space-x-3">
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "text-gray-100"
                    : "text-gray-400 hover:text-gray-200"
                } text-sm font-medium`}>
                Example1
              </Link>
              <Link
                href="/example2"
                className={`${
                  pathname === "/example2"
                    ? "text-gray-100"
                    : "text-gray-400 hover:text-gray-200"
                } text-sm font-medium`}>
                Example2
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

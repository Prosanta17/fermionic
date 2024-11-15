"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AdminSidebar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    // Set the current path on component mount
    setCurrentPath(window.location.pathname);

    // Listen to URL changes
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <div className="z-9999 dark:bg-boxdark fixed left-0 top-0 flex h-screen w-64 flex-col overflow-y-hidden bg-black duration-300 ease-linear">
      <div className="flex items-center justify-center gap-2 px-6 py-3 border-b border-slate-600">
        <Image
          src="/images/logo/logo-white.png"
          alt="logo"
          className="w-24"
          width={50}
          height={10}
        />
      </div>
      <ul className="flex flex-col px-6 py-8 text-white text-sm">
        <li
          className={`flex ${
            currentPath === "/admin/product" ? "bg-slate-600" : ""
          }`}
        >
          <Link href="/admin/product" className="w-full px-4 py-3">
            Product Manage
          </Link>
        </li>
        <li
          className={`flex ${
            currentPath === "/admin/silicon-ip" ? "bg-slate-600" : ""
          }`}
        >
          <Link href="/admin/silicon-ip" className="w-full px-4 py-3">
            Silicon IP Manage
          </Link>
        </li>
        <li
          className={`flex ${
            currentPath === "/admin/blog" ? "bg-slate-600" : ""
          }`}
        >
          <Link href="/admin/blog" className="w-full px-4 py-3">
            Blog Manage
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
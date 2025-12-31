"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { HomeNavigation } from "./HomeNavigation";

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const user = session?.user as User | undefined;

  return (
    <nav className="p-4 md:p-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-xl font-bold mb-4 md:mb-0">
          Anonymous Messenger
        </a>
        {session ? (
          <>
            <span className="mr-4">
              Welcome, {user?.username || user?.email}
            </span>
            <button onClick={() => signOut()} className="w-full md:w-auto">
              Logout
            </button>
          </>
        ) : (
          <div className="mx-10">
            <HomeNavigation />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


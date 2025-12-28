'use client';

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Component() {
  const {data: session} = useSession();
  if(session) {
    return <div>
      <h2>Signed in as {session.user?.email}</h2>
      <p>Welcome to the sign-in page.</p>
      <br />
      <button onClick={() => signOut()}>Sign Out</button>
    </div>;
  }
  return <div>
    <h2>You are not signed in</h2>
    <p>Please sign in to access your account.</p>
    <br />
    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer" onClick={() => signIn()}>Sign In</button>
  </div>;

}
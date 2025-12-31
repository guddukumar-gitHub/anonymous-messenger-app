"use client";

import Navbar from "@/components/Navbar";
import { Separator } from "@radix-ui/react-separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image"

const AboutPage = () => {
  return (
    <>
      <header>
        {/* Navbar */}
        <Navbar />
      </header>
      <main>
        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About Anonymous Messenger</h1>
          <p className="mb-4">
            Anonymous Messenger is a platform dedicated to providing users with
            a safe and private space to communicate without revealing their
            identities. Our mission is to foster honest and open conversations
            while prioritizing user privacy and security.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Anonymous messaging</li>
            <li>End-to-end encryption</li>
            <li>No personal information required</li>
            <li>Secure and private conversations</li>
          </ul>
        </div>
      </main>
      <Separator />
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        
      </AspectRatio>
      {/* Footer */}
      <footer className="text-center p-4 md:p-6">
        &copy; {new Date().getFullYear()} Anonymous Messenger. All rights
        reserved.
      </footer>
    </>
  );
};

export default AboutPage;

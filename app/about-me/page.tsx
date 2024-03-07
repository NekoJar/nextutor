"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AboutMePage = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <h1 className="font-extrabold">About Me</h1>
      <div className="flex flex-col w-32 mt-4 ml-4 gap-2 border p-4 text-center">
        <button className="hover:text-red-400" onClick={() => setOpen(!isOpen)}>
          {isOpen ? "Close me!!" : "Click me!!"}
        </button>
        {isOpen && <p className="text-red-700">hellow</p>}

        <button
          className="bg-black rounded-md border text-white p-2 hover:bg-slate-300 hover:text-black transition-colors"
          type="button"
          onClick={() => router.push("/")}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default AboutMePage;

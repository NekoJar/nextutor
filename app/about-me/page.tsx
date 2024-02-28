"use client";
import Link from "next/link";
import React, { useState } from "react";

const AboutMePage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <h1 className="font-extrabold">About Me</h1>
      <button onClick={() => setOpen(!isOpen)}>See me!!</button>
      {isOpen && <p>aoskdo</p>}

      <Link href="/" className="hover:text-red-400">
        Go home!
      </Link>
    </div>
  );
};

export default AboutMePage;

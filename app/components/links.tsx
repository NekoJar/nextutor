"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Links = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/about-me" ? "active" : ""}`}
            href="/about-me"
          >
            About me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

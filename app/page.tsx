"use client";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Link href="./about-me" className=" hover:text-red-400">
        About me
      </Link>

      <button type="button" onClick={() => router.push("/about-me")}>
        About me
      </button>
    </div>
  );
}

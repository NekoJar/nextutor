"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-32 mt-4 ml-4 gap-8 border p-4 text-center">
      <div>
        <p>Normal link: </p>
        <Link href="./about-me" className=" hover:text-red-400">
          About me
        </Link>
      </div>

      <div>
        <p>Button: </p>
        <button
          className="bg-black rounded-md border text-white p-2 hover:bg-slate-300 hover:text-black transition-colors"
          type="button"
          onClick={() => router.push("/about-me")}
        >
          About me
        </button>
      </div>
    </div>
  );
}

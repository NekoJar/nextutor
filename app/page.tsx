import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      
      <Link href="./about-me" className="hover:text-red-400">
        About me
      </Link>
    </div>
  );
}

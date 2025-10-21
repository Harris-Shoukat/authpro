
"use client";
import { useRouter } from "next/navigation";
import HomePage from "./home/page.jsx";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <HomePage />
    </div>
  );
}

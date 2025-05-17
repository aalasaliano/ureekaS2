"use client";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="bg-gray-100 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">
        Welcome to <span className="text-blue-800">Aliyah's</span> page!
      </h1>
      <div className="flex flex-row gap-5">
        {AboutButton()}
        {ContactButton()}
        {ResumeButton()}
      </div>
    </div>
  );
}

function AboutButton() {
  const router = useRouter();
  return(
    <Button
      className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => router.push("/about")}
    >
      About
    </Button>
  )
}

function ContactButton() {
  const router = useRouter();
  return(
    <Button
      className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => router.push("/contact")}
    >
      Contact
    </Button>
  )
}

function ResumeButton() {
  const router = useRouter();
  return(
    <Button
      className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => router.push("/resume")}
    >
      Resume
    </Button>
  )
}

"use client";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";

export default function About() {
  return (
    <div className="bg-gray-100 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-blue-800">ABOUT</span>
      </h1>
      <p className="text-2xl font-bold text-center"> Hi my name is Aliyah Jasmine Saliano!</p>
      <p className="text-center text-lg">
        I am a 2rd year student at BINUS University studying Computer Science. I am passionate about data science, machine learning, and artificial intelligence. I love to learn new things and take on new challenges.
      </p>
      {HomeButton()}
    </div>
  );
}

function HomeButton() {
  const router = useRouter();
  return(
    <Button
      className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => router.push("/")}
    >
      Go back to Home
    </Button>
  )
}


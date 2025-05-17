"use client";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";

export default function Contact() {
  return (
    <div className="bg-gray-100 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-blue-800">CONTACT</span>
      </h1>
      <p>
        <span className="text-lg text-center">You can contact me at:</span>
        <br />
        <span className="text-lg text-center">Email: aliyahjasmine05@gmail.com</span>
        <br />
        <span className="text-lg text-center">Instagram: @aalasaliano</span>
      </p>
      <HomeButton />
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

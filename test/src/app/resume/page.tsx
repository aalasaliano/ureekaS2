"use client";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";

export default function Resume() {
  return (
    <div className="bg-gray-100 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-blue-800">RESUME</span>
      </h1>
      <p className="text-lg text-center">B.Sc. in Computer Science — Intelligent Systems Track  
          <br />
          Binus University, Expected Graduation: 2027</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Programming: Python, C, TypeScript, React</li>
          <li>Machine Learning: Scikit-learn, SVD, SMOTE, Pandas</li>
          <li>Web Development: HTML, CSS, Tailwind, shadcn/ui</li>
          <li>Tools: Git, VS Code, Jupyter Notebook</li>
          <li>Language: Bahasa Indonesia (native), English (advanced), Mandarin (learning)</li>
        </ul>
      </section>
      <br />
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

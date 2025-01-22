import Image from "next/image";
export default function Hero() {
  return (
    <main className="h-screen w-full bg-base-softWhite relative">
      <div className="flex flex-col justify-end h-full py-24 px-8 gap-8">
        <div className="relative w-fit h-fit">
          <h1>
            Rapport de <span className="">stage</span>
          </h1>
        </div>
        <p>
          Présentation de la collaboration entre Noé Schmidt & Mérillat
          Consulting.
        </p>
      </div>
    </main>
  );
}

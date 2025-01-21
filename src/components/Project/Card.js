"use client";
import Image from "next/image";

export default function Card({ title, description, src, color, i }) {
  return (
    <div className="h-screen flex place-items-center justify-center sticky top-0 px-4 md:px-0">
      <div
        className={`flex flex-col gap-4 relative h-[500px] w-[1000px] p-6 md:p-12 origin-top rounded-lg `}
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="text-center m-0 text-2xl">{title || "title"}</h2>
        <div className="size-full relative">
          <Image fill src={src} alt="image" className="object-cover" />
        </div>
        <p>{description || "description"}</p>
      </div>
    </div>
  );
}

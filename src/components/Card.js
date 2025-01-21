"use client";
import Image from "next/image";

export default function Card({
  title,
  description,
  src,
  color,
  i,
  showImage = true,
  showDescription = true,
  textAlign = "text-left",
  height = "h-fit",
}) {
  return (
    <div
      className={`h-screen flex place-items-center justify-center sticky top-0 px-4 md:px-0 ${textAlign}`}
    >
      <div
        className={`flex flex-col gap-4 relative ${height} w-full p-6 md:p-12 origin-top rounded-lg justify-center `}
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="m-0 text-6xl text-base-softWhite">{title || "title"}</h2>
        {showImage && src && (
          <div className="size-full relative">
            <Image fill src={src} alt="image" className="object-cover" />
          </div>
        )}

        {showDescription && description && (
          <p className="text-white text-xl font-medium">
            {description || "description"}
          </p>
        )}
      </div>
    </div>
  );
}

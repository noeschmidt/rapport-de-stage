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
  showBulletPoint = false,
  showSVGBulletPoint = false,
  bulletPoints,
  titleClassNames,
  showProgression = false,
  progression = 0,
}) {
  return (
    <div
      className={`h-screen flex place-items-center justify-center sticky top-0 px-4 md:px-0 ${textAlign}`}
    >
      <div
        className={`flex flex-col gap-4 relative ${height} w-full p-6 md:p-12 origin-top rounded-lg justify-center`}
        style={{
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className="flex flex-col gap-4 md:gap-8">
          {showProgression && (
            <div className="w-full h-fit flex gap-2 md:gap-8">
              <div
                className={`w-full h-2 md:h-4 bg-white rounded-full transition-opacity duration-300 border border-neutral-200`}
                style={{ opacity: progression >= 25 ? 1 : 0.25 }}
              />
              <div
                className={`w-full h-2 md:h-4 bg-white rounded-full transition-opacity duration-300 border border-neutral-200`}
                style={{ opacity: progression >= 50 ? 1 : 0.25 }}
              />
              <div
                className={`w-full h-2 md:h-4 bg-white rounded-full transition-opacity duration-300 border border-neutral-200`}
                style={{ opacity: progression >= 75 ? 1 : 0.25 }}
              />
              <div
                className={`w-full h-2 md:h-4 bg-white rounded-full transition-opacity duration-300 border border-neutral-200`}
                style={{ opacity: progression >= 100 ? 1 : 0.25 }}
              />
            </div>
          )}
          <h2
            className={`m-0 text-2xl md:text-4xl xl:text-6xl text-base-softWhite ${titleClassNames}`}
          >
            {title || "title"}
          </h2>
        </div>
        {showImage && src && (
          <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg shadow-md border border-white border-opacity-25">
            <Image fill src={src} alt={title} className="object-cover" />
          </div>
        )}

        {showDescription && description && (
          <p className="text-base-softWhite text-base md:text-lg xl:text-xl font-medium">
            {description || "description"}
          </p>
        )}
        {showBulletPoint && bulletPoints && (
          <div className="flex flex-col gap-4 justify-center ">
            {bulletPoints.map((bulletPoint, index) => (
              <div key={index} className="flex gap-2 place-items-center">
                {showSVGBulletPoint && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#fffdf4"}
                    fill={"none"}
                  >
                    <path
                      d="M14 12L4 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.5859 13.6026L17.6194 14.3639C16.0536 15.5974 15.2707 16.2141 14.6354 15.9328C14 15.6515 14 14.6881 14 12.7613L14 11.2387C14 9.31191 14 8.34853 14.6354 8.06721C15.2707 7.7859 16.0536 8.40264 17.6194 9.63612L18.5858 10.3974C19.5286 11.1401 20 11.5115 20 12C20 12.4885 19.5286 12.8599 18.5859 13.6026Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <p className="text-base-softWhite text-base md:text-lg xl:text-xl font-medium text-left">
                  {bulletPoint}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Card({
  icon,
  title,
  smallTitle,
  description,
  color,
  roundedTopLeft,
  roundedTopRight,
  roundedBotLeft,
  roundedBotRight,
  showSmallTitle = true,
  showDescription = true,
  showBulletPoint = false,
  bulletPoints,
}) {
  return (
    <div
      className={`px-8 py-8 md:py-12 text-base-softWhite flex flex-col gap-4 place-items-center justify-center text-center group`}
      style={{
        backgroundColor: color,
        borderRadius: `${roundedTopLeft} ${roundedTopRight} ${roundedBotRight} ${roundedBotLeft}`,
      }}
    >
      <div className="flex place-items-center justify-center gap-2 flex-col ">
        <div className="group-hover:scale-125 group-hover:rotate-12 transition-transform ease-in-out duration-200">
          {icon}
        </div>
        <h4 className="text-3xl md:text-4xl font-semibold">{title}</h4>
      </div>
      {showSmallTitle && (
        <span className="font-medium text-2xl">{smallTitle}</span>
      )}
      {showDescription && (
        <p className="font-medium text-base-softWhite opacity-85">
          {description}
        </p>
      )}
      {showBulletPoint && (
        <div className="flex flex-col gap-4">
          {bulletPoints.map((bulletPoint, index) => (
            <span
              key={index}
              className="flex gap-2 place-items-center justify-left"
            >
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
              <span className="font-medium text-base md:text-lg xl:text-xl text-base-softWhite">
                {bulletPoint}
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

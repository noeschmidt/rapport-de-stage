import clsx from "clsx";

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
  paddingY,
}) {
  return (
    <div
      className={`px-8 py-12 text-base-softWhite flex flex-col gap-8 place-items-center justify-center text-center group`}
      style={{
        backgroundColor: color,
        borderRadius: `${roundedTopLeft} ${roundedTopRight} ${roundedBotRight} ${roundedBotLeft}`,
      }}
    >
      <div className="flex place-items-center justify-center gap-2 flex-col ">
        <div className="group-hover:scale-125 group-hover:rotate-12 transition-transform ease-in-out duration-200">
          {icon}
        </div>
        <h4 className="text-4xl font-semibold">{title}</h4>
      </div>
      {showSmallTitle && (
        <span className="font-medium text-2xl">{smallTitle}</span>
      )}
      {showDescription && <p className="font-medium">{description}</p>}
    </div>
  );
}

export default function Links() {
  return (
    <main className="textured-background size-full relative text-base-softWhite py-8 h-screen z-20">
      <div className="max-width-custom px-8 flex flex-col gap-8 justify-center size-full mx-auto">
        <h4 className="text-base-softWhite text-4xl text-left font-semibold">
          Liens
        </h4>
        <span className="text-4xl">
          GitHub :{" "}
          <a
            href="https://github.com/noeschmidt/rapport-de-stage"
            target="_blank"
            className="underline hover:text-brand-600 transition-all duration-200 ease-in-out"
          >
            Rapport de stage
          </a>
        </span>
        <span className="text-4xl">
          Zoodle (Projet) :{" "}
          <a
            href=" https://www.zoodle.ch/fr/comparator"
            target="_blank"
            className="underline hover:text-brand-600 transition-all duration-200 ease-in-out"
          >
            Lien vers le comparateur
          </a>
        </span>
      </div>
    </main>
  );
}

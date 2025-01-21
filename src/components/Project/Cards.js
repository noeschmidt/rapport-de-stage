import Card from "../Card";
export default function Cards() {
  const projects = [
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "/test.jpg",
      color: "#BBACAF",
    },
    {
      title: "Clément Chapillon",
      description:
        "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "/test.jpg",
      color: "#977F6D",
    },
    {
      title: "Zissou",

      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",

      src: "/test.jpg",

      color: "#C2491D",
    },
  ];
  return (
    <>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          src={project.src}
          color={project.color}
        />
      ))}
    </>
  );
}

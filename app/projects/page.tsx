import ProjectCard  from "@/app/ui/projects/project";

// https://placehold.co/
// Images should be 3:2 aspect ratio


const projects = [
  {
    title: "PokerByte",
    description: "Play poker against a bot. Fully functional and calculates 5 card hands. Play poker against a bot. Fully functional and calculates 5 card hands.",
    imageUrl: "photo1.jpg",
    url: "/pokerbyte"
  },
  {
    title: "Graphing Calculator",
    description: "Java swing application that graphs out mathematical expressions. FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER filler filler filler",
    imageUrl: "photo1.jpg",
    url: "/graphing-calculator"
  },
  {
    title: "Basic2048",
    description: "The popular game 2048 made as a Java swing app. ",
    imageUrl: "photo1.jpg",
    url: "/basic2048"
  },
  {
    title: "Filler",
    description: "Don't Click (it doesnt go anywhere)",
    imageUrl: "photo1.jpg",
    url: ""
  },

]


export default function ProjectsPage(){
  return (
    <main className="min-h-screen w-full p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center ">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </main>
  );
}
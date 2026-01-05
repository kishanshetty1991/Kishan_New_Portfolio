import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projectsData = [
  {
    id: 1,
    title: "Haststar Web 3.0",
    description:
      "Cognizant is a leading tech company offering innovative digital transformation solutions to help businesses thrive in a changing world.",
    image: "/figmaAssets/image-9-2.png",
    technologies: ["Solidity", "React.js"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Haststar Web 3.0",
    description:
      "Cognizant is a leading tech company offering innovative digital transformation solutions to help businesses thrive in a changing world.",
    image: "/figmaAssets/image-9-2.png",
    technologies: ["Solidity", "React.js"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Haststar Web 3.0",
    description:
      "Cognizant is a leading tech company offering innovative digital transformation solutions to help businesses thrive in a changing world.",
    image: "/figmaAssets/image-9-2.png",
    technologies: ["Solidity", "React.js"],
    githubUrl: "#",
  },
];

export const PortfolioSection = (): JSX.Element => {
  return (
    <section id="projects" className="flex flex-col w-full items-start gap-[65px] relative scroll-mt-24 px-4 sm:px-6 overflow-hidden">
      <header className="flex flex-col max-w-[924px] items-start gap-3 relative">
        <div className="flex flex-col items-start gap-1.5 relative">
          <div className="relative [font-family:'Roboto_Mono',Helvetica] font-bold text-black/40 dark:text-[#ffffff99] text-base tracking-[0] leading-[normal]">
            &lt;Explore My&gt;
          </div>

          <h2 className="relative [font-family:'Poppins',Helvetica] font-bold text-black/80 dark:text-[#ffffffcc] text-[40px] tracking-[0] leading-[normal]">
            Projects
          </h2>
        </div>

        <p className="relative [font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-lg tracking-[0] leading-[normal]">
          Here&apos;s a curated selection of the projects I&apos;ve built — from
          full-stack web apps to smart contracts and AI-powered tools. Each one
          reflects my approach to clean code, thoughtful design, and solving
          real-world problems through technology.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 w-full">
        {projectsData.map((project) => (
          <Card
            key={project.id}
            className="bg-[#f8f9fa] dark:bg-[#0d111f] rounded-[10px] overflow-hidden border border-solid border-[#4c8eff66] flex flex-col min-h-[469px] w-full"
          >
            <div className="w-full h-[220px] flex-shrink-0">
              <img
                className="w-full h-[216px] object-cover"
                alt={project.title}
                src={project.image}
              />
            </div>

            <CardContent className="flex flex-col gap-5 p-[26px] flex-1">
              <div className="flex flex-col gap-3">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black/80 dark:text-[#ffffffcc] text-lg tracking-[0] leading-[normal]">
                  {project.title}
                </h3>

                <p className="[font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-sm tracking-[0] leading-[normal]">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    className="bg-[#4c8eff33] text-[#4c8eff] hover:bg-[#4c8eff33] rounded-[20px] px-2.5 py-0.5 [font-family:'Poppins',Helvetica] font-normal text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                className="h-auto w-fit gap-[6.85px] px-[13.69px] py-[9.59px] rounded-[6.85px] border-[0.68px] border-black/10 dark:border-[#ffffff33] bg-transparent hover:bg-black/5 dark:hover:bg-[#ffffff0a]"
              >
                <img
                  className="w-[16.43px] h-[16.43px] dark:invert-0 invert"
                  alt="Github"
                  src="/figmaAssets/mdi-github.svg"
                />
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-black/80 dark:text-white text-[12.3px] tracking-[0] leading-[normal]">
                  Github
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

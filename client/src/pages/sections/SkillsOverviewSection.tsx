import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    icon: "/figmaAssets/iconoir-code.svg",
    title: "Programming Languages",
    skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
  },
  {
    icon: "/figmaAssets/mingcute-web-fill.svg",
    title: "Frontend Development",
    skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
  },
  {
    icon: "/figmaAssets/fluent-web-asset-16-filled.svg",
    title: "Backend Development",
    skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
  },
  {
    icon: "/figmaAssets/material-symbols-database.svg",
    title: "Databases",
    skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
  },
  {
    icon: "/figmaAssets/ep-tools.svg",
    title: "Tools & Technologies",
    skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
  },
  {
    icon: "/figmaAssets/iconoir-design-nib-solid.svg",
    title: "Design",
    skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
  },
];

export const SkillsOverviewSection = (): JSX.Element => {
  return (
    <section id="skills" className="flex flex-col w-full items-start gap-9 relative scroll-mt-24 px-4 sm:px-6 overflow-hidden">
      <header className="flex flex-col max-w-[924px] items-start gap-3 relative">
        <div className="flex flex-col items-start gap-1.5 relative">
          <p className="relative [font-family:'Roboto_Mono',Helvetica] font-bold text-black/40 dark:text-[#ffffff99] text-base tracking-[0] leading-[normal]">
            &lt;Discover&gt;
          </p>

          <h2 className="relative [font-family:'Poppins',Helvetica] font-bold text-black/80 dark:text-[#ffffffcc] text-[40px] tracking-[0] leading-[normal]">
            Skills
          </h2>
        </div>

        <p className="relative [font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-lg tracking-[0] leading-[normal]">
          I work across the stack — designing sleek interfaces, writing clean
          APIs, and optimizing performance from end to end. My toolkit evolves
          with tech, but clean architecture and solid fundamentals stay
          constant.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="rounded-[10px] overflow-hidden border border-solid border-black/10 dark:border-[#4c8eff33] bg-transparent"
          >
            <CardContent className="flex flex-col items-start gap-[19px] p-[27px]">
              <div className="flex items-center gap-3.5 w-full">
                <div className="flex items-center justify-center w-[38px] h-[38px] bg-[#4c8eff33] rounded-[10px] overflow-hidden flex-shrink-0">
                  <img
                    className="w-6 h-6 dark:invert-0 invert"
                    alt={category.title}
                    src={category.icon}
                  />
                </div>

                <h3 className="flex-1 [font-family:'Poppins',Helvetica] font-semibold text-black/80 dark:text-[#ffffffcc] text-lg tracking-[0] leading-[normal]">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-start gap-[9px_12px]">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1.5 rounded-[20px] border border-solid border-black/10 dark:border-[#ffffff33] bg-transparent hover:bg-transparent"
                  >
                    <span className="font-normal text-black/80 dark:text-white [font-family:'Poppins',Helvetica] text-sm tracking-[0] leading-[normal]">
                      {skill}
                    </span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

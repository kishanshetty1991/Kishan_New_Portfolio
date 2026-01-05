import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const educationData = {
  degree: "Masters in Computer Application",
  institution: "Sinhgad Institutes",
  duration: "2020 - 2022",
  cgpa: "9.0 cgpa",
};

const experienceData = [
  {
    title: "Full Stack Developer Intern",
    company: "Cognizant",
    duration: "Jan 2022 - Aug 2022",
  },
  {
    title: "Software Engineer",
    company: "Accenture",
    duration: "Aug 2022 - Present",
  },
];

const skills = [
  "MERN",
  "Java",
  ".NET",
  "Python",
  "Solidity",
  "AI/ML",
  "Blockchain",
];

export const AboutMeSection = (): JSX.Element => {
  return (
    <section id="about" className="flex flex-col xl:flex-row items-start gap-[63px] w-full scroll-mt-24 px-4 sm:px-6 overflow-hidden">
      <div className="flex flex-col flex-1 items-start gap-[46px] w-full">
        <div className="flex flex-col w-full sm:w-[235px] items-start gap-1.5">
          <div className="self-stretch [font-family:'Roboto_Mono',Helvetica] font-bold text-black/40 dark:text-[#ffffff99] text-base tracking-[0] leading-[normal]">
            &lt;Get to Know More&gt;
          </div>

          <h2 className="self-stretch [font-family:'Poppins',Helvetica] font-bold text-black/80 dark:text-[#ffffffcc] text-5xl tracking-[0] leading-[normal]">
            About Me
          </h2>
        </div>

        <div className="flex flex-col items-start gap-[39px] self-stretch w-full">
          <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
            <div className="inline-flex items-start gap-2.5">
              <img
                className="w-6 h-6 dark:invert-0 invert"
                alt="Solar document"
                src="/figmaAssets/solar-document-broken.svg"
              />

              <h3 className="w-[148px] [font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-xl tracking-[0] leading-[normal]">
                Bio
              </h3>
            </div>

            <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-lg tracking-[0] leading-[normal]">
              Full-stack developer passionate about building scalable web
              solutions using modern technologies. From developing smart
              contracts with Solidity to crafting AI-powered applications, I
              bring ideas to life with clean code and thoughtful design.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[25px] w-full">
            <Card className="w-full md:w-[440px] min-h-[261px] bg-white dark:bg-[#0d111f] rounded-[10px] border border-solid border-[#4c8eff33]">
              <CardContent className="flex flex-col items-start gap-[15px] p-6 sm:p-7">
                <div className="inline-flex items-center gap-2">
                  <img
                    className="w-6 h-6 dark:invert-0 invert"
                    alt="Cil education"
                    src="/figmaAssets/cil-education.svg"
                  />

                  <h3 className="w-[148px] [font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-xl tracking-[0] leading-[normal]">
                    Education
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-1.5 self-stretch w-full">
                  <div className="self-stretch [font-family:'Poppins',Helvetica] font-semibold text-black/80 dark:text-[#ffffffcc] text-lg tracking-[0] leading-[normal]">
                    {educationData.degree}
                  </div>

                  <div className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-lg tracking-[0] leading-[normal]">
                    {educationData.institution}
                  </div>

                  <div className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-lg tracking-[0] leading-[normal]">
                    {educationData.duration}
                  </div>

                  <div className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-lg tracking-[0] leading-[normal]">
                    {educationData.cgpa}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full md:w-[440px] min-h-[261px] bg-white dark:bg-[#0d111f] rounded-[10px] border border-solid border-[#4c8eff33]">
              <CardContent className="flex flex-col items-start gap-[18px] p-6 sm:p-7">
                <div className="inline-flex items-center gap-[9px]">
                  <img
                    className="w-6 h-6 dark:invert-0 invert"
                    alt="Hugeicons work"
                    src="/figmaAssets/hugeicons-work.svg"
                  />

                  <h3 className="w-[148px] [font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-xl tracking-[0] leading-[normal]">
                    Experience
                  </h3>
                </div>

                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start self-stretch w-full"
                  >
                    <div className="self-stretch [font-family:'Poppins',Helvetica] font-semibold text-black/80 dark:text-[#ffffffcc] text-lg tracking-[0] leading-[normal]">
                      {exp.title}
                    </div>

                    <div className="flex flex-col items-start self-stretch w-full">
                      <div className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-sm tracking-[0] leading-[normal]">
                        {exp.company}
                      </div>

                      <div className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-sm tracking-[0] leading-[normal]">
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <aside className="flex flex-col w-full xl:w-[355px] items-start gap-[45px]">
        <img
          className="w-[182px] h-[182px] object-cover rounded-full"
          alt="Image"
          src="/figmaAssets/image.svg"
        />

        <div className="flex flex-col items-start gap-[41px] self-stretch w-full">
          <div className="flex flex-col items-start gap-3 self-stretch w-full">
            <div className="flex flex-col items-start gap-px self-stretch w-full">
              <h3 className="self-stretch [font-family:'Poppins',Helvetica] font-medium text-black dark:text-white text-xl tracking-[0] leading-[normal]">
                Kishan Shetty
              </h3>

              <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-lg tracking-[0] leading-[normal]">
                Software Engineer at Accenture
              </p>
            </div>

            <div className="flex flex-wrap items-start gap-[7px_8px] w-full">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2.5 px-2.5 py-0.5 bg-[#4c8eff33] rounded-[20px] border border-solid border-[#ffffff33] [font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-sm tracking-[0] leading-[normal] h-auto"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Button className="inline-flex items-center justify-center gap-[8.26px] px-[16.52px] py-[11.57px] bg-[#4c8eff] rounded-[8.26px] hover:bg-[#4c8eff]/90 h-auto">
            <img
              className="w-[19.83px] h-[19.83px]"
              alt="Material symbols"
              src="/figmaAssets/material-symbols-download-rounded.svg"
            />

            <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#0f1117] text-[14.9px] tracking-[0] leading-[normal]">
              Download Resume
            </span>
          </Button>
        </div>
      </aside>
    </section>
  );
};

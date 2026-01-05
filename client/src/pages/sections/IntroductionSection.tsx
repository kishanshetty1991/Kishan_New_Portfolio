import React from "react";
import { DownloadIcon, GithubIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export const IntroductionSection = (): JSX.Element => {
  const codeLines = [
    { type: "comment", content: "//" },
    { type: "comment", content: "Fullstack Developer" },
    {
      type: "declaration",
      parts: [
        { text: "const", color: "text-[#c1246c]" },
        { text: " ", color: "text-[#ffffff66]" },
        { text: "developer", color: "text-[#1d49ad]" },
      ],
    },
    {
      type: "property",
      parts: [
        { text: "name", color: "text-[#7b2dc6]" },
        { text: ": ", color: "text-[#ffffff66]" },
        { text: "'Kishan Shetty'", color: "text-[#147d3f]" },
        { text: ",", color: "text-[#ffffff66]" },
      ],
    },
    {
      type: "property",
      parts: [
        { text: "skills", color: "text-[#7b2dc6]" },
        { text: ": ", color: "text-[#ffffff66]" },
        { text: "[", color: "text-[#f06f16]" },
        { text: " ", color: "text-[#ffffff66]" },
        { text: "'React'", color: "text-[#147d3f]" },
        { text: ", ", color: "text-[#ffffff66]" },
        { text: "'Node.js'", color: "text-[#147d3f]" },
        { text: ", ", color: "text-[#ffffff66]" },
        { text: "'Python'", color: "text-[#147d3f]" },
        { text: "]", color: "text-[#f06f16]" },
        { text: ",", color: "text-[#ffffff66]" },
      ],
    },
    {
      type: "property",
      parts: [
        { text: "focuses", color: "text-[#7b2dc6]" },
        { text: ": ", color: "text-[#ffffff66]" },
        { text: "[", color: "text-[#f06f16]" },
        { text: " ", color: "text-[#ffffff66]" },
        { text: "'Full-Stack'", color: "text-[#147d3f]" },
        { text: ", ", color: "text-[#ffffff66]" },
        { text: "'UI/UX'", color: "text-[#147d3f]" },
        { text: "]", color: "text-[#f06f16]" },
        { text: ",", color: "text-[#ffffff66]" },
      ],
    },
    {
      type: "property",
      parts: [
        { text: "learning", color: "text-[#7b2dc6]" },
        { text: ": ", color: "text-[#ffffff66]" },
        { text: "'Always'", color: "text-[#147d3f]" },
      ],
    },
  ];

  return (
    <section id="home" className="w-full py-16 scroll-mt-4 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full max-w-[1332px] mx-auto">
        <div className="flex flex-col items-start gap-[53px] w-full lg:w-[469px]">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col items-start gap-[5px] w-full">
              <div className="[font-family:'Roboto_Mono',Helvetica] font-bold text-black/40 dark:text-[#ffffff99] text-base tracking-[0] leading-[normal]">
                &lt;Hello World&gt;
              </div>

              <h1 className="[font-family:'Poppins',Helvetica] font-bold text-4xl sm:text-5xl lg:text-[64px] tracking-[0] leading-tight">
                <span className="text-black/80 dark:text-[#ffffffcc]">Kishan </span>
                <span className="text-[#4c8eff]">Shetty</span>
              </h1>
            </div>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-xl tracking-[0] leading-[normal] max-w-[395px]">
              From frontend pixels to backend logic — I build it all.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-7 w-full">
            <Button className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#4c8eff] hover:bg-[#4c8eff]/90 rounded-[10px] h-auto">
              <DownloadIcon className="w-6 h-6" />
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] dark:text-[#0f1117] text-lg tracking-[0] leading-[normal]">
                Download Resume
              </span>
            </Button>

            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-[10px] border border-solid border-[#4c8eff] bg-transparent hover:bg-[#4c8eff]/10 h-auto"
            >
              <GithubIcon className="w-6 h-6 text-[#4c8eff]" />
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#4c8eff] text-lg tracking-[0] leading-[normal]">
                View Projects
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-full lg:w-[583.16px] h-[357.29px] bg-[#FFFFFF] dark:bg-[#0d111f] rounded-[25.52px] overflow-hidden border-[1.28px] border-solid border-[#ffffff99]">
          <div className="absolute top-9 left-[34px] w-[15px] h-[15px] bg-red-500 rounded-[7.66px]" />
          <div className="absolute top-9 left-[60px] w-[15px] h-[15px] bg-yellow-500 rounded-[7.66px]" />
          <div className="absolute top-9 left-[85px] w-[15px] h-[15px] bg-green-500 rounded-[7.66px]" />

          <div className="absolute top-9 right-[31px] [font-family:'Roboto_Mono',Helvetica] font-normal text-[#ffffff66] text-[12.8px] tracking-[0] leading-[normal]">
            developer.js
          </div>

          <div className="absolute top-[85px] left-[31px] [font-family:'Roboto_Mono',Helvetica] font-normal text-gray-500 text-[15.3px] tracking-[0] leading-[normal]">
            //
          </div>

          <div className="absolute top-[85px] left-[61px] [font-family:'Roboto_Mono',Helvetica] font-normal text-gray-500 text-[15.3px] tracking-[0] leading-[normal]">
            Fullstack Developer
          </div>

          <div className="absolute top-[121px] left-[34px] [font-family:'Roboto_Mono',Helvetica] font-bold text-[15.3px] tracking-[0] leading-[normal]">
            <span className="text-[#c1246c]">const</span>
            <span className="text-[#ffffff66]"> </span>
            <span className="text-[#1d49ad]">developer</span>
          </div>

          <div className="absolute top-[121px] left-[191px] [font-family:'Roboto_Mono',Helvetica] font-bold text-gray-500 text-[15.3px] tracking-[0] leading-[normal]">
            =
          </div>

          <div className="absolute top-[121px] left-[211px] [font-family:'Roboto_Mono',Helvetica] font-bold text-[#f06f16] text-[15.3px] tracking-[0] leading-[normal]">
            {"{"}
          </div>

          <div className="absolute top-[157px] left-[65px] [font-family:'Roboto_Mono',Helvetica] font-bold text-[15.3px] tracking-[0] leading-[normal]">
            <span className="text-[#7b2dc6]">name</span>
            <span className="text-[#ffffff66]">: </span>
            <span className="text-[#147d3f]">&apos;Kishan Shetty&apos;</span>
            <span className="text-[#ffffff66]">,</span>
          </div>

          <div className="absolute top-[193px] left-[65px] [font-family:'Roboto_Mono',Helvetica] font-bold text-[15.3px] tracking-[0] leading-[normal]">
            <span className="text-[#7b2dc6]">skills</span>
            <span className="text-[#ffffff66]">: </span>
            <span className="text-[#f06f16]">[</span>
            <span className="text-[#ffffff66]"> </span>
            <span className="text-[#147d3f]">&apos;React&apos;</span>
            <span className="text-[#ffffff66]">, </span>
            <span className="text-[#147d3f]">&apos;Node.js&apos;</span>
            <span className="text-[#ffffff66]">, </span>
            <span className="text-[#147d3f]">&apos;Python&apos;</span>
            <span className="text-[#f06f16]">]</span>
            <span className="text-[#ffffff66]">,</span>
          </div>

          <div className="absolute top-[228px] left-[65px] [font-family:'Roboto_Mono',Helvetica] font-bold text-[15.3px] tracking-[0] leading-[normal]">
            <span className="text-[#7b2dc6]">focuses</span>
            <span className="text-[#ffffff66]">: </span>
            <span className="text-[#f06f16]">[</span>
            <span className="text-[#ffffff66]"> </span>
            <span className="text-[#147d3f]">&apos;Full-Stack&apos;</span>
            <span className="text-[#ffffff66]">, </span>
            <span className="text-[#147d3f]">&apos;UI/UX&apos;</span>
            <span className="text-[#f06f16]">]</span>
            <span className="text-[#ffffff66]">,</span>
          </div>

          <div className="absolute top-[264px] left-[65px] [font-family:'Roboto_Mono',Helvetica] font-bold text-[15.3px] tracking-[0] leading-[normal]">
            <span className="text-[#7b2dc6]">learning</span>
            <span className="text-[#ffffff66]">: </span>
            <span className="text-[#147d3f]">&apos;Always&apos;</span>
          </div>

          <div className="absolute top-[300px] left-[34px] [font-family:'Roboto_Mono',Helvetica] font-bold text-[#f06f16] text-[15.3px] tracking-[0] leading-[normal]">
            {"}"}
          </div>

          <div className="absolute top-[300px] left-[45px] [font-family:'Roboto_Mono',Helvetica] font-bold text-gray-500 text-[15.3px] tracking-[0] leading-[normal]">
            ;
          </div>
        </div>
      </div>
    </section>
  );
};

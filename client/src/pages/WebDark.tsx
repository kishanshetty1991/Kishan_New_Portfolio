import { StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactSection } from "./sections/ContactSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { SkillsOverviewSection } from "./sections/SkillsOverviewSection";

export const WebDark = (): JSX.Element => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-[#0f1117] w-full min-h-screen relative">
      <header className="w-full flex justify-center py-8">
        <div className="w-full max-w-[1332px] px-4 flex items-center justify-between">
          <img className="w-7 h-[21px]" alt="Ks" src="/figmaAssets/ks.svg" />

          <nav className="flex items-center gap-14">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-lg tracking-[0] leading-[normal] hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="relative w-[87.5px] h-10 bg-[#151535] rounded-[37.5px] overflow-hidden">
            <div className="absolute top-[-13px] left-[11px] w-[65px] h-[65px] bg-[#1a1a44] rounded-[32.5px] blur-[7.5px]" />

            <div className="absolute top-[-11px] left-[26px] w-[61px] h-[61px] bg-[#222257] rounded-[30.63px] blur-[7.5px]" />

            <div className="absolute top-[-11px] left-[41px] w-[61px] h-[61px] bg-[#2a2a72] rounded-[30.63px] blur-[7.5px]" />

            <div className="absolute top-[69px] left-2 w-[26px] h-[26px] bg-[#ccddff] rounded-[12.81px]" />

            <div className="absolute top-[54px] left-[30px] w-[34px] h-[33px] bg-[#ccddff] rounded-[16.88px/16.56px]" />

            <div className="absolute top-[60px] left-[51px] w-[29px] h-[30px] bg-[#ccddff] rounded-[14.69px/15px]" />

            <div className="absolute top-[43px] left-[67px] w-[29px] h-[30px] bg-[#ccddff] rounded-[14.69px/15px]" />

            <div className="absolute top-1 left-[51px] w-[33px] h-[33px] rounded-[16.25px] shadow-[-0.63px_0.63px_1.88px_#323297,0.63px_-0.63px_1.25px_#232357] backdrop-blur-[3.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.75px)_brightness(100%)] bg-[linear-gradient(138deg,rgba(233,240,255,1)_0%,rgba(224,233,254,1)_100%)]" />

            <div className="absolute top-[9px] left-[61px] w-2 h-2 bg-[#e9efff] rounded-[3.75px] shadow-[inset_0.63px_0.63px_2.5px_#bfd2ff]" />

            <div className="absolute top-[18px] left-[57px] w-[11px] h-[11px] bg-[#e9efff] rounded-[5.31px] shadow-[inset_0.63px_0.63px_2.5px_#bfd2ff]" />

            <div className="absolute top-6 left-[70px] w-[5px] h-[5px] bg-[#e9efff] rounded-[2.5px] shadow-[inset_0.63px_0.63px_2.5px_#bfd2ff]" />

            <div className="absolute top-[69px] left-4 w-6 h-6 bg-white rounded-[11.88px]" />

            <div className="absolute top-[59px] left-[34px] w-7 h-7 bg-white rounded-[13.75px]" />

            <div className="absolute top-[65px] left-[53px] w-7 h-7 bg-white rounded-[13.75px]" />

            <div className="absolute top-[46px] left-[70px] w-7 h-7 bg-white rounded-[13.75px]" />

            <img
              className="absolute -top-8 left-[-3296px] w-24 h-[75px]"
              alt="Group"
            />

            <img
              className="absolute top-1.5 left-2 w-[38px] h-[30px]"
              alt="Group"
              src="/figmaAssets/group-2.png"
            />
          </div>
        </div>
      </header>

      <main className="w-full relative">
        <IntroductionSection />
        <AboutMeSection />
        <PortfolioSection />
        <SkillsOverviewSection />
        <ContactSection />
      </main>

      <footer className="w-full h-[67px] flex items-center justify-center bg-[#0d111f]">
        <div className="mt-px h-6 w-[190px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-base tracking-[1.28px] leading-[normal] text-center">
          Made with ❤ in India
        </div>
      </footer>

      <Badge className="fixed top-[1084px] left-[1167px] inline-flex items-center justify-center gap-2.5 px-5 py-1.5 bg-[#4c8eff] rounded-[20px] border-0 hover:bg-[#4c8eff] h-auto">
        <StarIcon className="w-6 h-6 fill-[#0f1117] text-[#0f1117]" />
        <span className="[font-family:'Poppins',Helvetica] font-medium text-[#0f1117] text-base tracking-[0] leading-[normal]">
          Azure 4x Certified
        </span>
      </Badge>
    </div>
  );
};

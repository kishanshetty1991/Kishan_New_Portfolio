import { StarIcon, Moon, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactSection } from "./sections/ContactSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { SkillsOverviewSection } from "./sections/SkillsOverviewSection";
import { useState, useEffect } from "react";

export const WebDark = (): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-[#F5F7FA] dark:bg-[#0f1117] w-full min-h-screen relative transition-colors duration-300">
      <header className="w-full flex justify-center py-8">
        <div className="w-full max-w-[1332px] px-4 sm:px-6 flex items-center justify-between">
          <img className="dark:invert-0 invert w-7 h-[21px]" alt="Ks" src="/figmaAssets/ks.svg" />

          <nav className="hidden md:flex items-center gap-8 lg:gap-14">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffffcc] text-lg tracking-[0] leading-[normal] hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button 
            onClick={toggleTheme}
            className={`relative w-[87.5px] h-10 rounded-[37.5px] overflow-hidden cursor-pointer group transition-colors duration-500 ${
              theme === "dark" ? "bg-[#151535]" : "bg-[#4db2ff]"
            }`}
          >
            {/* Dark Mode Background Elements */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}>
              <div className="absolute top-[-13px] left-[11px] w-[65px] h-[65px] bg-[#1a1a44] rounded-[32.5px] blur-[7.5px]" />
              <div className="absolute top-[-11px] left-[26px] w-[61px] h-[61px] bg-[#222257] rounded-[30.63px] blur-[7.5px]" />
              <div className="absolute top-[-11px] left-[41px] w-[61px] h-[61px] bg-[#2a2a72] rounded-[30.63px] blur-[7.5px]" />
            </div>

            {/* Light Mode Background Elements (Sun/Morning) */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${theme === "light" ? "opacity-100" : "opacity-0"}`}>
              <div className="absolute top-[-10px] left-[-10px] w-[60px] h-[60px] bg-[#80c8ff] rounded-full blur-[10px]" />
              <div className="absolute top-[5px] left-[15px] w-[40px] h-[40px] bg-[#b3e0ff] rounded-full blur-[8px]" />
              <div className="absolute top-[10px] right-[-5px] w-[30px] h-[30px] bg-[#ffffff] opacity-40 rounded-full blur-[5px]" />
            </div>
            
            {/* Knob/Circle */}
            <div 
              className={`absolute top-1 w-[33px] h-[33px] rounded-full shadow-lg transition-all duration-500 flex items-center justify-center z-10 ${
                theme === "dark" 
                  ? "left-[51px] bg-[linear-gradient(138deg,rgba(233,240,255,1)_0%,rgba(224,233,254,1)_100%)] shadow-[-0.63px_0.63px_1.88px_#323297,0.63px_-0.63px_1.25px_#232357]" 
                  : "left-1 bg-[linear-gradient(138deg,#ffdf5e_0%,#f06f16_100%)] shadow-[0_2px_10px_rgba(240,111,22,0.5)]"
              }`}
            >
              {theme === "dark" ? (
                <Moon className="w-4 h-4 text-[#323297]" />
              ) : (
                <Sun className="w-4 h-4 text-white" />
              )}
            </div>

            {/* Cloud/Decorative elements */}
            <div className={`absolute top-1.5 w-[38px] h-[30px] transition-all duration-500 ${theme === "light" ? "left-[45px] opacity-100 scale-110" : "left-2 opacity-40 scale-75 blur-[1px]"}`}>
              <img
                className="w-full h-full"
                alt="Cloud"
                src="/figmaAssets/group-2.png"
              />
            </div>
          </button>
        </div>
      </header>

      <main className="w-full relative max-w-[1332px] mx-auto px-0 flex flex-col gap-32 scroll-smooth overflow-x-hidden">
        <IntroductionSection />
        <AboutMeSection />
        <PortfolioSection />
        <SkillsOverviewSection />
        <ContactSection />
      </main>

      <footer className="w-full h-[67px] flex items-center justify-center bg-[#0d111f]">
        <div className="mt-px h-6 w-[220px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffffcc] text-base tracking-[1.28px] leading-[normal] text-center">
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

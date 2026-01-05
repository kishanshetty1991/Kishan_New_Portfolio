import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";

const contactInfo = [
  {
    icon: "/figmaAssets/mage_email.svg",
    title: "Email",
    value: "me.kishanshetty@gmail.com",
  },
  {
    icon: "/figmaAssets/mynaui-location.svg",
    title: "Location",
    value: "Pune, Maharashtra, India",
  },
];

const socialLinks = [
  {
    icon: "/figmaAssets/mdi-github.svg",
    alt: "Mdi github",
  },
  {
    icon: "/figmaAssets/flowbite-linkedin-solid.svg",
    alt: "Flowbite linkedin",
  },
  {
    icon: "/figmaAssets/mage-email.svg",
    alt: "Mage email",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="flex flex-col w-full items-start gap-[83px] scroll-mt-4 px-4 sm:px-6 overflow-hidden">
      <div className="flex flex-col max-w-[924px] items-start gap-3">
        <div className="flex flex-col items-start gap-1.5">
          <div className="[font-family:'Roboto_Mono',Helvetica] font-bold text-black/40 dark:text-[#ffffff99] text-base tracking-[0] leading-[normal]">
            &lt;Reach Out&gt;
          </div>

          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black/80 dark:text-[#ffffffcc] text-[40px] tracking-[0] leading-[normal]">
            Say Hello
          </h2>
        </div>

        <p className="[font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-lg tracking-[0] leading-[normal]">
          Got an idea, question, or just want to chat tech? I&apos;d love to
          hear from you! Drop a message and I&apos;ll get back as soon as I can.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-[35px] w-full">
        <div className="flex flex-col w-full lg:w-[421px] items-start gap-[35px]">
          <div className="flex flex-col items-start gap-[37px] w-full">
            <div className="flex flex-col max-w-[387px] items-start gap-[17px]">
              <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-lg tracking-[0] leading-[normal]">
                Contact Information
              </h3>

              <p className="[font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-base tracking-[0] leading-[normal]">
                Just drop your details in the form — I&apos;ll get back to you
                shortly!
              </p>
            </div>

            <div className="flex flex-col items-start gap-[15px] w-full">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start w-full gap-2.5">
                  <img
                    className="w-6 h-6 flex-shrink-0 dark:invert-0"
                    alt={info.title}
                    src={info.icon}
                  />

                  <div className="flex flex-col flex-1">
                    <div className="[font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-lg tracking-[0] leading-[normal]">
                      {info.title}
                    </div>

                    <div className="[font-family:'Poppins',Helvetica] font-normal text-black/60 dark:text-[#ffffff99] text-base tracking-[0] leading-[normal]">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3.5">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-lg tracking-[0] leading-[normal]">
              Connect with me
            </h3>

            <div className="flex items-center gap-[18px]">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="w-12 h-12 bg-black/5 dark:bg-[#ffffff33] rounded-[40px] overflow-hidden flex items-center justify-center hover:bg-black/10 dark:hover:bg-[#ffffff4d] transition-colors"
                  aria-label={social.alt}
                >
                  <img className="w-6 h-6 dark:invert-0 invert" alt={social.alt} src={social.icon} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[876px] rounded-[10px] overflow-hidden border border-solid border-black/10 dark:border-[#ffffff33]">
          <form className="flex flex-col gap-[27px] p-9">
            <div className="flex flex-col lg:flex-row gap-[27px]">
              <div className="flex flex-col gap-2.5 flex-1">
                <Label
                  htmlFor="name"
                  className="[font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-base tracking-[0] leading-[normal]"
                >
                  Your Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="h-auto gap-2.5 p-2.5 rounded-[10px] border border-solid border-black/10 dark:border-[#ffffff33] bg-transparent [font-family:'Poppins',Helvetica] font-normal text-black/80 dark:text-[#ffffffcc] text-sm tracking-[0] leading-[normal]"
                />
              </div>

              <div className="flex flex-col gap-2.5 flex-1">
                <Label
                  htmlFor="email"
                  className="[font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-base tracking-[0] leading-[normal]"
                >
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="h-auto gap-2.5 p-2.5 rounded-[10px] border border-solid border-black/10 dark:border-[#ffffff33] bg-transparent [font-family:'Poppins',Helvetica] font-normal text-black/80 dark:text-[#ffffffcc] text-sm tracking-[0] leading-[normal]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <Label
                htmlFor="subject"
                className="[font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-base tracking-[0] leading-[normal]"
              >
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="How can I help you?"
                className="h-auto gap-2.5 p-2.5 rounded-[10px] border border-solid border-black/10 dark:border-[#ffffff33] bg-transparent [font-family:'Poppins',Helvetica] font-normal text-black/80 dark:text-[#ffffffcc] text-sm tracking-[0] leading-[normal]"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <Label
                htmlFor="message"
                className="[font-family:'Poppins',Helvetica] font-medium text-black/80 dark:text-[#ffffffcc] text-base tracking-[0] leading-[normal]"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message here...."
                className="h-32 gap-2.5 p-2.5 rounded-[10px] border border-solid border-black/10 dark:border-[#ffffff33] bg-transparent [font-family:'Poppins',Helvetica] font-normal text-black/80 dark:text-[#ffffffcc] text-sm tracking-[0] leading-[normal] resize-none"
              />
            </div>

            <Button
              type="submit"
              className="h-auto w-full flex items-center justify-center gap-[8.26px] px-[16.52px] py-[11.57px] bg-[#4c8eff] rounded-[8.26px] hover:bg-[#3d7de6] transition-colors"
            >
              <img
                className="w-6 h-6"
                alt="Prime send"
                src="/figmaAssets/prime-send.svg"
              />
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#0f1117] text-[14.9px] tracking-[0] leading-[normal]">
                Send Message
              </span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

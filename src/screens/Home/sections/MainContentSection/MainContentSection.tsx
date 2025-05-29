import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const MainContentSection = (): JSX.Element => {
  const [selectedImages, setSelectedImages] = useState<[string, string, string]>([
    "..//a-vibrant-photograph-of-a-modern-art-installation-featuring-bold.png",
    "..//a-vibrant-abstract-design-featuring-bold-colors-and-geometric-sh.png",
    "..//a-professional-portrait-of-a-creative-individual-in-a-modern-wor.png"
  ]);

  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      category: "Photography",
      image: "..//a-stunning-landscape-photograph-capturing-a-vibrant-sunset-over-.png",
    },
    {
      id: 2,
      title: "Project Beta",
      category: "Design",
      image: "..//a-modern-graphic-design-layout-featuring-vibrant-colors-and-abst.png",
    },
    {
      id: 3,
      title: "Project Gamma",
      category: "Art",
      image: "..//a-vibrant-abstract-painting-with-swirling-colors-and-dynamic-sha.png",
    },
    {
      id: 4,
      title: "Project Delta",
      category: "Illustration",
      image: "..//a-whimsical-landscape-featuring-rolling-green-hills-under-a-brig.png",
    },
    {
      id: 5,
      title: "Project Epsilon",
      category: "Graphics",
      image: "..//a-vibrant-graphic-design-piece-featuring-abstract-shapes-and-bol.png",
    },
    {
      id: 6,
      title: "Project Zeta",
      category: "Web",
      image: "..//a-modern-website-layout-displayed-on-a-laptop-screen-with-a-clea.png",
    },
    {
      id: 7,
      title: "Project Eta",
      category: "Print",
      image: "..//a-vibrant-magazine-cover-featuring-a-stunning-landscape-photogra.png",
    },
    {
      id: 8,
      title: "Project Theta",
      category: "Animation",
      image: "..//a-colorful-animated-character-performing-a-dynamic-dance-in-a-wh.png",
    },
    {
      id: 9,
      title: "Project Iota",
      category: "Video",
      image: "..//a-filmmaker-operating-a-camera-on-a-vibrant-outdoor-set-with-nat.png",
    },
    {
      id: 10,
      title: "Project Kappa",
      category: "Digital Art",
      image: "..//a-vibrant-photograph-of-a-modern-art-installation-featuring-bold.png",
    },
    {
      id: 11,
      title: "Project Lambda",
      category: "Mixed Media",
      image: "..//a-vibrant-abstract-design-featuring-bold-colors-and-geometric-sh.png",
    },
    {
      id: 12,
      title: "Project Mu",
      category: "Installation",
      image: "..//a-professional-portrait-of-a-creative-individual-in-a-modern-wor.png",
    },
    {
      id: 13,
      title: "Project Nu",
      category: "Photography",
      image: "..//a-stunning-landscape-photograph-capturing-a-vibrant-sunset-over-.png",
    },
    {
      id: 14,
      title: "Project Xi",
      category: "Design",
      image: "..//a-modern-graphic-design-layout-featuring-vibrant-colors-and-abst.png",
    },
    {
      id: 15,
      title: "Project Omicron",
      category: "Art",
      image: "..//a-vibrant-abstract-painting-with-swirling-colors-and-dynamic-sha.png",
    }
  ];

  const handleImageClick = (image: string) => {
    setSelectedImages(prev => [image, prev[0], prev[1]]);
  };

  return (
    <section className="flex flex-col md:flex-row items-start gap-12 relative self-stretch w-full flex-[0_0_auto] z-[1]">
      <div className="relative w-[120px] h-[200px] top-[724px] left-[856px] z-[2] [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] hidden md:block" />

      <div className="flex flex-col items-start relative flex-1 grow z-[1] overflow-hidden w-full">
        <div className="flex flex-col items-start gap-[50px] px-0 py-7 relative self-stretch w-full flex-[0_0_auto] z-[1] bg-[#0d0402]">
          {/* Main large image */}
          <Card className="flex flex-1 grow h-[400px] md:h-[668px] rounded-2xl border-[1.5px] border-solid border-transparent overflow-hidden w-full">
            <CardContent className="p-0 h-full">
              <div 
                className="w-full h-full bg-cover bg-center transition-all duration-300"
                style={{ backgroundImage: `url(${selectedImages[0]})` }}
              />
            </CardContent>
          </Card>
          
          {/* Secondary images row - visible on both mobile and desktop */}
          <div className="flex flex-row gap-[50px] w-full">
            {selectedImages.slice(1).map((image, index) => (
              <Card 
                key={index}
                className="flex flex-1 h-[200px] md:h-[668px] rounded-2xl border-[1.5px] border-solid border-transparent overflow-hidden"
              >
                <CardContent className="p-0 h-full">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-all duration-300"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-5 relative z-0 overflow-x-auto bg-[#0d0402] pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent w-full">
          <div className="inline-flex items-start gap-5 relative flex-[0_0_auto] bg-[#0d0402] px-4">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleImageClick(project.image)}
              >
                <CardContent className="p-0">
                  <div
                    className="relative w-[140px] h-[132.81px] rounded-[7.67px] border-[0.72px] border-solid border-transparent bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />

                  <div className="flex flex-col items-start mt-2 relative self-stretch w-full">
                    <h3 className="relative self-stretch mt-[-1.00px] font-normal text-[#e4d9d7] text-xl tracking-[-0.10px] leading-6 font-sans">
                      {project.title}
                    </h3>
                    <p className="relative self-stretch font-normal text-[#ebd5d09e] text-[17px] tracking-[-0.09px] leading-6 font-sans">
                      {project.category}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-80 items-start pt-7 pb-0 px-0 relative z-0">
        <Card className="flex flex-col items-start gap-5 p-[30px] relative self-stretch w-full flex-[0_0_auto] z-[1] rounded-2xl overflow-hidden [background:linear-gradient(112deg,rgba(211,247,154,1)_0%,rgba(165,242,197,1)_100%)] border-none">
          <CardContent className="p-0 space-y-5">
            <h1 className="mt-[-1.50px] font-bold text-[#273136] text-4xl tracking-[-1.28px] leading-tight relative [font-family:'Roboto_Serif',Helvetica]">
              Leichtfried is a creative studio focused on innovation.
            </h1>

            <h2 className="relative [font-family:'Roboto_Serif',Helvetica] font-bold text-[#273136] text-2xl tracking-[-0.68px] leading-normal">
              With a passion for design and innovation, we bring ideas to life through engaging visuals.
            </h2>

            <p className="font-medium text-[#273136] text-lg tracking-[-0.48px] leading-relaxed relative [font-family:'Roboto_Serif',Helvetica]">
              Leichtfried is a creative studio focused on visual storytelling. We are passionate about design and innovation, bringing ideas to life through engaging visuals.
            </p>

            <div className="relative self-stretch w-full h-[400px] md:h-[810px] rounded-2xl border-[1.5px] border-solid border-transparent bg-cover bg-center" style={{ backgroundImage: "url(..//a-professional-portrait-of-a-creative-individual-in-a-modern-wor.png)" }} />
          </CardContent>
        </Card>

        <div className="flex flex-col items-center justify-center gap-[50px] px-0 py-24 relative self-stretch w-full flex-[0_0_auto] z-0 bg-[#0d0402]">
          <h2 className="relative w-fit mt-[-1.50px] [font-family:'Roboto_Serif',Helvetica] font-bold text-[#e4d9d7] text-[34px] text-center tracking-[-0.68px] leading-10 whitespace-nowrap">
            Contact Me
          </h2>

          <div className="flex items-start gap-3 relative w-full">
            <Input
              className="flex-1 self-stretch bg-[#e0beb71f] rounded-2xl border-[1.5px] border-solid border-transparent px-[18px] py-2 font-normal text-[#ebd5d066] text-xl tracking-[-0.10px] leading-6 font-sans"
              placeholder="Your email"
            />
            <Button className="inline-flex items-center justify-center px-7 py-3 bg-[#ff5733] rounded-2xl">
              <span className="relative w-fit mt-[-1.00px] font-medium text-[#050000] text-xl tracking-[0] leading-6 whitespace-nowrap font-sans">
                Subscribe
              </span>
            </Button>
          </div>

          <div className="inline-flex items-start gap-9 relative flex-[0_0_auto]">
            <img
              className="relative w-12 h-12"
              alt="Facebook"
              src="/facebook.svg"
            />
            <img
              className="relative w-12 h-12"
              alt="Instagram"
              src="/instagram.svg"
            />
            <img
              className="relative w-12 h-12"
              alt="Twitter"
              src="/twitter.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
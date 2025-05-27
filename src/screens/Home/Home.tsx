import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const Home = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#0d0402]">
      <div className="container px-12 py-0">
        <AboutUsSection />
        <MainContentSection />
        <footer className="w-full h-12 bg-[#0d0402]" />
      </div>
    </main>
  );
};

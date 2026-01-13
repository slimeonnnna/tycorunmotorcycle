
"use client";

import AboutPage from "@/components/about-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export default function About() {
  return (
    <>
      <main className="relative flex grow flex-col">
        <AboutPage />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
    

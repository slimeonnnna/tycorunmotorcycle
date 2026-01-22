
"use client";

import AboutPage from "@/components/pages/about/about-page";
import Cta from "@/components/global/cta";
import Footer from "@/components/global/ui/footer";

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
    

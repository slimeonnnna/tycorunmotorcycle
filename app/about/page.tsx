
import PageIllustration from "@/components/page-illustration";
import AboutPage from "@/components/about-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "About Tycorun | Electric Motorcycle Manufacturer",
  description:
    "Learn how Tycorun designs and builds high-performance electric motorcycles with integrated powertrain and rider-first engineering.",
};

export default function About() {
  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration multiple />
        <AboutPage />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
    

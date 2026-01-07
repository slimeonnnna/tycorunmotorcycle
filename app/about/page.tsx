
import AboutPage from "@/components/about-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "About TYCORUN | Electric Motorcycle Manufacturer",
  description:
    "Learn how TYCORUN delivers OEM/ODM electric motorcycle programs with compliance support and scalable manufacturing.",
};

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
    


import PageIllustration from "@/components/page-illustration";
import AboutPage from "@/components/about-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "About Tycorun | Infrastructure for Electric Mobility",
  description:
    "Learn how Tycorun builds scalable battery, energy, and fleet infrastructure for electric mobility.",
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
    
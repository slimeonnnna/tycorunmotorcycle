
import PageIllustration from "@/components/page-illustration";
import SolutionPage from "@/components/solution-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/solution.css";

export const metadata = {
  title: "OEM / ODM Solutions | TYCORUN",
  description:
    "Factory-ready OEM/ODM programs with compliance support and export logistics.",
};

export default function Solution() {
  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration multiple />
        <SolutionPage />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

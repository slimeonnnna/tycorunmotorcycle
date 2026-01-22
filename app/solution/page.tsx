
import PageIllustration from "@/components/global/page-illustration";
import SolutionPage from "@/components/pages/solution/solution-page";
import Cta from "@/components/global/cta";
import Footer from "@/components/global/ui/footer";
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

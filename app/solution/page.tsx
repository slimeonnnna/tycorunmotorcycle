
import PageIllustration from "@/components/page-illustration";
import SolutionPage from "@/components/solution-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Urban Riding Solutions | Tycorun",
  description:
    "Electric motorcycles tuned for city commuting, light adventure, and daily reliability.",
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

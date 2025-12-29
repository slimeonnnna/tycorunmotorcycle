
import PageIllustration from "@/components/page-illustration";
import SolutionPage from "@/components/solution-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Autonomous Logistics Solutions | Slimeon",
  description:
    "High-uptime power systems designed specifically for 24/7 autonomous mobile robot (AMR) fleets.",
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

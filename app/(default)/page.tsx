
export const metadata = {
  title: "Home - TYCORUN",
  description: "Factory-direct OEM/ODM electric motorcycles with SKD/CKD options and compliance support.",
};

import PageIllustration from "@/components/page-illustration";
import HomePage from "@/components/home-page";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <HomePage />
      <Cta />
    </>
  );
}

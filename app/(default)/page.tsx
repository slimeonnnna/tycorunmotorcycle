
export const metadata = {
  title: "Home - TYCORUN",
  description: "Factory-direct OEM/ODM electric motorcycles with SKD/CKD options and compliance support.",
};

import HomePage from "@/components/home-page";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <HomePage />
      <Cta />
    </>
  );
}

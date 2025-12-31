
export const metadata = {
  title: "Home - Tycorun",
  description: "Custom Industrial Battery Manufacturing",
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

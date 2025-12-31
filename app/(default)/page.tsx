
export const metadata = {
  title: "Home - Tycorun",
  description: "High-performance electric motorcycles for city riding and light adventure.",
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

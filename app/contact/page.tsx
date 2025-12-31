import PageIllustration from "@/components/page-illustration";
import ContactPage from "@/components/contact-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Contact | Test Ride & Partnerships",
  description:
    "Book a test ride, request a demo, or explore fleet partnerships with Tycorun electric motorcycles.",
};

export default function Contact() {
  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration multiple />
        <ContactPage />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

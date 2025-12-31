import PageIllustration from "@/components/page-illustration";
import ContactPage from "@/components/contact-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Contact | Custom Battery Inquiry",
  description:
    "Start a custom battery project with Tycorun. Share requirements, timelines, and compliance needs for a rapid engineering response.",
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

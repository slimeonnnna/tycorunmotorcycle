import PageIllustration from "@/components/global/page-illustration";
import ContactPage from "@/components/pages/contact/contact-page";
import Cta from "@/components/global/cta";
import Footer from "@/components/global/ui/footer";

export const metadata = {
  title: "Contact | OEM/ODM Partnerships",
  description:
    "Request OEM/ODM pricing, compliance documents, or SKD/CKD programs with TYCORUN.",
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

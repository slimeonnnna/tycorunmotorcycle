import { FontAwesomeLoader } from "@/components/global/fontawesome-loader";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FontAwesomeLoader />
      {children}
    </>
  );
}

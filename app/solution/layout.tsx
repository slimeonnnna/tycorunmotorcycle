import { FontAwesomeLoader } from "@/components/global/fontawesome-loader";

export default function SolutionLayout({
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

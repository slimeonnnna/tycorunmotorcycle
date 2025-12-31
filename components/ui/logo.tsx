import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Tycorun">
      <Image
        src="/tycorun-logo.webp"
        alt="Tycorun"
        width={140}
        height={18}
        className="h-6 w-auto"
        priority
      />
    </Link>
  );
}

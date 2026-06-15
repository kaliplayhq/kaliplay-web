import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "isotype" | "lockupHorizontal" | "lockupVertical";
};

const logo = {
  isotype: {
    alt: "",
    sizes: "96px",
    src: "/brand/kaliplay-isotype-white.svg"
  },
  lockupHorizontal: {
    alt: "Kaliplay",
    sizes: "(min-width: 640px) 260px, 190px",
    src: "/brand/kaliplay-lockup-horizontal-dark.svg"
  },
  lockupVertical: {
    alt: "Kaliplay",
    sizes: "(min-width: 1024px) 330px, (min-width: 640px) 290px, 220px",
    src: "/brand/kaliplay-lockup-vertical-dark.svg"
  }
};

export function BrandLogo({ className = "", priority = false, variant = "isotype" }: BrandLogoProps) {
  const asset = logo[variant];

  return (
    <span className={`brand-logo ${className}`}>
      <Image src={asset.src} alt={asset.alt} fill priority={priority} sizes={asset.sizes} className="object-contain" />
    </span>
  );
}

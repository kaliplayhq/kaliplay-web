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
    src: "/brand/kaliplay-isotype-color.svg"
  },
  lockupHorizontal: {
    alt: "Kaliplay",
    sizes: "(min-width: 640px) 210px, 170px",
    src: "/brand/kaliplay-lockup-horizontal-light.svg"
  },
  lockupVertical: {
    alt: "Kaliplay",
    sizes: "(min-width: 640px) 230px, 180px",
    src: "/brand/kaliplay-lockup-vertical-light.svg"
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

import Image from "next/image";
import { assets } from "@/lib/assets";

export default function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup ${compact ? "brand-lockup-compact" : ""}`} aria-label="Nightingale Lawyers">
      <span className="brand-bird" aria-hidden="true">
        <Image src={assets.logo} alt="" width={46} height={43} sizes="46px" />
      </span>
      {!compact && (
        <span className="brand-words">
          <strong>Nightingale</strong>
          <span>Lawyers</span>
        </span>
      )}
    </span>
  );
}

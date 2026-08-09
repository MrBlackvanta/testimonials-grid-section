import Image from "next/image";
import type { CardTheme, Testimonial } from "@/data";

const THEME_CLASS: Record<CardTheme, string> = {
  purple: "v-card-purple",
  slate: "v-card-slate",
  light: "v-card-light",
  dark: "v-card-dark",
};

export default function TestimonialCard({
  name,
  role,
  avatar,
  lead,
  quote,
  theme,
  quoteMark,
}: Testimonial) {
  return (
    <figure
      className={`v-card ${THEME_CLASS[theme]}`}
      data-quote-mark={quoteMark}
    >
      <figcaption className="flex items-center gap-4">
        <Image
          src={avatar}
          alt=""
          width={28}
          height={28}
          loading="eager"
          className="rounded-full ring-2 ring-purple-300"
        />
        <div className="flex flex-col gap-1">
          <p className="text-name text-(--card-name)">{name}</p>
          <p className="text-role text-(--card-role)">{role}</p>
        </div>
      </figcaption>

      <blockquote className="flex max-w-146 flex-col gap-4">
        <p className="text-lead font-semibold text-(--card-lead)">{lead}</p>
        <p className="v-quote">{quote}</p>
      </blockquote>
    </figure>
  );
}

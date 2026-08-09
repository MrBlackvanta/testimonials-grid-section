import type { StaticImageData } from "next/image";

export type TestimonialId =
  "daniel" | "jonathan" | "jeanette" | "patrick" | "kira";

export type CardTheme = "purple" | "slate" | "light" | "dark";

export type Testimonial = {
  id: TestimonialId;
  name: string;
  role: string;
  avatar: StaticImageData;
  lead: string;
  quote: string;
  theme: CardTheme;
  quoteMark?: true;
};

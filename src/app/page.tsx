import Footer from "@/components/footer";
import TestimonialCard from "@/components/testimonial-card";
import { testimonials, type TestimonialId } from "@/data";

const PLACEMENT: Record<TestimonialId, string> = {
  daniel: "md:col-span-2",
  jonathan: "",
  jeanette: "",
  patrick: "md:col-span-2",
  kira: "md:col-span-2 xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-1",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-1 items-center py-18">
        <h1 className="sr-only">What our graduates say</h1>

        <ul
          role="list"
          className="v-container grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-7.5 xl:gap-y-6"
        >
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className={PLACEMENT[testimonial.id]}>
              <TestimonialCard {...testimonial} />
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}

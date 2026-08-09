import Footer from "@/components/footer";
import TestimonialCard from "@/components/testimonial-card";
import { testimonials, type TestimonialId } from "@/data";

const PLACEMENT: Record<TestimonialId, string> = {
  daniel: "md:col-span-2",
  jonathan: "",
  jeanette: "",
  patrick: "md:col-span-2",
  kira: "md:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-1",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-1 items-center py-18">
        <h1 className="sr-only">What our graduates say</h1>

        <ul
          role="list"
          className="v-container grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-7.5 lg:gap-y-6"
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

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Organize, Unite, and Rejoice: Your Events on Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Secure your tickets and unlock valuable knowledge from mentors at leading companies across our intenatinal community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit" style={{ backgroundColor: "#00b4d8" }}>
              <Link href='#events'>
                Check it out!
              </Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.jpg"
            alt="hero"
            width={1000}
            height={1000}
            style={{ borderRadius: '20px' }}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Countless events<br />place their trust in us</h2>
      </section>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search
        CategoryFilter
      </div>

    </>
  );
}

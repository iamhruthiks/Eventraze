import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getAllEvents } from '@/lib/actions/event.actions';
import Search from "@/components/shared/Search";
import { SearchParamProps } from '@/types'
import CategoryFilter from "@/components/shared/CategoryFilter";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })


  // console.log(events)
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

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>


        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={events?.totalPages}
        />
      </section>

    </>
  );
}

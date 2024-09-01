import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { auth } from '@clerk/nextjs'
import { getEventsByUser } from '@/lib/actions/event.actions'
import Collection from '@/components/shared/Collection'

const ProfilePage = async () => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    const organizedEvents = await getEventsByUser({ userId, page: 1 })

    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className='h3-bold text-center sm:text-left'>My Tickets</h3>
                    <Button asChild size="lg" className="button hidden sm:flex">
                        <Link href="/#events">
                            Discover More Events
                        </Link>
                    </Button>
                </div>
            </section>

            {/* <section className="wrapper my-8">
                <Collection
                    data={events?data}
                    emptyTitle="No tickets for the event have been purchased yet."
                    emptyStateSubtext="No problem—there are plenty of thrilling events to check out!"
                    collectionType="My_Tickets"
                    limit={3}
                    page={1}
                    urlParamName="ordersPage"
                    totalPages={2}
                />
            </section> */}


            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className='h3-bold text-center sm:text-left'>Events Organized</h3>
                    <Button asChild size="lg" className="button hidden sm:flex">
                        <Link href="/events/create">
                            Create A New Event
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="wrapper my-8">
                <Collection
                    data={organizedEvents?.data}
                    emptyTitle="You haven't created any events yet."
                    emptyStateSubtext="Feel free to create some events now!"
                    collectionType="Events_Organized"
                    limit={6}
                    page={1}
                    urlParamName="eventsPage"
                    totalPages={2}
                />
            </section>



        </>
    )
}

export default ProfilePage

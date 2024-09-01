"use server"

import { connectToDatabase } from "../database"
import Event from '@/lib/database/models/event.model'
import User from "../database/models/user.model"
import Category from '@/lib/database/models/category.model'
import { handleError } from "../utils"
import { CreateEventParams } from "@/types"


const populateEvent = (query: any) => {
    return query
        .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
        .populate({ path: 'category', model: Category, select: '_id name' })
}

export const createEvent = async ({ event, userId, path }: CreateEventParams) => {
    try {
        await connectToDatabase()

        const organizer = await User.findById(userId)
        if (!organizer) throw new Error('Organizer not found')

        console.log({
            CategoryId: event.categoryId,
            organizerId: userId
        })

        const newEvent = await Event.create({
            ...event,
            category: event.categoryId,
            organizer: userId
        })

        return JSON.parse(JSON.stringify(newEvent))

    } catch (error) {
        handleError(error)
    }
}

export const getEventById = async (eventId: string) => {
    try {
        await connectToDatabase()

        const event = await populateEvent(Event.findById(eventId))

        if (!event) {
            throw new Error("event not found")
        }

        return JSON.parse(JSON.stringify(event))
    } catch (error) {
        handleError(error)
    }
}


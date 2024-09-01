"use server"

import { connectToDatabase } from "../database"
import Event from '@/lib/database/models/event.model'
import User from "../database/models/user.model"
import Category from '@/lib/database/models/category.model'
import { handleError } from "../utils"
import { CreateEventParams } from "@/types"




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


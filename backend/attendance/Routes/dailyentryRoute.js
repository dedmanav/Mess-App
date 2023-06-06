import { Router } from 'express'
import {getUserEntryDetail, updateDailyEntry } from '../Controller/dailyentryController.js'

const dailyentryRouter = Router()

dailyentryRouter.patch("/updateentry" , updateDailyEntry)
dailyentryRouter.get("/getuserentry/:userId" , getUserEntryDetail)


export default dailyentryRouter
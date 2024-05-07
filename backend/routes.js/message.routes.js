import express from 'express'
import protectedRoute from '../middleware/authorise.js'
import { sendMessage,getMessage } from '../controllers/message.controller.js'
const router = express.Router()

router.post('/',(res,req)=>console.log("this is a message box"))
router.get('/fetch/:id',protectedRoute,getMessage)
//why even setting it to post , it was fetching the data
router.post('/send/:id',protectedRoute,sendMessage)

export default router
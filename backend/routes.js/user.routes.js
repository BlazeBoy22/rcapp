import express from 'express'
const router = express.Router()

import { getAllUsers } from '../controllers/user.controller.js';
import protectedRoute from '../middleware/authorise.js';

router.get('/getAllUsers',protectedRoute,getAllUsers);

export default router
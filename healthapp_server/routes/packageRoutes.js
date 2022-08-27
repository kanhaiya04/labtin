import express from 'express'

import { getPackages, createPackages } from '../controllers/packages.js'

const router = express.Router()

router.get('/', getPackages)
router.post('/', createPackages)

export default router

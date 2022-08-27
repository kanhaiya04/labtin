import express from 'express'

import Package from '../models/package.js'

const router = express.Router()

export const getPackages = async (req, res) => {
  try {
    const posts = await Package.find()
    res.json(posts)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPackages = async (req, res) => {
  const post = req.body

  const newPackage = new Package({ ...post })

  try {
    await newPackage.save()
    res.status(201).json(newPackage)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchPackages = () => API.get('/package')

export const createPackage = (newPost) => API.post('/package', newPost)

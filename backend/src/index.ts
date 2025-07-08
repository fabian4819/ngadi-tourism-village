import express from 'express'
import cors from 'cors'
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: 'production',
  apiVersion: '2023-07-01',
  token: undefined,
  useCdn: false
})

app.get('/api/posts', async (req, res) => {
  const query = '*[_type == "post"]{title, slug, body}'
  const data = await sanity.fetch(query)
  res.json(data)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`)
})

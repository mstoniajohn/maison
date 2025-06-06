// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ5zukn_8M2Y4RnrZZ9bfSiqs&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json({ data })
    // return data.reviews
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    throw error
  }
  // This API call will request a space with the specified ID
}

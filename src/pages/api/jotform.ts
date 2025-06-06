// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
// import jotform from 'jotform'

// jotform.options({
//   debug: true,
//   apiKey: 'YOUR_API_KEY',
// })
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = {
      'submission[1]': req.body.email,
      'submission[3]': req.body.email,
    }
    const formId = req.body.formId
    const url = `https://api.jotform.com/form/${formId}/submissions?apiKey=${process.env.NEXT_PUBLIC_JOTFORM_API_KEY}`

    const response = await axios.post(url, new URLSearchParams(data))

    const resData = await response.data
    res.status(200).json({ resData })
    // return data.reviews
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    throw error
  }
  // This API call will request a space with the specified ID
}

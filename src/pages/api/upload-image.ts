import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import { uploadToS3 } from '@/utils/s3-upload'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const form = formidable({})
    const [fields, files] = await form.parse(req)

    const file = files.image?.[0]
    if (!file) {
      return res.status(400).json({ error: 'No image file provided' })
    }

    // Upload to S3 or your preferred storage
    const imageUrl = await uploadToS3(file)

    // return res.status(200).json({ link: imageUrl })
    return res.status(200).json({ link: imageUrl })
  } catch (error) {
    console.error('Error uploading image:', error)
    return res.status(500).json({ error: 'Error uploading image' })
  }
}

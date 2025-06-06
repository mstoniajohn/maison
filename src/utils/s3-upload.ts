import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import formidable from 'formidable'

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
})

export async function uploadToS3(file: formidable.File) {
  const fileBuffer = await readFile(file.filepath)
  const fileName = `${Date.now()}-${file.originalFilename}`

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME || 'skyrockimages',
    Key: fileName,
    Body: fileBuffer,
    ContentType: file.mimetype || 'application/octet-stream',
  })

  await s3Client.send(command)

  // Return the public URL of the uploaded file
  return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`
}

async function readFile(filepath: string): Promise<Buffer> {
  const fs = require('fs')
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, (err: Error, data: Buffer) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

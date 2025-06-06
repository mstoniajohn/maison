import React, { useEffect, useState } from 'react'

import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
import { Box } from '@mui/system'

import SectionHeader from '../SectionHeader'

// const outdoorDocRef = collection(db, 'negril', 'guides', 'outdoor')
const outdoorRef = doc(db, 'negril', 'guides')

export default function OutdoorSection() {
  const [header, setHeader] = useState(null)
  const [sections, setSections] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(
      outdoorRef,
      { includeMetadataChanges: true },
      (docs) => {
        setHeader(docs?.data()?.outdoorHeader)
      }
    )
    return () => {
      unsub()
    }
  }, [])

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(outdoorDocRef, (querySnapshot) => {
  //     const items: any = []
  //     querySnapshot.forEach((doc) => {
  //       items.push({ id: doc.id, list: doc.data() })
  //     })
  //     setSections(items)
  //   })
  //   return () => {
  //     unsubscribe()
  //   }
  // }, [])
  return (
    <Box id="outdoor">
      <SectionHeader
        header={header || {}}
        title={header?.['title'] || ''}
        sectionImage={
          header?.['image'] ||
          'https://firebasestorage.googleapis.com/v0/b/skylark-f6267.appspot.com/o/negril-guide%2F960x0.jpg?alt=media&token=49085507-14a3-4e3e-911f-9bfe7d7b7f12'
        }
        text={header?.['text'] || ''}
        id="outdoorHeader"
      />
    </Box>
  )
}

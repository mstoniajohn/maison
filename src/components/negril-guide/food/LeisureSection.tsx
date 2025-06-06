import React, { useEffect, useState } from 'react'

import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'

import SectionHeader from '../SectionHeader'

// const foodDocRef = collection(db, 'negril', 'guides', 'leisure')
const foodRef = doc(db, 'negril', 'guides')

export function LeisureSection() {
  const [header, setHeader] = useState(null)
  const [sections, setSections] = useState([])

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(foodDocRef, (querySnapshot) => {
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

  useEffect(() => {
    const unsub = onSnapshot(
      foodRef,
      { includeMetadataChanges: true },
      (docs) => {
        setHeader(docs?.data()?.leisureHeader)
      }
    )
    return () => {
      unsub()
    }
  }, [])

  return (
    <Box id="leisure">
      <SectionHeader
        header={header || {}}
        title={header?.['title'] || ''}
        sectionImage={
          header?.['image'] ||
          'https://firebasestorage.googleapis.com/v0/b/skylark-f6267.appspot.com/o/negril-guide%2F960x0.jpg?alt=media&token=49085507-14a3-4e3e-911f-9bfe7d7b7f12'
        }
        text={header?.['text'] || ''}
        id="leisureHeader"
      />
    </Box>
  )
}

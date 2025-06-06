import React from 'react'
import PressButton from './PressButton'
import PressImage from './PressImage'
import PressBody from './PressBody'
import { Edit } from 'lucide-react'
import { Button } from '../ui/button'
import { IPress } from '@/hooks/usePressForm'

export default function PressItem({
  press,
  setSelectedPress,
  showEdit = false,
  onOpen, // for dialog
}: {
  press: IPress
  setSelectedPress: any
  showEdit?: boolean
  onOpen: any // for dialog
}) {
  return (
    <div className="relative flex flex-col items-center space-y-4">
      {showEdit ? (
        <div className="absolute right-0 top-0 justify-self-end">
          <div className="flex items-center gap-2">
            <p className="rounded-full bg-pink/80 p-2 font-bold text-gray-100">
              {press?.order ? `#${press.order}` : 'N/A'}
            </p>
            <Button
              className="p-0"
              variant="outline"
              size="icon"
              onClick={() => {
                onOpen(press)
                setSelectedPress(press)
              }}
            >
              <Edit className="text-blue" />
            </Button>
          </div>
        </div>
      ) : null}
      {showEdit ? (
        <div className="absolute bottom-1/4 right-0 justify-self-end">
          <p className="bg-white bg-opacity-90 p-1 text-sm font-bold text-gray-800">
            {!press.draft ? `✅ Published` : `❌ Not Published`}
          </p>
        </div>
      ) : null}
      <PressImage url={press.image} />

      <PressBody
        title={press.title}
        subtitle={press?.subtitle}
        body={press.text}
      />
      <PressButton link={press.link} />
    </div>
  )
}

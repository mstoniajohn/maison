import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { Button, Typography } from '@mui/material'
import { toast } from 'react-toastify'
import {
  createRoom,
  fetchRooms,
  setCurrentRoom,
  setOpenEditForm,
  setOpenRoomForm,
  updateRoom,
} from '@/features/room/roomSlice'

type Props = {
  create?: boolean
  room?: any
}

function AddOrEditRoom({ create = false }: Props) {
  const dispatch = useAppDispatch()
  const { currentRoom } = useAppSelector((state) => state.rooms)
  const { currentUser, user } = useAppSelector((state) => state.auth)
  const [room, setRoom] = useState({
    ...currentRoom,
  })
  const [file, setFile] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
    image7: null,
    image8: null,
    image9: null,
  })
  const [fileURL, setFileURL] = useState({
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: '',
    image7: '',
    image8: '',
    image9: '',
  })
  const onFileChange = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (e.target.files[0].size > 1000000) {
      console.log(e.target.files[0])
      toast('File is too large. Choose a smaller file.')
      setFile({
        ...file,
        [e.target.name]: null,
      })
    } else {
      const fileData = e.target.files[0]
      // get url from uploaded file
      setFile({
        ...file,
        [e.target.name]: fileData,
      })
      setFileURL({
        ...fileURL,
        [e.target.name]: URL.createObjectURL(fileData),
      })
    }
  }
  const handleFormData = async (data: any) => {
    const formData = new FormData()
    if (file.image1) {
      formData.append('image1', file.image1)
    }
    if (file.image2) {
      formData.append('image2', file.image2)
    }
    if (file.image3) {
      formData.append('image3', file.image3)
    }
    if (file.image4) {
      formData.append('image4', file.image4)
    }
    if (file.image5) {
      formData.append('image5', file.image5)
    }
    if (file.image6) {
      formData.append('image6', file.image6)
    }
    if (file.image7) {
      formData.append('image7', file.image7)
    }
    if (file.image8) {
      formData.append('image8', file.image8)
    }
    if (file.image9) {
      formData.append('image9', file.image9)
    }
    formData.append('title', room?.title)
    formData.append('sub_title', room?.sub_title)
    formData.append('description', room?.description)
    formData.append('order', room?.order)

    if (!create) {
      await dispatch(
        updateRoom({ data: formData, pkid: room.pkid, token: user?.access })
      )
      //    if success, close dialog
      dispatch(setCurrentRoom(null))
      dispatch(setOpenEditForm(false))
      dispatch(fetchRooms())
    } else {
      await dispatch(createRoom({ data: formData, token: user?.access }))
      dispatch(setCurrentRoom(null))
      dispatch(setOpenRoomForm(false))
      dispatch(fetchRooms())
    }
  }

  console.log(currentRoom)
  return (
    <form className=" flex flex-col space-y-1  p-2">
      {/* if create, add new room */}
      <div className="">
        <label htmlFor="title" className="font-bold uppercase text-blue">
          Title
        </label>
        <input
          className="w-full rounded-md"
          type="text"
          name="title"
          id="title"
          value={room?.title || ''}
          onChange={(e) => setRoom({ ...room, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="sub_title" className="font-bold uppercase text-blue">
          Sub Title
        </label>
        <textarea
          rows={3}
          className="w-full rounded-md"
          name="sub_title"
          id="sub_title"
          value={room?.sub_title || ''}
          onChange={(e) => setRoom({ ...room, sub_title: e.target.value })}
        />
      </div>

      <div>
        {/* order */}
        <label htmlFor="order" className="font-bold uppercase text-blue">
          Order
        </label>
        <input
          className="w-full rounded-md"
          type="number"
          name="order"
          id="order"
          value={room?.order || ''}
          onChange={(e) => setRoom({ ...room, order: e.target.value })}
        />
      </div>
      {/* allow to update 9 images */}
      <ImageForm
        onFileChange={onFileChange}
        fileURL={fileURL}
        room={room}
        image="image1"
      />
      <ImageForm
        onFileChange={onFileChange}
        fileURL={fileURL}
        room={room}
        image="image2"
      />
      <ImageForm
        onFileChange={onFileChange}
        fileURL={fileURL}
        room={room}
        image="image3"
      />
      <ImageForm
        onFileChange={onFileChange}
        fileURL={fileURL}
        room={room}
        image="image4"
      />
      <ImageForm
        onFileChange={onFileChange}
        fileURL={fileURL}
        room={room}
        image="image5"
      />
      <ImageForm
        onFileChange={onFileChange}
        fileURL={fileURL}
        room={room}
        image="image6"
      />

      <div>
        <label htmlFor="description" className="font-bold uppercase text-blue">
          Description
        </label>
        <textarea
          rows={10}
          className=" w-full rounded-md"
          name="description"
          id="description"
          value={room?.description || ''}
          onChange={(e) => setRoom({ ...room, description: e.target.value })}
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleFormData(room)}
        sx={{
          color: 'white',
          fontWeight: 'bold',
          mt: 3,
        }}
      >
        {create ? 'Create Room' : 'Update Room'}
      </Button>
    </form>
  )
}

export default AddOrEditRoom

export function ImageForm({
  onFileChange,
  fileURL,
  room,
  image,
}: {
  onFileChange: (e: React.BaseSyntheticEvent) => void
  fileURL: any
  room: any
  image: string
}) {
  return (
    <div className="my-2 space-y-1">
      <label htmlFor={image} className="font-bold uppercase text-blue">
        {image}
      </label>
      {/* file field */}
      <input
        className="w-full rounded-md"
        type="file"
        name={image}
        id={image}
        onChange={(e) => onFileChange(e)}
      />
      {fileURL?.[image] && (
        <>
          <Typography
            variant="caption"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            {image}
          </Typography>
          <img
            className="h-20 w-full object-cover"
            src={fileURL?.[image]}
            alt=""
          />
        </>
      )}

      {
        // if image1 is not empty, show image1
        room?.[image] && (
          <>
            <Typography
              variant="caption"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              {image}
            </Typography>
            <img
              className="h-20 w-full object-cover"
              src={room?.[image]}
              alt=""
            />
          </>
        )
      }
    </div>
  )
}

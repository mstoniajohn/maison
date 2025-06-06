import { Typography } from '@mui/material'

import React from 'react'

import { ArrowForwardSharp, Edit } from '@mui/icons-material'

import { useAppDispatch, useAppSelector } from '../../app/store'

// import CustomDialog from '../layout/CustomDialog'
import AddOrEditRoom from '../forms/AddOrEditRoom'
import CustomDialog from '../CustomDialog'
import { setCurrentRoom, setOpenEditForm } from '@/features/room/roomSlice'
import ExternalMUILink from '../features/ExternalMUILink'
import BootstrapCarousel2 from '../features/BootstrapCarousel2'

const GuestRoomsNew = ({
  title,
  subtitle,
  link,
  description,
  images,
  room,
  pkid,
}: {
  title?: string
  subtitle?: string
  link?: string
  description?: any
  images?: any[]
  room?: any
  pkid?: number
}) => {
  const dispatch = useAppDispatch()
  const { openEditForm } = useAppSelector((state) => state.rooms)
  const { currentUser, user } = useAppSelector((state) => state.auth)
  // transfrom images to array of object {src: string, name: title, mobileSrc: string}
  let imagesConverted = images?.filter((image) => image)
  imagesConverted = imagesConverted?.map((image) => {
    return {
      src: image,
      name: title || '',
      mobileSrc: image,
    }
  })
  const handleRoomEdit = () => {
    dispatch(setCurrentRoom(room))
    dispatch(setOpenEditForm(true))
  }
  const handleCloseDialog = () => {
    dispatch(setCurrentRoom(null))
    dispatch(setOpenEditForm(false))
  }

  return (
    <div className="my-10 grid grid-cols-1 gap-4 sm:flex-nowrap md:grid-cols-2">
      <div className="">
        <div className="flex items-center">
          <Typography
            variant="h2"
            component="h1"
            color="primary"
            sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
          >
            {title}
          </Typography>
          {currentUser?.admin ? (
            <Edit
              onClick={handleRoomEdit}
              className="mb-2 ml-2 cursor-pointer text-blue"
            />
          ) : null}
        </div>
        <div
          className="text-md font-bold text-[#E088A8] md:max-w-sm"
          dangerouslySetInnerHTML={{
            __html: subtitle?.replaceAll('\r\n', '<br />') || '',
          }}
        />
        <div
          className="my-2"
          dangerouslySetInnerHTML={{
            __html: description?.replaceAll('\r\n', '<br />') || '',
          }}
        />

        <ExternalMUILink href={link}>
          <Typography
            color="secondary"
            variant="h3"
            sx={{ fontWeight: 'bold', mt: 1 }}
          >
            Book Now
          </Typography>
        </ExternalMUILink>
      </div>
      <div className="">
        <div className="">
          {imagesConverted && (
            <BootstrapCarousel2 images={imagesConverted} height="400px" />
          )}
          {/* <img
                className="h-[350px] w-full object-cover object-center sm:h-[500px]"
                src={image.src}
                alt=""
              /> */}
        </div>
      </div>
      {/* dialog  */}
      <CustomDialog open={openEditForm} handleClose={handleCloseDialog}>
        <AddOrEditRoom />
      </CustomDialog>
    </div>
  )
}

export default GuestRoomsNew

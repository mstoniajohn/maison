import { Avatar, Button, Link, Rating, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import CustomSpinner from '../../layout/CustomSpinner'
import { Star } from '@mui/icons-material'

const Reviews = () => {
  const [reviews, setReviews] = React.useState([])
  const [rating, setRating] = React.useState(0)
  const [totalRating, setTotalRating] = React.useState(0)

  const getReviews = async () => {
    try {
      const res = await axios.get('/api/reviews')
      const data = await res.data
      console.log('DATA', data)
      setReviews(data?.data?.result.reviews)
      setRating(data?.data?.result.rating)
      setTotalRating(data?.data.result.user_ratings_total)
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    getReviews()
  }, [])

  return (
    <div className="my-10">
      {reviews.length > 0 ? (
        <Stack spacing={1}>
          <Stack
            alignItems="center"
            marginBottom={3}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={{ xs: 'center', sm: 'space-between' }}
            className="rounded-lg bg-gray-200"
            padding={2}
            columnGap={2}
            rowGap={2}
          >
            <Stack>
              <Typography
                variant="h2"
                component="div"
                color="primary"
                align="center"
              >
                Google Rating
              </Typography>
              {rating !== 0 ? (
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  columnGap={1}
                >
                  {rating}
                  <Rating
                    name="size-large"
                    value={rating}
                    size="small"
                    precision={0.5}
                    readOnly
                    emptyIcon={
                      <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Typography variant="body2" component="div" color="GrayText">
                    {totalRating} reviews
                  </Typography>
                </Stack>
              ) : (
                'Loading...'
              )}
            </Stack>
            {/* write review link */}
            {/* https://g.page/r/CZ62WfW30oqrEAI/review */}
            <Button
              variant="contained"
              href="https://search.google.com/local/writereview?placeid=ChIJ5zukn_8M2Y4RnrZZ9bfSiqs"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#ffffff',
                '&:hover': {
                  color: 'whitesmoke',
                },
              }}
            >
              <Typography variant="body2" component="div" fontWeight={700}>
                Write a review
              </Typography>
            </Button>
          </Stack>
          <div className=" grid grid-cols-1  gap-4 sm:grid-cols-3">
            {reviews?.map((review: any, i) => (
              <div key={i} className="flex">
                <RatingItem item={review} />
              </div>
            ))}
          </div>
        </Stack>
      ) : (
        <div className="space-y-2">
          <div className="placeholder-glow">
            <span className="placeholder col-12 placeholder-lg py-3"></span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="placeholder-glow d-none d-sm-block">
              <span className="placeholder col-4  py-4"></span>
            </div>
            <div className="placeholder-glow d-none d-sm-block">
              <span className="placeholder col-4  py-4"></span>
            </div>
            <div className="placeholder-glow d-none d-sm-block">
              <span className="placeholder col-4  py-4"></span>
            </div>
            <div className="placeholder-glow d-none d-sm-block">
              <span className="placeholder col-4  py-4"></span>
            </div>
          </div>
          <div className="d-block d-sm-none grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="placeholder-glow">
              <span className="placeholder col-12  py-4"></span>
            </div>
            <div className="placeholder-glow">
              <span className="placeholder col-12  py-4"></span>
            </div>
            <div className="placeholder-glow">
              <span className="placeholder col-12  py-4"></span>
            </div>
            <div className="placeholder-glow">
              <span className="placeholder col-12  py-4"></span>
            </div>
          </div>
          <CustomSpinner />
        </div>
      )}
    </div>
  )
}

export default Reviews

const RatingItem = ({ item }: { item: any }) => {
  const [showContent, setShowContent] = React.useState(false)
  //   function stringToColor(string: string) {
  //     let hash = 0
  //     let i
  //     /* eslint-disable no-bitwise */
  //     for (i = 0; i < string.length; i += 1) {
  //       hash = string.charCodeAt(i) + ((hash << 5) - hash)
  //     }

  //     let color = '#'
  //     for (i = 0; i < 3; i += 1) {
  //       const value = (hash >> (i * 8)) & 0xff
  //       color += `00${value.toString(16)}`.slice(-2)
  //     }
  //     /* eslint-enable no-bitwise */
  //     return color
  //   }

  //   function stringAvatar(name: string) {
  //     return {
  //       sx: {
  //         bgcolor: stringToColor(name),
  //       },
  //       children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  //     }
  //   }
  return (
    <div className="flex flex-col  rounded-xl bg-gray-200 p-2">
      <Stack direction="row" columnGap={1}>
        <Avatar
          //   {...stringAvatar(item?.author_name)}
          src={item?.profile_photo_url}
          alt={item?.author_name}
        />
        {/* https://lh3.googleusercontent.com/a/ACg8ocJTQWBLvb7YfmAhBgHzDzKhsqp_zwK888nRfU_VuHMz=s128-c0x00000000-cc-rp-mo */}
        <Stack>
          <Typography variant="h6" fontWeight={600} component="div">
            {item?.author_name}
          </Typography>
          <Typography variant="body1" component="div" color="GrayText">
            {item?.relative_time_description}
          </Typography>
        </Stack>
      </Stack>
      <Stack rowGap={1}>
        <Stack direction="row" alignItems="center" columnGap={1}>
          {item?.rating}
          <Rating
            name="size-large"
            defaultValue={item?.rating}
            size="small"
            precision={0.5}
            readOnly
            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
        </Stack>

        <Typography variant="body2" component="div">
          {item?.text?.substring(0, 200)}
          {showContent && item?.text?.substring(200)}
          {/* show only 200 characters from text then add a read more to show rest of content */}
          {item?.text?.length > 200 && (
            <Link
              className=" cursor-pointer pl-1"
              onClick={() => setShowContent(!showContent)}
              sx={{
                color: 'primary.main',
                '&:hover': {
                  textDecoration: 'underline',
                  color: 'primary.dark',
                },
              }}
            >
              {showContent ? 'Read less' : 'Read more'}
            </Link>
          )}
        </Typography>
      </Stack>
    </div>
  )
}

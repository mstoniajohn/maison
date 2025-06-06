import { Instagram } from '@mui/icons-material'
import { Box, Link, Tooltip } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CustomImage from './toolbox/CustomImage'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
const IMAGE_TYPES = ['CAROUSEL_ALBUM', 'IMAGE']
export default function CarouselInsta({ items }: { items: any }) {
  console.log(items)
  // const imageLoader = ({ src, width, quality }) => {
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  // }
  return (
    <Carousel
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {items
        ? items?.map(
            ({
              id,
              media_url,
              permalink,
              caption,
              media_type,
            }: {
              id: any
              media_url: any
              permalink: any
              caption: any
              media_type: string
            }) => (
              <Box
                key={id}
                className="relative z-10 mx-1 flex max-h-72 items-center justify-center"
                id="instagram"
              >
                <Tooltip title={caption}>
                  <Link
                    href={permalink}
                    underline="none"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {IMAGE_TYPES.includes(media_type) ? (
                      <CustomImage
                        src={media_url}
                        alt="Skylark Negril Beach Resort"
                      />
                    ) : (
                      // <img
                      //   className="h-96 w-screen object-cover"
                      //   src={media_url}
                      // />
                      <video className="h-96 w-screen object-cover">
                        <source src={media_url} type="video/mp4" />
                      </video>
                    )}
                    {/* <video
                        className="h-auto w-full object-cover"
                        src={media_url}
                      /> */}

                    <Instagram
                      className="z-100 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer opacity-75"
                      sx={{ fontSize: '4rem' }}
                    />
                  </Link>
                </Tooltip>
              </Box>
            )
          )
        : []}
    </Carousel>
  )
}

// const CustomRightArrow = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     carouselState: { currentSlide, deviceType }
//   } = rest;
//   // onMove means if dragging or swiping in progress.
//   return <button onClick={() => onClick()} />;
// };

// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//   const { carouselState: { currentSlide } } = rest;
//   return (
//     <div className="carousel-button-group ">
//       <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
//       <ButtonTwo onClick={() => next()} />
//       <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree>
//     </div>
//   );
// };
// <Carousel showDots customDot={<CustomDot />} arrows={false} customButtonGroup={<ButtonGroup />}>

// const CustomDot = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     index,
//     active,
//     carouselState: { currentSlide, deviceType }
//   } = rest;
//   const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];

//   return (
//     <button
//       className={active ? "active" : "inactive"}
//       onClick={() => onClick()}
//     >
//       {React.Children.toArray(carouselItems)[index]}
//     </button>
//   );
// };

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Button, Typography, useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router'

import { useScrollTrigger } from '@mui/material'
import { Dehaze } from '@mui/icons-material'
import CustomImage from '../features/toolbox/CustomImage'

const stay = [
  {
    name: 'All Guest Rooms',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/stay',
    icon: ChartBarIcon,
  },
  {
    name: 'Specials',
    href: '/specials',
  },
  {
    name: 'Resort Amenities',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/resort-amenities',
    icon: CursorClickIcon,
  },
  {
    name: 'Gift Cards',
    href: '/gift-cards',
  },
]
const play = [
  {
    name: 'Activities',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/activities',
    icon: ChartBarIcon,
  },
  {
    name: 'Our Blog',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/blog',
    icon: CursorClickIcon,
  },
  {
    name: 'Negril Guide',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/negril-guide',
    icon: ChartBarIcon,
  },
  {
    name: 'Psilocybin Soundbath',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/play/psilocybin',
    icon: ChartBarIcon,
  },
  {
    name: 'Candle Making',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/play/candle-making',
    icon: ChartBarIcon,
  },
]

const aboutus = [
  {
    name: 'All About Skylark',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '/about-us',
    icon: SupportIcon,
  },
  {
    name: 'Award & Press',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '/press-media',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Contact Us',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '/contact-us',
    icon: CalendarIcon,
  },
  {
    name: 'FAQ',
    description: 'Understand how we take your privacy seriously.',
    href: '/faq',
    icon: ShieldCheckIcon,
  },
]

export default function NavbarV2() {
  const { pathname } = useRouter()
  const trigger = useScrollTrigger()
  const currentPath = pathname.split('/')[1]
  const greaterThanMid = useMediaQuery((theme: any) =>
    theme.breakpoints.up('md')
  )
  const heightMd = trigger ? 70 : 80
  const heightSm = trigger ? 67 : 70
  const widthMd = trigger ? 165 : 190
  const widthSm = trigger ? 160 : 170

  return (
    <div className="navbar-container relative z-50 mb-8 sm:mb-0">
      {/* mb-20 md:mb-32 */}
      {/* <HideOnScroll> */}
      <div id="back-to-top-anchor"></div>

      <Popover
        className={`bg-white  fixed top-0 z-50 w-full  ${
          trigger && 'py-2'
        } px-2 md:space-x-4`}
      >
        <div className="mx-auto px-2 sm:px-6">
          <div
            className={`flex w-full items-center justify-between border-gray-100  ${
              trigger ? 'py-2' : 'py-3'
            } px-2 md:space-x-2`}
          >
            <div className="flex-none justify-start xl:flex-1">
              <Link href="/">
                <span className="cursor-pointer">
                  <span className="sr-only">Workflow</span>
                  <CustomImage
                    src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1679786655/skylark/skylark-logo_zacyjl.svg"
                    height={greaterThanMid ? heightMd : heightSm}
                    width={greaterThanMid ? widthMd : widthSm}
                  />
                </span>
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-evenly">
              <div className="-my-2 -mr-2 ml-auto lg:hidden">
                <Popover.Button
                  className={`flex-inline bg-white items-center justify-end rounded-md text-[#E088A8]  hover:bg-gray-100 hover:text-[#E088A8] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#51BAB3]`}
                >
                  <span className="sr-only">Open menu</span>
                  <Typography
                    color="secondary"
                    variant="subtitle2"
                    align="center"
                    sx={{ fontWeight: 'bold', mb: 0, pb: 0 }}
                  >
                    MENU
                  </Typography>
                  <Dehaze fontSize="large" className="mt-0" />
                </Popover.Button>
              </div>
              <Popover.Group
                as="nav"
                className="  -my-2 hidden flex-1 items-center md:justify-end  lg:flex lg:justify-around lg:space-x-6"
              >
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`bg-white group flex items-center justify-evenly rounded-md text-lg hover:text-pink focus:outline-none focus:ring-2 focus:ring-[#E088A8] focus:ring-offset-2 sm:text-lg
                          ${open ? 'text-pink' : 'text-blue'}`}
                      >
                        <Typography
                          color={`${
                            currentPath === 'stay' ? 'secondary' : 'primary'
                          }`}
                          variant="h5"
                          align="center"
                          sx={{
                            fontWeight: '400',
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          STAY
                        </Typography>
                        <ChevronDownIcon
                          className={`h-5 w-5 self-center text-[#51BAB3] group-hover:text-pink
                            ${
                              pathname.includes('stay')
                                ? 'text-[#E088A8]'
                                : 'text-[#51BAB3]'
                            }`}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-[200px]  transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                          <div className="overflow-hidden shadow-lg ring-1 ring-pink ring-opacity-5">
                            <div className="relative grid gap-6 bg-blue py-6 sm:gap-8 sm:p-3">
                              {stay.map((item) => (
                                <Link href={item?.href} key={item?.name}>
                                  <span className="-m-3 flex cursor-pointer items-start p-2 hover:bg-[#E088A8]">
                                    <div className="ml-4">
                                      <Typography
                                        variant="body2"
                                        color="white"
                                        sx={{ fontSize: '1.2rem' }}
                                      >
                                        {item.name}
                                      </Typography>
                                    </div>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Popover className="relative ">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`bg-white group flex items-center justify-evenly rounded-md text-lg hover:text-pink focus:outline-none focus:ring-2 focus:ring-[#E088A8] focus:ring-offset-2 sm:text-lg
                          ${open ? 'text-pink' : 'text-blue'}`}
                      >
                        <Typography
                          color={`${
                            currentPath === 'play' || currentPath === 'blog'
                              ? 'secondary'
                              : 'primary'
                          }`}
                          variant="h5"
                          align="center"
                          sx={{
                            fontWeight: '400',
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          PLAY
                        </Typography>
                        <ChevronDownIcon
                          className={`h-5 w-5 self-center text-[#51BAB3] group-hover:text-pink
                            ${
                              open ||
                              currentPath === 'play' ||
                              currentPath === 'blog'
                                ? 'text-[#E088A8]'
                                : 'text-[#51BAB3]'
                            },
                            
                          `}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-[200px]  transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                          <div className="overflow-hidden  shadow-lg ring-1 ring-[#E088A8] ring-opacity-5">
                            <div className="relative grid gap-6 bg-[#51BAB3] py-6 sm:gap-8 sm:p-3">
                              {play.map((item) => (
                                <Link key={item?.name} href={item?.href}>
                                  <span className="-m-3 flex cursor-pointer items-start  p-2 font-sans hover:bg-[#E088A8]">
                                    <div className="ml-4">
                                      <Typography
                                        variant="body2"
                                        color="white"
                                        sx={{ fontSize: '1.2rem' }}
                                      >
                                        {item.name}
                                      </Typography>
                                    </div>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Link href="/eat">
                  <Typography
                    color={`${currentPath !== 'eat' ? 'primary' : 'secondary'}`}
                    align="center"
                    variant="h5"
                    sx={{
                      fontWeight: '400',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    EAT
                  </Typography>
                </Link>
                <Link href="/spa">
                  <Typography
                    color={`${currentPath !== 'spa' ? 'primary' : 'secondary'}`}
                    variant="h5"
                    align="center"
                    sx={{
                      fontWeight: '400',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    SPA
                  </Typography>
                </Link>
                <Link href="/weddings">
                  <Typography
                    color={`${
                      currentPath !== 'weddings' ? 'primary' : 'secondary'
                    }`}
                    align="center"
                    variant="h5"
                    sx={{
                      fontWeight: '400',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    EVENTS
                  </Typography>
                </Link>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`bg-white group flex items-center justify-evenly rounded-md text-lg hover:text-pink focus:outline-none focus:ring-2 focus:ring-[#E088A8] focus:ring-offset-2 sm:text-lg
                          ${open ? 'text-pink' : 'text-blue'}`}
                      >
                        <Typography
                          color={`${
                            currentPath === 'about-us' ? 'secondary' : 'primary'
                          }`}
                          variant="h5"
                          align="center"
                          sx={{
                            fontWeight: '400',
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          ABOUT US
                        </Typography>
                        <ChevronDownIcon
                          className={`h-5 w-5 self-center text-[#51BAB3] group-hover:text-pink`}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-[200px]  -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden  shadow-lg ring-1 ring-[#E088A8] ring-opacity-5">
                            <div className="relative grid gap-6 bg-[#51BAB3] py-6 sm:gap-8 sm:p-3">
                              {aboutus.map((item) => (
                                <Link key={item?.name} href={item?.href}>
                                  <span className="-m-3 flex cursor-pointer items-start  p-2 hover:bg-[#E088A8]">
                                    <div className="ml-4">
                                      <Typography
                                        variant="body2"
                                        color="white"
                                        sx={{ fontSize: '1.2rem' }}
                                      >
                                        {item.name}
                                      </Typography>
                                    </div>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
            <div className=" ml-5 hidden items-center lg:flex lg:w-auto">
              <Button
                href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.54452782.700408746.1679685400-401113273.1672706732"
                disableElevation
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: '25px',
                  fontWeight: 'bold',
                  border: '2px solid transparent',
                  color: 'white',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'secondary',
                  },
                }}
              >
                Book A ROOM
              </Button>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
          >
            <div className="bg-white ring-black divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <Link href="/">
                    {/* <img
                      className="h-14 w-auto cursor-pointer"
                      src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1679786655/skylark/skylark-logo_zacyjl.svg"
                      alt="Workflow"
                    /> */}
                    <CustomImage
                      src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1679786655/skylark/skylark-logo_zacyjl.svg"
                      height={60}
                      width={140}
                    />
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white inline-flex items-center justify-center rounded-md p-2 text-[#51BAB3] hover:bg-gray-100 hover:text-[#E088A8] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#51BAB3]">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex w-full flex-col items-center justify-center">
                    <Popover.Group
                      as="nav"
                      className="flex flex-col items-center justify-center space-y-4 lg:hidden"
                    >
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={`bg-white group inline-flex items-center rounded-md  text-lg hover:text-[#E088A8] focus:outline-none focus:ring-2 focus:ring-[#51BAB3] focus:ring-offset-2 sm:text-xl
                                ${open ? 'text-[#51BAB3]' : 'text-[#51BAB3]'}`}
                            >
                              <Typography
                                color={`${
                                  currentPath !== 'stay'
                                    ? 'primary'
                                    : 'secondary'
                                }`}
                                variant="h5"
                                align="center"
                                sx={{
                                  fontWeight: '400',
                                  '&:hover': {
                                    color: 'secondary.main',
                                  },
                                }}
                              >
                                STAY
                              </Typography>

                              <ChevronDownIcon
                                className={`h-5 w-5 group-hover:text-[#51BAB3]
                                  ${
                                    open ? 'text-[#E088A8]' : 'text-[#51BAB3]'
                                  }`}
                                aria-hidden="true"
                              />
                            </Popover.Button>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute left-1/2 z-10 ml-0 mt-3 w-screen max-w-[200px]  -translate-x-1/2 transform px-0">
                                <div className="overflow-hidden  shadow-lg ring-1 ring-[#E088A8] ring-opacity-5">
                                  <div className="relative grid gap-6 bg-[#51BAB3] py-2 sm:gap-8 sm:p-8">
                                    {stay.map((item) => (
                                      <Link href={item?.href} key={item?.name}>
                                        <span className="-m-3 flex cursor-pointer items-start   p-2 hover:bg-[#E088A8]">
                                          <div className="ml-4">
                                            <Typography
                                              variant="body2"
                                              color="white"
                                              sx={{ fontSize: '1.2rem' }}
                                            >
                                              {item.name}
                                            </Typography>
                                          </div>
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={`bg-teal group inline-flex items-center rounded-md  text-lg hover:text-[#E088A8] focus:outline-none focus:ring-2 focus:ring-[#51BAB3] focus:ring-offset-2 sm:text-xl
                                ${open ? 'text-[#51BAB3]' : 'text-[#51BAB3]'}`}
                            >
                              <Typography
                                color={`${
                                  currentPath !== 'play'
                                    ? 'primary'
                                    : 'secondary'
                                }`}
                                variant="h5"
                                align="center"
                                sx={{
                                  fontWeight: '400',
                                  '&:hover': {
                                    color: 'secondary.main',
                                  },
                                }}
                              >
                                PLAY
                              </Typography>

                              <ChevronDownIcon
                                className={`h-5 w-5 group-hover:text-[#E088A8]
                                  ${open ? 'text-[#E088A8]' : 'text-[#51BAB3]'}
                                  
                                `}
                                aria-hidden="true"
                              />
                            </Popover.Button>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute left-1/2 z-10 ml-0 mt-3 w-screen max-w-[200px]  -translate-x-1/2 transform px-0">
                                <div className="ring-black overflow-hidden  shadow-lg ring-1 ring-opacity-5">
                                  <div className="relative grid gap-6 bg-[#51BAB3] py-2  sm:gap-8 sm:p-3">
                                    {play.map((item) => (
                                      <Link key={item?.name} href={item?.href}>
                                        <span className="-m-3 flex cursor-pointer items-start  p-2 hover:bg-[#E088A8]">
                                          <div className="ml-4">
                                            <Typography
                                              variant="body2"
                                              color="white"
                                              sx={{ fontSize: '1.2rem' }}
                                            >
                                              {item.name}
                                            </Typography>
                                          </div>
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>

                      <Link href="/eat">
                        <Typography
                          color={`${
                            currentPath !== 'eat' ? 'primary' : 'secondary'
                          }`}
                          align="center"
                          variant="h5"
                          sx={{
                            fontWeight: '400',
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          EAT
                        </Typography>
                      </Link>
                      <Link href="/spa">
                        <Typography
                          color={`${
                            currentPath !== 'spa' ? 'primary' : 'secondary'
                          }`}
                          align="center"
                          variant="h5"
                          sx={{
                            fontWeight: '400',
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          SPA
                        </Typography>
                      </Link>

                      <Link href="/weddings">
                        <Typography
                          color={`${
                            currentPath !== 'weddings' ? 'primary' : 'secondary'
                          }`}
                          variant="h5"
                          align="center"
                          sx={{
                            fontWeight: '400',
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          EVENTS
                        </Typography>
                      </Link>

                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={`bg-white group inline-flex items-center rounded-md  text-lg hover:text-[#E088A8] focus:outline-none focus:ring-2 focus:ring-[#51BAB3] focus:ring-offset-2 sm:text-xl
                                ${open ? 'text-[#E088A8]' : 'text-[#51BAB3]'}`}
                            >
                              <Typography
                                color={`${
                                  currentPath !== 'about-us'
                                    ? 'primary'
                                    : 'secondary'
                                }`}
                                variant="h5"
                                align="center"
                                sx={{
                                  fontWeight: '400',
                                  '&:hover': {
                                    color: 'secondary.main',
                                  },
                                }}
                              >
                                ABOUT US
                              </Typography>
                              <ChevronDownIcon
                                className={`${
                                  open ? 'text-[#E088A8]' : 'text-[#51BAB3]'
                                } h-5 w-5 group-hover:text-[#51BAB3]`}
                                aria-hidden="true"
                              />
                            </Popover.Button>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute left-1/2 z-10 ml-0 mt-3 w-screen max-w-[200px]  -translate-x-1/2 transform px-0">
                                <div className="ring-black overflow-hidden  shadow-lg ring-1 ring-opacity-5">
                                  <div className="relative grid gap-6 bg-[#51BAB3] py-2 sm:gap-8 sm:p-8">
                                    {aboutus.map((item) => (
                                      <Link key={item.name} href={item.href}>
                                        <span className="-m-3 flex cursor-pointer items-start  p-2 hover:bg-[#E088A8]">
                                          <div className="ml-4">
                                            <Typography
                                              variant="body2"
                                              color="white"
                                              sx={{ fontSize: '1.2rem' }}
                                            >
                                              {item.name}
                                            </Typography>
                                          </div>
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    </Popover.Group>
                    <div className="mt-6 md:hidden lg:w-0">
                      <Button
                        href="https://reservations.verticalbooking.com/premium/index.html?id_albergo=25597&dc=7652&lingua_int=usa&id_stile=19482&_ga=2.54452782.700408746.1679685400-401113273.1672706732"
                        disableElevation
                        variant="contained"
                        color="secondary"
                        sx={{
                          borderRadius: '25px',
                          fontWeight: 'bold',
                          border: '2px solid transparent',
                          color: 'white',
                          '&:hover': {
                            color: 'white',
                            backgroundColor: 'secondary',
                          },
                        }}
                      >
                        Book A ROOM
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

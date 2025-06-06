import { Box, Theme, useMediaQuery } from '@mui/material'
import React from 'react'

import Image from 'next/image'
import { spaMenuMay2024 } from '@/components/features/data'
import Layout from '@/components/layout/Layout'
import PageContainer from '@/components/PageContainer'
import Title from '@/components/text/Title'
import SkylarkDivider from '@/components/features/SkylarkDivider'

export default function menu() {
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const lastMenu = spaMenuMay2024[spaMenuMay2024.length - 1]
  const firstMenu = spaMenuMay2024[0]
  const lastIndexOfMenu = spaMenuMay2024.length - 1
  const spaMenuNoFirstAndLast = spaMenuMay2024.slice(1, lastIndexOfMenu)
  return (
    <Layout title="Skylark Spa Menu">
      <PageContainer>
        <Title center uppercase>
          Spa Menu
        </Title>
        <Box maxWidth={400} mx="auto" paddingBottom={3}>
          <SkylarkDivider />
        </Box>
        <Box className="mx-auto grid max-w-screen-lg grid-cols-1 md:grid-cols-2">
          {mobile && (
            <Image
              src={firstMenu.src}
              alt="Spa"
              layout="responsive"
              width={800}
              height={1218}
              quality={100}
            />
          )}
          {spaMenuNoFirstAndLast?.map((item: any, i: number) => (
            <Image
              src={item.src}
              alt={item.name}
              layout="responsive"
              width={800}
              height={1218}
              quality={100}
            />
          ))}
          {mobile && (
            <Image
              src={lastMenu.src}
              alt="Spa"
              layout="responsive"
              width={800}
              height={1218}
              quality={100}
            />
          )}
        </Box>

        {/* <Grid
            container
            columnSpacing={2}
            rowSpacing={2}
            justifyContent="center"
            maxWidth="lg"
          >
            {spaMenuBath?.map((item) => (
              <Grid item xs={12} md={6}>
                <img
                  src={item.src}
                  alt={item.name}
                  className="mx-auto h-auto max-w-full rounded-lg"
                />
              </Grid>
            ))}
          </Grid> */}
      </PageContainer>
    </Layout>
  )
}

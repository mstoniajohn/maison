import { Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {
  weekDay: string

  activities: any
}

const ActivityDay = ({ weekDay, activities }: Props) => {
  return (
    <Stack>
      <Typography variant="h2" align="center">
        {weekDay}
      </Typography>
      <Stack rowGap={0.5}>
        {activities?.map(
          ({
            time = null,
            content,
          }: {
            time?: string | null
            content: any
          }) => {
            return (
              <Stack direction={'row'} columnGap={1}>
                {time && <ActivityTime time={time} />}
                {content}
              </Stack>
            )
          }
        )}
      </Stack>
    </Stack>
  )
}

export default ActivityDay

export function ActivityTime({ time }: { time: string }) {
  const separate = time.includes('&')
  let one
  let two
  if (separate) {
    ;[one, two] = time.split('&')
  }
  return (
    <Typography fontWeight={700} paddingBottom={0}>
      {separate ? (
        <>
          {one}
          <br />& {two}
        </>
      ) : (
        time
      )}
    </Typography>
  )
}

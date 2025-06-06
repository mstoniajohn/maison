import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AppBar, Button } from '@mui/material'


import { useTheme } from '@mui/material/styles'
import { border, borderBottom, borderColor, margin } from '@mui/system'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography className="font-sans text-gray-100">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export default function TabMenus() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  // ***********************
  const theme = useTheme()

  const handleChangeIndex = (index) => {
    setValue(index)
  }
  return (
    <Box className='w-full mx-auto'>
      <Box
      sx={{
        display:{md:'flex', xs:'block'},
        margin: '0 auto',
        justifyContent:'center',
        alignItems:'center',
        maxWidth:'790px',
        borderBottom:'1px',
        borderColor:'primary.main'
      }}
      
        // className="md:flex block mx-auto items-center justify-center max-w-md borber-b"
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ margin: '0 auto' }}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab
              sx={{ color: 'white', fontFamily:['"mostra-nuova"', 'sans-serif'].join(','), }}
              label="Dinner"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ color: 'white', fontFamily: ['"mostra-nuova"', 'sans-serif'].join(','), }}
              label="Lunch"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ color: 'white', fontFamily:['"mostra-nuova"', 'sans-serif'].join(',') }}
              label="Breakfast"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ color: 'white', fontFamily:['"mostra-nuova"', 'sans-serif'].join(','),}}
              label="Vegetarian"
              {...a11yProps(3)}
            />
            <Tab
              sx={{ color: 'white', fontFamily:['"mostra-nuova"', 'sans-serif'].join(','), }}
              label="Kids"
              {...a11yProps(4)}
            />
          </Tabs>
        </AppBar>
        <Button variant="contained">Make A Reservation</Button>
      </Box>
      <TabPanel sx={{color:'white'}}  value={value} index={0}>
        Dinner
      </TabPanel>
      <TabPanel sx={{color:'white'}} value={value} index={1}>
        Lunch
      </TabPanel>
      <TabPanel c sx={{color:'white'}} value={value} index={2}>
        Breakfast
      </TabPanel>
      <TabPanel  sx={{color:'white'}}  value={value} index={3}>
        Vegetarian
      </TabPanel>
      <TabPanel  sx={{color:'white'}}  value={value} index={4}>
        Kids
      </TabPanel>
      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      {/* </SwipeableViews> */}
    </Box>
  )
}

import React from 'react'
import { useStyles } from './homepageStyles'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Dashboard } from '../../components/dashboard/Dashboard'
import { Box } from '@mui/material'

const Homepage = () => {
  const classes = useStyles()
  return (
    <>
      <Box component="section" className={classes.homepageContainer}>
        <Box component="article" className={classes.sidebarSection}>
          <Sidebar />
        </Box>
        <Box component="article" className={classes.dashboardSection}>
          <Dashboard />
        </Box>
      </Box>
    </>
  )
}

export default Homepage
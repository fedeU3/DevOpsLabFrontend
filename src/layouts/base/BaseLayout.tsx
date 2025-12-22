
import React from 'react'
import NavBar from '../components/AppBar'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router'

type BaseLayoutProps = {
  children: React.ReactNode,
  currentPage: string,
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children, currentPage}) => {
  const navigate = useNavigate();
  const goTo = (url: string)=> () => {
    navigate(url);
  }
  return (
    <>
      <NavBar currentPage={currentPage} goTo={goTo} />
      <Box sx={{ paddingTop: '65px' }}>
        {children}
      </Box>
    </>
  )
}

export default BaseLayout
import React from 'react'
import { Box ,Stack,Typography ,Button } from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png";


function HeroBanner() {
  return (
    <Box sx={{
        mt:{lg:'212px',xs:'70px'},
        ml:{sm:'50px'}
    }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography  fontWeight='700' mb='23px' mt='30px' sx={{fontSize:{lg:"44px" ,sm :"40px"}}}>
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography lineHeight='35px' mb={4} fontSize='22px'>
            check  out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises' >
            Explore Exercises
        </Button>
        <Typography color='#ff2625' fontWeight='600' sx={{opacity:0.1,
        display:{lg:'block',xs:'none'}}} fontSize='200px'>
            check  out the most effective exercises
        </Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner

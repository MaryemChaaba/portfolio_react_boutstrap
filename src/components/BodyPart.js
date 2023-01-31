import React from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
import { Box } from '@mui/system'

function BodyPart({item }) {
  return (
    <Stack type="button" alignItems='center' justifyContent='center' className='bodyPart-card'
    sx={{borderTop:'4px solid #ff2625' ,width:'270px' ,height:'288px',cursor:'pointer',gap:'47px'}} 
    >
     <img src={Icon} alt="icon"  style={{width:'40px',height:'40px'}} />
     <Typography fontSize='24px' fontWeight='bolsd' color='#3A1212' textTransform="capitalize">{item}</Typography>

    </Stack>
  )
}

export default BodyPart
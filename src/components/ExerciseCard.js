import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Stack,Typography } from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png";

function ExerciseCard({item}) {
  return (
    <Link to='/exercise/1' className='exercise-card'>
      <img src={HeroBannerImage} alt="" loading="lazy"/>
      <Stack direction='row'>
      <Button sx={{ml:'21px',color:'#fff',background:'#ffa9a9',fontSize:'14px',borderRadius:"20px",textTransform:'capitalize'}}>{item}</Button>
      <Button sx={{ml:'21px',color:'#fff',background:'#fcc757',fontSize:'14px',borderRadius:"20px",textTransform:'capitalize'}}>{item}</Button>

      </Stack>
      <Typography ml="31px" color="#000" fontWeight="bold" mt="11px" pb="10px" 
      fontSize="24px"
      textTransform="capitalize">
        {item}
      </Typography>
    </Link> 
  )
}

export default ExerciseCard
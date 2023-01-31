import React from 'react'
import { Box,Stack,Typography } from '@mui/material'

function ExercisesVideo({exercisesVideo,name}) {
  console.log(exercisesVideo);
  return (
    <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p='20px'>
      <Typography variant='h4' mb='33px'>
          Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercises
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{flexDirection:{lg:'row'},
      gap:{lg:'110px',xs:'0'}}}>
          
      </Stack>

    </Box>
  )
}

export default ExercisesVideo
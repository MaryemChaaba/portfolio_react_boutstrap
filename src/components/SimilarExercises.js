import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorisontalScrollBar from './HorisontalScrollBar'
import Loader from './Loader'

function SimilarExercises({similarExercises}) {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography varient='h3'>Exercises that target the same muscale groupe</Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        <HorisontalScrollBar data={["sqd","dsf",'dfds','fdsf']}></HorisontalScrollBar>
        <Loader></Loader>
      </Stack>
    </Box>
  )
}

export default SimilarExercises
import React ,{useState,useEffect} from 'react'
import { Pagination,Box,Stack,Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'

const exercises=['fdsqf','fdsqg','yjht','dsd',"zeze","dsds"]

function Exercises() {
  return (
    <Box id="exercices" 
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p="20px"
    >
      <Typography variant='h3' mb='46px'>Showing results</Typography>
      <Stack direction='row' xs={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center"
      
      >
        {exercises.map(item=>(
          <ExerciseCard item={item} key={item}/>
        ))}

      </Stack>
      <Stack mt="100px" alignItems='center'>
        <Pagination color='standard' shape='rounded'></Pagination>
      </Stack>

    </Box> 
  )
}

export default Exercises

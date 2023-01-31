import React ,{useEffect,useState} from 'react'
import { Box,Button,Stack,TextField,Typography } from "@mui/material";
import { NoEncryption } from '@mui/icons-material';
import {options,fetchData} from '../utils/fetchData'
import HorisontalScrollBar from "./HorisontalScrollBar"
function SearchExercises() {
  const [search, setSearch] = useState('')
  const handleSearch =async ()=>{
    if(search){
      const exerciseData= await fetchData('https://worldwide-restaurants.p.rapidapi.com/search',options);
      console.log(exerciseData);
    }

  }
  return (
    <Stack alignItems='center' mt='37px' justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{fontSize:{lg:"44px",xs:"30px"}}} mb='50px' textAlign='center'>
          Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position="relative" mb="72px">
          <TextField height="76px"  placeholder="Search Exercises" type='text'
          sx={{
            input: {fontWeight:700,
                    border:'none',
                    borderRadius:'4px'
                  },
            width:{
                  lg:'1170px',
                  xs:"350px"
            },
            backgroundColor:'#ffffff',
            borderRadius:"40px"
          }}  value={search} onChange={(e)=>setSearch(e.target.value)}
          ></TextField>
          <Button className='search-btn' sx={{
            bgcolor:'#ff2625',
            color:'#fff',
            textTransform:'none',
            width:{lg:'175px',xs:'80px'},
            fontSize:{lg:'20px',xs:'14px'},
            height:'56px',
            position:'absolute'
          }} 
          onClick={handleSearch}>Search</Button>
        </Box>
        <Box xs={{
          position:'relative',
          width:'100%',
          p:'20px'
        }}>
          <HorisontalScrollBar data={["fff","dsff","rezr",'fdsqf',"dsfq","dskuytkff","pp",'x',]}/>

        </Box>
    </Stack>
  )
}

export default SearchExercises

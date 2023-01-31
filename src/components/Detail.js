import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

function Detail({exerciseDetail}) {
  const {name,text,img}=exerciseDetail
  const extraDetail=[{
    icon:BodyPartImage,
    name:'BodyPart'
  },
  {
    icon:TargetImage,
    name:'Target'
  },
  {
    icon:EquipmentImage,
    name:'Equipment'
  }]

  return (
    <Stack gap ='60px' sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
      <img src={img} alt="" loading='lazy' className='detail-image'/>
      <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
        <Typography variant='h3'>{name}</Typography>
        <Typography variant='h6'>{name} ok ok {text}</Typography>
        {extraDetail.map(item=>(
          <Stack Key={item.name} direction='row' gap="24px" alignItems="center">
              <Button sx={{background:'#fff2db',borderRadius:'50%',width:'100px',height:'100px'}}>
                <img src={item.icon} alt="" style={{width:'50px',height:'50px'}} />
              </Button>
              <Typography textTransform='capitalize' variant='h5'>
                {item.name}
              </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail
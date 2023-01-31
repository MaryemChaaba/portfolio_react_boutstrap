import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

function HorisontalScrollBar({data}) {
 
  return (
    <ScrollMenu  >
     { data.map(item=>(
        <Box 
        key={item}
        itemID={item}
        title={item}
        m='0 40px'
        >
            <BodyPart item={item} />
        </Box>
     ))}
    </ScrollMenu>
  )
  
}

export default HorisontalScrollBar

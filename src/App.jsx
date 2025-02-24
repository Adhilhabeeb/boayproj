import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Canvas from './Canvas'
import { Button, Chip, Divider, Stack, styled, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from './shader/header/header'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import house from "../public/smo.gif"
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import { red } from '@mui/material/colors'
import Main from './mainp/main'
import Footer from './footer/Footer'
import { useNavigate } from 'react-router-dom'
function App() {
let navigate=useNavigate()
  let   Contactbtn =styled("button")(({theme})=>({
    color:theme.palette.othercolor.black,
                  fontFamily:theme.palette.othercolor.gemfamily,
                  borderRadius:"20px",width:"200px",
                  height:"5vh",minHeight:"20px",
                  backgroundColor: theme.palette.othercolor.bfclr
                    }))
  let   Typologo =styled(Typography)(({theme})=>({
  
    fontFamily:theme.palette.othercolor.fontfamiily
    
    
      }))
      let   Typogem =styled(Typography)(({theme})=>({
  
        fontFamily:theme.palette.othercolor.gemfamily
        
        
          }))
          let   Typogem2 =styled(Typography)(({theme})=>({
  
            fontFamily:theme.palette.othercolor.shadfont
            
            
              }))
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
 
  const [count, setCount] = useState(0)

  return (
<div>


<Box className='houm '  bgcolor={"transparent"}  height={{xs:"100vh",md:"90vh"}}>



<Grid  container spacing={0}  >
  <Grid item xs={12} md={6} >
<Box>
<Typologo variant="h3" component="h2" mt={2} ml={2}>

  About us 
</Typologo>

<Typogem    variant="p" component="h2" ml={3}>
At Floating Oil Skimmer RC Drone, we are dedicated to developing innovative solutions for environmental protection. Our mission is to combat oil spills efficiently using advanced robotics and smart technology.
</Typogem>
</Box>
  </Grid>
  <Grid item xs={12}   md={6}>
  <Box>
  <Typogem    variant="p"  component="h1" sx={{float:"right"}} ml={3} mr={3}>
 Oil Skimming Floating  Rc Drone  
</Typogem><br></br>
<Typogem2    variant="p" component="h1" sx={{float:"right"}} ml={3} mr={2}>
  <OilBarrelIcon  sx={{ color: red[500] }}/> Oil skimming System 
</Typogem2>

  </Box>
  </Grid>
  
</Grid>
</Box>
{/* <Box
  component="img"
  height={{xs:"100vh",md:"90vh"}} width={"100%"}
  alt="The house from the offer."
  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
/> */}


<Box   className="bg"   width={"100%"}>
<Main/>
<Box    padding={3}  m={2} border={"1px solid grey"} borderRadius={"8px"} >


        <Typogem2 variant='h2' component={"h6"}>


          Our  Vision 
        </Typogem2>
        <Divider color={"black"}/>

         <Typogem     variant='h4'  component={"p"}  color='black'>
         Our vision is to revolutionize oil spill response with swarm technology, where multiple drone skimmers can work together for large-scale oil recovery. We aim to enhance the durability, efficiency, and autonomy of our system, making it a practical, deployable, and sustainable solution for environmental conservation.

         </Typogem>

       
         

</Box>


<Stack  m={2}  borderRadius={"8px"} direction={{ xs: 'column', sm: 'row' }}   paddingLeft={{xs:0,md:4}} paddingRight={{xs:0,md:4}} border={"1px solid black"}
  spacing={{ xs: 1, sm: 2, md: 2 }}>


<Box    width={"100%"}  p={1} >

<Typogem  variant='h3' component={"p"}>

    Our Works
</Typogem>

<Typogem   variant='h4'  component={"p"} >
At Floating Oil Skimmer RC Drone, we are committed to developing innovative and sustainable solutions for tackling oil spills and ensuring water quality monitoring. Our work revolves around creating cutting-edge technology that enhances environmental protection and promotes efficient oil recovery.
</Typogem>
<br></br>
<Box sx={{display:"flex"}}>

<Typogem2  variant='h3' component={"p"}>

  To Contact Us -->  
</Typogem2>
<Contactbtn  onClick={()=>{
  navigate("Contact")
}}   sx={{fontSize:"large",
   '&:hover': {

    backgroundColor: `othercolor.black`,color:`othercolor.btnwhite`

  }
}}>
    Contact Us 
</Contactbtn>
</Box>
</Box>


      </Stack>


</Box>



</div>
  )
}

export default App

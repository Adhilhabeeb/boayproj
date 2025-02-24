// import { Box, Button, Divider, Stack, styled, Typography ,Grid} from '@mui/material'
// import React from 'react'
// import { NavLink } from 'react-router-dom';

// function Footer() {
//     const pages = ['Home', 'Contact', 'Works'];

//     let   Typogem =styled(Typography)(({theme})=>({
      
//         fontFamily:theme.palette.othercolor.gemfamily
        
        
//           }))
//           let   Typogem2 =styled(Typography)(({theme})=>({
  
//             fontFamily:theme.palette.othercolor.shadfont
            
            
//               }))
//               let   Contactbtn =styled("button")(({theme})=>({
//   color:theme.palette.othercolor.black,
//                 fontFamily:theme.palette.othercolor.gemfamily,
//                 borderRadius:"20px",width:"200px"
                
                
//                   }))
//   return (
//     <div>
//        <Divider/>
//       <Stack  m={2}  borderRadius={"8px"} direction={{ xs: 'column', sm: 'row' }}   paddingLeft={{xs:0,md:4}} paddingRight={{xs:0,md:4}} border={"1px solid black"}
//   spacing={{ xs: 1, sm: 2, md: 2 }}>


// <Box width={"90%"} height={{xs:"auto",md:"40vh",lg:"30vh"}}  >

// <Typogem2 variant='h4'  textOverflow={"clip"} component={"h3"}>

// Floating Oil Skimmer RC Drone

// </Typogem2>

// <Typogem2 variant='h6'  component={"p"}>

// "An advanced and eco-friendly solution for efficient oil spill cleanup and real-time water quality monitoring, ensuring a cleaner and safer marine environment.

// </Typogem2>

// </Box>
// <Box  width={"90%"} height={"30vh"} display={"flex"} justifyContent={"center"} >

// <ul style={{listStyle:"none"}}>
//         <li>

//             <Typogem variant='h4'>
// Quicklinks
//             </Typogem>
//             <br></br>
           
//             {pages.map(d=>(
// //              
// d =="Home"?<NavLink to={"/"}>
//    <li >
//                    <Typogem variant='h6'> {d}
//          </Typogem>
//                 </li>
// </NavLink>:<NavLink  to={d} >
// <li >
//                    <Typogem variant='h6'> {d}
//          </Typogem>
//                 </li>

// </NavLink>
      


//             ))}
//         </li>
//     </ul>
// </Box>
// <Box  width={"90%"} height={"30vh"}   display={"flex"} justifyContent={"center"}  >
// <Grid item xs={12} sm={4}>
// <Typogem variant='h4'>
//               Contact Us
//             </Typogem>
//             <Typography variant="body2">📧 Email: info@oilscraper.com</Typography>
//             <Typography variant="body2">📞 Phone: +1 (123) 456-7890</Typography>
//           </Grid>
      

//         {/* Copyright Section */}
       
// </Box>


//       </Stack>
//       <Divider/>
//       <Box sx={{ textAlign: "center", mt: 3 }}>
//           <Typography variant="body2">
//             © {new Date().getFullYear()} Floating Oil Skimmer RC Drone. All rights reserved.
//           </Typography>
//         </Box>
//     </div>
//   )
// }

// export default Footer





import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import { useNavigate, useSearchParams } from 'react-router-dom';
 import  {useState,useEffect} from "react"

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://mui.com/">
        Sitemark
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {



useEffect(() => {
 
}, [])

  const [emailv, setemailv] = useState("")

 useEffect(() => {
console.log(emailv,"kkk")
 }, [emailv])
 
  let   [spara,setspara]=useSearchParams()
    let navigate=useNavigate()

  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
          
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 2 }}
              >
                Join the newsletter
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Subscribe for weekly updates. No spams ever!
              </Typography>
              <InputLabel htmlFor="email-newsletter">Email</InputLabel>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField

                  onChange={(e)=>{
                    setemailv(e.target.value)
                  }}
                  id="email-newsletter"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  value={emailv}
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': 'Enter your email address',
                    },
                  }}
                  sx={{ width: '250px' }}
                />
                <Button  onClick={()=>{
                  setspara({class:emailv})
                   navigate("Contact")
                }}
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                >
                 Contact
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Product
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Features
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Testimonials
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Highlights
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Pricing
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              FAQs
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Company
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              About us
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Careers
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Press
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Legal
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Terms
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Privacy
            </Link>
            <Link color="text.secondary" variant="body2" href="#">
              Contact
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            <Link color="text.secondary" variant="body2" href="#">
              Privacy Policy
            </Link>
            <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Terms of Service
            </Link>
            <Copyright />
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/mui"
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://x.com/MaterialUI"
              aria-label="X"
              sx={{ alignSelf: 'center' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.linkedin.com/company/mui/"
              aria-label="LinkedIn"
              sx={{ alignSelf: 'center' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
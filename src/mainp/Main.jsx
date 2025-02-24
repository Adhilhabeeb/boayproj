// import React, { useEffect } from 'react'
// import Grid from '@mui/material/Grid';
// import { Box, Divider } from '@mui/material';
// import { datagrid } from '../utils/data';
// import { Button, Stack, styled, Typography } from '@mui/material'
// import { DeviceThermostat, OilBarrel, Opacity, Science } from '@mui/icons-material';

// function Main() {

//   let   Contactbtn =styled("button")(({theme})=>({
//     color:theme.palette.othercolor.black,
//                   fontFamily:theme.palette.othercolor.gemfamily,
//                   borderRadius:"20px",width:"200px"
                  
                  
//                     }))
//     let   Typologo =styled(Typography)(({theme})=>({
  
//         fontFamily:theme.palette.othercolor.fontfamiily
        
        
//           }))
//           let icons=[<Box
//             component="img"
//             sx={{
//              display:"block",marginLeft:"auto",marginRight:"auto",
            
//               maxHeight: { xs: 233, md: 167 },
//               maxWidth: { xs: 350, md: 250 },
//             }}
//             alt="The house from the offer."
//             src={"../../public/skimming.PNG"}
//           />,
        
//           <Box
//           component="img"
//           sx={{
//            display:"block",marginLeft:"auto",marginRight:"auto",
          
//             maxHeight: { xs: 233, md: 167 },
//             maxWidth: { xs: 350, md: 250 },
//           }}
//           alt="The house from the offer."
//           src={"../../public/ph.PNG"}
//         />,
//         <Box
//         component="img"
//         sx={{
//          display:"block",marginLeft:"auto",marginRight:"auto",
        
//           maxHeight: { xs: 233, md: 167 },
//           maxWidth: { xs: 350, md: 250 },
//         }}
//         alt="The house from the offer."
//         src={"../../public/tds.PNG"}
//       />,
//       <Box
//       component="img"
//       sx={{
//        display:"block",marginLeft:"auto",marginRight:"auto",
      
//         maxHeight: { xs: 233, md: 167 },
//         maxWidth: { xs: 350, md: 250 },
//       }}
//       alt="The house from the offer."
//       src={"../../public/temp.PNG"}
//     />]
//           let   Typogem =styled(Typography)(({theme})=>({
      
//             fontFamily:theme.palette.othercolor.gemfamily
            
            
//               }))
//               let   Typogem2 =styled(Typography)(({theme})=>({
      
//                 fontFamily:theme.palette.othercolor.shadfont
                
                
//                   }))
    
//   return (
//     <div className='bg'>
//       <Box sx={{ flexGrow: 1, } }mt={-23}    >
//       <Grid container spacing={2} padding={3} >
//       {datagrid.sections.map((item, index) => (
//             <Grid item xs={12} md={6} lg={3} key={index}>
//              <Box width={"85%"} height={{ md: "40vh" }}   sx={{borderRadius:"8px",border:"0.5px solid black"}}padding={2} >
// {icons[index]}
        
// <Divider/>


//   <Typogem   variant="p" component="h2">{item.title}</Typogem>
//   <Typogem2 variant="h6" component="p" >{item.subtitle}</Typogem2>
// </Box>


//             </Grid>
//           ))}
//       </Grid>
//     </Box>
   
//     {/* <Stack     direction={{ xs: 'column', sm: 'row' }}   paddingLeft={{xs:0,md:4}} paddingRight={{xs:0,md:4}}
//   spacing={{ xs: 1, sm: 2, md: 2 }}>

//    { datagrid.sections.map((item, index) => ( 

// <Box width={"30%"} height={{ md: "40vh" }}   sx={{borderRadius:"8px",border:"0.5px solid black"}}padding={2} >
// {icons[index]}
        
// <Divider/>


//   <Typogem   variant="p" component="h2">{item.title}</Typogem>
//   <Typogem2 variant="h6" component="p" >{item.subtitle}</Typogem2>
// </Box>


//    ))}

//     </Stack> */}
    
      
//     </div>
//   )
// }

// export default Main


import React from "react";
import { Box, Divider, Typography, styled } from "@mui/material";
import { datagrid } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Main() {
  let Typogem = styled(Typography)(({ theme }) => ({
    fontFamily: theme.palette.othercolor.gemfamily,
  }));

  let Typogem2 = styled(Typography)(({ theme }) => ({
    fontFamily: theme.palette.othercolor.shadfont,
  }));

  let icons = [
    "../../public/skimming.PNG",
    "../../public/ph.PNG",
    "../../public/tds.PNG",
    "../../public/temp.PNG",
  ];

  return (
    <div className="bg">
      <Box sx={{ flexGrow: 1 }} mt={-23}>
        <Swiper
          modules={[ Autoplay]}
          slidesPerView={1} // Adjust for different screen sizes
          spaceBetween={20}
          loop={true}
         
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {datagrid.sections.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                width={"85%"}
                height={{ md: "40vh" }}
                sx={{ borderRadius: "8px", border: "0.5px solid black" }}
                padding={2}
              >
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="Slide Image"
                  src={icons[index]}
                />
                <Divider />
                <Typogem variant="p" component="h2">
                  {item.title}
                </Typogem>
                <Typogem2 variant="h6" component="p">
                  {item.subtitle}
                </Typogem2>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
}

export default Main;

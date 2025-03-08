import { useContext, useRef, useState ,useEffect} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import "../header/header.css"

import { Button, Link, Stack, styled, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { ourcontext } from '../../Rotersetup';

function Header(props) {

      const {user,setuser,admin} = useContext(ourcontext);


    let ancorrf=useRef(document.querySelector(".menuicon"))
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
  
      
      let   Contactbtn =styled("button")(({theme})=>({
        color:theme.palette.othercolor.black,
                      fontFamily:theme.palette.othercolor.gemfamily,
                      borderRadius:"20px",width:"200px",
                      height:"5vh",minHeight:"20px",
                      backgroundColor: theme.palette.othercolor.bfclr
                        }))
    
     
      const handleClose = (event) => {
        if (ancorrf.current && ancorrf.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };
      let navigate=useNavigate()
    
const [menub, setmenub] = useState(false)
  let   Greenbutton =styled(Button)(({theme})=>({

    color:theme.palette.othercolor.black,
    "&:hover":{
      color:theme.palette.othercolor.main,

       
    },fontFamily:theme.palette.othercolor.fontfamiily
    
    
      }))
  
  
      let   Typologo =styled(Typography)(({theme})=>({
  
        fontFamily:theme.palette.othercolor.fontfamiily,
        
        color:theme.palette.othercolor.black
        
          }))
      
          let   Navlinkll =styled(Link)(({theme})=>({
  
           color:theme.palette.othercolor.black
            
            
              }))
 

              function handinout(e) {
              if (user) {
                setuser(false)

                localStorage.removeItem("userboat")


                navigate("/")
              }
                
              }
  const [count, setCount] = useState(0)
  return (
    <>

 
<Stack sx={{ flexGrow: 1, }}      >
      <AppBar position="static" className='headerclr' >
        <Toolbar  >
        <Typologo
            variant="h5"
           
            component="h2"
           
            sx={{
              mr: 2,
              display: { md: 'flex' },
              
              fontWeight: 700,
              letterSpacing: '.3rem',
           
              textDecoration: 'none',
            }}
          >
         AUTO SKIMBOT



          </Typologo>
        
        <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:"end" ,paddingRight:"2rem",gap:"4%"}}  >
            {props.pages.map((page) => (
              
          //   <Button  
          //   key={page}
          //   className="fonti"
          //   sx={{ fontFamily: '"Shafarik"', color: 'white', display: 'block',fontWeight: 400,fontStyle: "normal" }}
          // >
          //   {page}
          // </Button>
          
<Greenbutton  key={page}>
{page =="Home"?<NavLink to={"/"}>
<Navlinkll  underline="none">
        {page}
      </Navlinkll>
</NavLink>:   user&&<NavLink  to={page} >
<Navlinkll  underline="none">
        {page}
      </Navlinkll>

</NavLink>
      
      
      }
     
</Greenbutton>
              
            ))}



             <Contactbtn  onClick={handinout}
             sx={{fontSize:"large",
              '&:hover': {
           
               backgroundColor: `othercolor.black`,color:`othercolor.btnwhite`
           
             }
           }}>
       {user?"Signout":"Sign in"}
      </Contactbtn>
          </Box>
          <Box sx={{display:{xs:"flex",md:"none"}} }  width={"100%"}    >

<MenuIcon onClick={handleToggle}  className='menuicon' ref={ancorrf}  sx={{display:"block",marginLeft:"auto", color: 'othercolor.black'}} />
<Menu
        anchorEl={document.querySelector(".menuicon")}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {width:"300px",
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
     
     {props.pages.map((m)=>{

      
return   <MenuItem onClick={handleClose} key={m}>
< Typologo  >

    {m =="Home"?
    
    <NavLink to={"/"}>


    

      <Navlinkll  underline="none">
        {m}
      </Navlinkll>
    </NavLink>
    
    
      
      
      
      
      
      :
      user&&<NavLink  to={m} >




<Navlinkll  underline="none">
        {m}
      </Navlinkll>
      </NavLink>
      
      }
</Typologo>
</MenuItem>
       
     })}
        
      <MenuItem>
      <Button  onClick={handinout}>
       {user?"Signout":"Sign in"}
      </Button></MenuItem>
     
      </Menu>
</Box>
        </Toolbar>
      </AppBar>
    </Stack>
   
    </>
  )
}

export default Header

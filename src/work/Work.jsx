import { Box ,CircularProgress,styled,TextField} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Grid, Avatar } from "@mui/material";
import { addDoc, collection, serverTimestamp , query,
  orderBy,
  onSnapshot,
  limit, } from "firebase/firestore";
import { db } from '../Firebase';

function Work() {
  let loalength="loading"
let nameloading="hj"

let   Typologo =styled(Typography)(({theme})=>({
  
  fontFamily:theme.palette.othercolor.fontfamiily
  
  
    }))

const [fetchedarray, setfetchedarray] = useState([])
const [loadtext, setloadtext] = useState("")
useEffect(() => {
  const q = query(
    collection(db, "works"),
    orderBy("createdAt", "desc"),
    limit(50)
  );
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    const fetchedMessages = [];
    QuerySnapshot.forEach((doc) => {
      fetchedMessages.push({ ...doc.data(), id: doc.id });
    });

    const sortedMessages = fetchedMessages.sort(
      (a, b) => a.createdAt - b.createdAt
    );
    console.log(sortedMessages,"ff")
setfetchedarray(sortedMessages)

  });



  
  // return () => unsubscribe;
}, []);


let   Typogem2 =styled(Typography)(({theme})=>({
  
  fontFamily:theme.palette.othercolor.shadfont
  
  
    }))


const formatDate = (timestamp) => {
  if (!timestamp?.seconds) return "Unknown Date";
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleString(); // Converts to readable format
};
  return (
    <div  style={{display:"flex",justifyContent:"center"}} >
 
 <Box  
      sx={{mt:5,
      
      width:"90%",
        display: "flex",
       justifyContent:"center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {   
      !fetchedarray.length?
      
      <Box   sx={{width:"100%",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>

<CircularProgress color='black'/>
        </Box>
      
      :
      
      
      fetchedarray.map((post) => 
      (
        <Card  
          key={post.id}
          sx={{background:"transparent",
            width: "100%",
            boxShadow: 2,
            borderRadius: 2,
            overflow: "hidden",
           
          }}
        >
          {/* User Info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Avatar src={post.avatar} sx={{ width: 40, height: 40, marginRight: 2 }} />
            <Typography variant="body1" fontWeight="bold">
              {post.email}
            </Typography>
          </Box>

          {/* Image */}
          <Box
            padding={4}
            sx={{
              width: "100%",minHeight:"200px",
              height: "auto",
              objectFit: "cover",
            }}
          >
        <Typogem2   variant="p" component="h2" >
          {post.text}
        </Typogem2>
          </Box>

          {/* Post Content */}
         
        </Card>
      ) )
      
      
      }
    </Box>
    </div>
  )
}

export default Work

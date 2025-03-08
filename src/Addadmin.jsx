import React, { useState ,useEffect} from 'react'
import { db } from './Firebase';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { addDoc, collection, serverTimestamp , query,
    orderBy,
    onSnapshot,
    limit, } from "firebase/firestore";

function Addadmin() {
    const [admins, setadmins] = useState([])
const [newadm, setnewadm] = useState("")
useEffect(() => {
  const q = query(
    collection(db, "admins"),
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
setadmins(sortedMessages)
   
  });
  // return () => unsubscribe;
}, []);

async    function addadmi(params) {


    let useralreadyexust=false
admins.forEach(e=>{
    if (e.text==newadm) {
        useralreadyexust=true
    }
})
   
if (useralreadyexust || !newadm.includes("@gmail.com")) {
    alert("email already exist or incorret email")
return 
}
    await addDoc(collection(db, "admins"), {
        text:newadm,
       
        createdAt: serverTimestamp(),
    
      });
}
  return (<> <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} mt={6} >
      <Stack  width={"50vw"}>
     <form>
     <TextField
      fullWidth
                width={"50vw"}
                type="email"
                label=" new adminemail"
                name="admin"
                value={newadm}
                onChange={(e)=>setnewadm(e.target.value)}
                required
              />
 
             
                 <Button onClick={addadmi} sx={{width:"20vw",display:"block",marginLeft:"auto",marginRight:"auto",mt:4}}  variant="contained" color="primary" >
                             add 
    
                           </Button>
  </form>
      </Stack>

     

    </Box>




    <Box textAlign={"center"} fullWidth>
     {admins.map(e=>(
    <>
    <Typography    variant='p'>
       {e.text}
       
       
       </Typography>

       <br></br>
    </>
    
       
            ))}
     </Box>
  </>
   
  )
}

export default Addadmin

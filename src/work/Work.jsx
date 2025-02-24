import { Box ,TextField} from '@mui/material'
import React, { useState } from 'react'

import { useAuthState }   from "react-firebase-hooks/auth"

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from '../Firebase';
import EmailForm from '../Emailsenter';
function Work() {
const [asmin, setasmin] = useState(false)
const [value, setvalue] = useState("")
  let handleChange =(e)=>{
    setvalue(e.target.value)
if (e.target.value=="admin") {
  setasmin(true)
}
  }
  function check(user) {
    
  }
  return (
    <div>

      <Box>

         <TextField
                        fullWidth
                        type="text"
                        label="username"
                        name="subject"
                       
                        onChange={handleChange}
                        required
                      />
      </Box>
   <Box width={"100%"} height={"90vh"}>

        {asmin? <EmailForm/>:"sorry please   we are updating "}

    </Box>
    </div>
  )
}

export default Work

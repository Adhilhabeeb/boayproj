import { Box } from '@mui/material'
import React from 'react'

import { useAuthState }   from "react-firebase-hooks/auth"

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from '../Firebase';
function Work() {
    const googleSignIn = () => {
        alert("in")
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
      };
      const signOut = () => {
        alert("out")

        auth.signOut();
      };
    const [user] = useAuthState(auth);
  return (
    <div>
   <Box width={"100%"} height={"90vh"}>
{user?"onddee":"illla"}

<button  onClick={googleSignIn}>sign in </button>
<button onClick={signOut}>signout </button>
    </Box>
    </div>
  )
}

export default Work

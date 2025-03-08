import React, { useState } from 'react'
import EmailForm from './Emailsenter'
import { Button } from '@mui/material'
import Addadmin from './Addadmin'


function Admin() {
const [addad, setaddad] = useState(false)
 
  return (
    <div>
    <EmailForm/>



    <Button sx={{width:"30vw",display:"block",marginLeft:"auto",marginRight:"auto" ,mt:6}} onClick={()=>setaddad(!addad)} variant="contained" color="primary" >
                add admin
              </Button>

{addad&&<Addadmin/>}

    </div>
  )
}

export default Admin

import { createContext, StrictMode,useState,useEffect, useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './shader/header/header.jsx'
import Contact from './contact/Contact.jsx'
import  Work  from  "./work/Work.jsx"
import Footer from './footer/Footer.jsx'
import Canvas from './Canvas.jsx'

import * as THREE from 'three';
import AudioComponent from './AudioComponent.jsx'
import Admin from './Admin.jsx'
import { db } from './Firebase.js'
import { addDoc, collection, serverTimestamp , query,
    orderBy,
    onSnapshot,
    limit, } from "firebase/firestore";

export const ourcontext = createContext();


function Rotersetup() {

    const [pages, setpages] = useState(['Home', 'Contact', 'Works'])
const [admins, setadmins] = useState(["adhilhabeeb960571@gmail.com"])

    const [user, setuser] = useState(false)

const [admin, setadmin] = useState(false)
    useEffect(() => {
      if (user) {
        localStorage.setItem("userboat",JSON.stringify(user))
        
      }
 
     
    }, [user ])

    useEffect(() => {
      if (user.email&& admins.includes(user.email)) {
       
        setadmin(true)
        setpages((prev)=>{
          return[...prev,"admin"]
        })

      }

    
    }, [admins])
    
    


    useLayoutEffect(()=>{
        let onj=localStorage.getItem("userboat")

     if (onj) {
        console.log(JSON.parse(onj),"kk")
        setuser(JSON.parse(onj))
     }
        
    },[])

    
    let theme=createTheme({

        palette:{
         
        othercolor:{
          bfclr: "#deceaa",
          main:"#757471",
          fontfamiily:[  "Sigmar",'sans-serif'].join(","),
          gemfamily:['Grechen Fuemen','sans-serif'].join(","),
          maincolor:"#ebe9d8",
           black:"rgb(34, 33, 21)",
           shadfont: ['Shadows Into Light','sans-serif'].join(","),
           btnwhite:"rgb(255,255,255)"
         
        }
        
        }
      })

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
let soa=sortedMessages.map(e=>e.text)
        console.log(soa,":gggg") 
        setadmins(soa)
        });
        // return () => unsubscribe;
      }, []);
  return (

      <ourcontext.Provider value={{user,setuser,admin,admins}}>


<ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header pages={pages}/>
    {/* <Canvas/> */}
    <AudioComponent/>
    
    <Routes>
    
      <Route path="/" element={<App/>} />
      <Route path="Contact" element={<Contact/>} />
      <Route path="Works" element={<Work/>} />
      <Route path="admin" element={<Admin/>} />

      
    
    </Routes>
    <Footer  />
    </BrowserRouter>
    
    </ThemeProvider>


      </ourcontext.Provider>

  )
}

export default Rotersetup

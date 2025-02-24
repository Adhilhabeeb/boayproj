import { StrictMode } from 'react'
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

const pages = ['Home', 'Contact', 'Works'];


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
createRoot(document.getElementById('root')).render(
<ThemeProvider theme={theme}>
<BrowserRouter>
<Header pages={pages}/>
{/* <Canvas/> */}
<AudioComponent/>

<Routes>

  <Route path="/" element={<App/>} />
  <Route path="Contact" element={<Contact/>} />
  <Route path="Works" element={<Work/>} />

</Routes>
<Footer  />
</BrowserRouter>

</ThemeProvider>
)

import React, { useEffect, useState } from "react";
import { Container, Grid, TextField, Typography, Button, Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Message } from "@mui/icons-material";
import emailjs from '@emailjs/browser'
const Contact = () => {
    let serviceid="service_1h3s6uf"
    let publickey="CII1mDnwg5YBq3LKO"
    let tempid="template_bjzepg8"
    const [wrk, setwrk] = useState({name:"",email:"",location:"",mobile:"",work:"",contact:"",need:"",})
    const handleChange = (event) => {
    console.log(event.target,"evvv")
    setwrk({...wrk,[event.target.name]:event.target.value})
      };
      let  emailMessage = `
      Hi Sir,
      
      You have received a new work inquiry regarding ${wrk.work} from ${wrk.name}
      
      Here are the details:
      - **Name:** ${wrk.name}
      - **Email:** ${wrk.email}
      - **Location:** ${wrk.location}
      - **Mobile:** ${wrk.mobile}
      - **Work Type:** ${wrk.work}
      - **Preferred Contact Method:** ${wrk.contact}
      - **Specific Needs:** ${wrk.need}
      
      Please reach out to them as soon as possible.
      
      Best Regards,  
      Your Website Notification System
      `;
      
      let templeteparams={
        from_name:wrk.name,
        from_email:wrk.email,
        to_name:"sir",
        message:emailMessage
    }
     
       
      
        const sendEmail = (e) => {
           let tempid2="template_6dgjcji"
           let publicid2="E_CVbsFQmEi4hQ_S_"
           let serv2="service_i8h4ty8"
          e.preventDefault();
      
          emailjs.send(serviceid, tempid, templeteparams, publickey)
             .then(
              () => {
               alert("wrked")
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            ).catch((e=>{
                console.log(e,"errreeee")
            }));


 emailjs.send(serv2, tempid2, templeteparams, publicid2)
             .then(
              () => {
               alert("wrked")
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            ).catch((e=>{
                console.log(e,"errreeee")
            }));

        };
      useEffect(() => {
    console.log(templeteparams,)
      }, [wrk])
      
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Grid container spacing={4} alignItems="center">
        
        {/* Left Section - Contact Form */}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Have questions or need assistance? Fill out the form below, and we’ll get back to you soon.
          </Typography>

          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Your Name" variant="outlined" name="name"  onChange={handleChange} fullWidth required />
            <TextField label="Email Address" variant="outlined" name="email"  onChange={handleChange} fullWidth required type="email" />
            <TextField label="location" variant="outlined" name="location"  onChange={handleChange} fullWidth required />
            <TextField label="mobile" variant="outlined" name="mobile"  onChange={handleChange} fullWidth required />
            
           
         
     <Box sx={{ minWidth: 120 }}>
       
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">work </InputLabel>
        <Select name="work"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={wrk.work}
        
          onChange={handleChange}
        >
         <MenuItem value={"Ph monitering "}>Ph monitering</MenuItem>
    <MenuItem value={"Oil skimming "}>Oil skimming</MenuItem>
    <MenuItem value={"TDS monitering "}>TDS monitering </MenuItem>
    <MenuItem value={"Tempeature monitering "}>Tempeature monitering</MenuItem>
        </Select>
      </FormControl>
    </Box>
            <TextField label="contactaddress"  onChange={handleChange}  name="contact" variant="outlined" fullWidth required />

            <TextField label="your need "  onChange={handleChange} name="need" variant="outlined" fullWidth multiline rows={4} required />
            <Button variant="contained" onClick={sendEmail} color="primary" sx={{ mt: 2, backgroundColor: "#b0a488" }}>
            Sent MEssage 
            </Button>
          </Box>
        </Grid>

        {/* Right Section - Contact Details */}
        <Grid item xs={12} md={5}>
          <Box sx={{ p: 3, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Information
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Reach out to us via phone, email, or visit our location.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <EmailIcon sx={{ mr: 2, color: "#b0a488" }} />
              <Typography variant="body1">oilskimmermes@gmail.com.com</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PhoneIcon sx={{ mr: 2, color: "#b0a488" }} />
              <Typography variant="body1">+1 (123) 456-7890</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ mr: 2, color: "#b0a488" }} />
              <Typography variant="body1">123 Green Tech Avenue, Eco City, USA</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

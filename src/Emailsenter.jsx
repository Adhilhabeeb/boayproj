// import { useState } from "react";

// const EmailForm = () => {
//   const [formData, setFormData] = useState({
//     to: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // headers: { "Content-Type": "application/json; charset=utf-8" }, // ✅ Fixed here

//     try {
//         const response = await fetch("https://email-lcvx.onrender.com/send-email", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 to: formData.to,
//                 subject: formData.subject,
//                 message: formData.message,
//             }),
//         });

//         const data = await response.json();
        
//         if (response.ok) {
//             alert("Email sent successfully!");
//         } else {
//             alert("Failed to send email: " + data.error);
//         }
//     } catch (error) {
//         alert("Error: " + error.message);
//     }
// };





//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="to" placeholder="Recipient Email" onChange={handleChange}   required/>
//       <input type="text" name="subject" placeholder="Subject" onChange={handleChange}required />
//       <textarea name="message" placeholder="Message" onChange={handleChange} required ></textarea>
//       <button type="submit">Send Email</button>
//     </form>
//   );
// };

// export default EmailForm;






import { useState ,useEffect} from "react";
import { TextField, Button, Container, Paper, Typography, Grid , Select, MenuItem, InputLabel, FormControl} from "@mui/material";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",

  });


const [emailto, setemailto] = useState(null)
const [palceholderr, setpalceholderr] = useState("")
const [valusemsg, setvalusemsg] = useState("")
const [labeel, setlabeel] = useState("")
const [messinputs, setmessinputs] = useState({
  work:"",valuerate:""
})
useEffect(() => {
    

  if (!formData.to==""&&!messinputs.valuerate.trim("")==""&&!labeel=="") {
    setemailto(formData.to)
    textfieldsfunc(labeel,messinputs.valuerate,emailto)

// console.log(formData.to,"jjjjjj",messinputs.valuerate,"rrtt",labeel,"emmttoo",emailto)

  }
}, [formData.to,messinputs.valuerate,labeel])




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangemess = (e) => {
    setmessinputs({ ...messinputs, [e.target.name]: e.target.value });
  };


useEffect(() => {


   console.log(messinputs.valuerate,"And",messinputs.work,"noooooo",formData.subject)
   setvalusemsg(messinputs.valuerate)
  textfieldsfunc(messinputs.work,messinputs.valuerate)
}, [messinputs.valuerate])

  useEffect(() => {
   console.log(formData.subject,"fffff")
  }, [formData.subject])
  
  useEffect(() => {
   let textfi=textfieldsfunc(messinputs.work)

    // console.log(messinputs,"mmm")
  }, [messinputs.work])
  
  const handleSubmit = async (e) => {

    e.preventDefault();
// console.log(formData,"foooooooo")

    try {
      const response = await fetch("https://email-lcvx.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({ to: "", subject: "", message: "" }); // Reset form after success
      } else {
        alert("Failed to send email: " + data.error);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  function textfieldsfunc(deta,value,to) {
  

    switch(deta) {
      case "Oil skimming ":
        // code block
 
        // console.log("oiilll")
if (value) {
  
  console.log(value,"bnbbb")
setFormData({...formData,subject:`Oil Skimmer Update ${value} – ml Oil Collected`})
  
}


setlabeel("oil skimming")
  
      setpalceholderr("enter the oil value")
  
      if (emailto && deta&& value) {
setFormData({...formData,subject:`Oil Skimmer Update ${value} – ml Oil Collected`})


// console.log( "too:",emailto,"valuse:",value,"work:",deta)
        
let mess=`
Dear ${emailto},

I hope this email finds you well.

We would like to inform you that ${value}ml of oil has been successfully collected using the oil skimmer. Please let us know if you require any further details or assistance regarding this process.

Feel free to reach out if you have any questions.

Best regards,
Our Team
`

setFormData({...formData,message:mess})

      }


// console.log(deta,value,to,"iiiiiiiisss",emailto)

        break;
      case "Ph monitering ":

      if (value) {
  
        console.log(value,"bnbbb")
      setFormData({...formData,subject:`pH Monitoring Update  ${value}– Latest pH Value Recorded`})
        
      }
      
        // code block
setlabeel( "Ph monitering ")

        console.log("phhhh")
      setpalceholderr("enter the Ph value")


      if (emailto && deta&& value) {

        // console.log( "too:",emailto,"valuse:",value,"work:",deta)
                
        let mess = `
        Dear ${emailto},
        
        I hope this email finds you well.
        
        We would like to inform you that the latest pH value recorded is ${value}. Please review the data and let us know if you require any further details or assistance regarding this report.
        
        Feel free to reach out if you have any questions.
        
        Best regards,  
        Our Team
        `;
        
        
        setFormData({...formData,message:mess})
        
              }
        break;
        case "TDS monitering ":
          if (value) {
  
            console.log(value,"bnbbb")
          setFormData({...formData,subject:`TDS Monitoring Report ${value}– Latest Water Quality Update`})
            
          }
setlabeel("TDS monitering " )

          // code block
          setpalceholderr("enter the Tds value")
  
          console.log("tdsmmm")

          if (emailto && deta&& value) {

            // console.log( "too:",emailto,"valuse:",value,"work:",deta)
            let mess = `
            Dear ${emailto},
            
            I hope this email finds you well.
            
            We would like to inform you that the latest TDS (Total Dissolved Solids) value recorded is ${value}. Please review the data and let us know if you require any further details or assistance regarding this report.
            
            Feel free to reach out if you have any questions.
            
            Best regards,  
            Our Team
            `;
            
           
        
            
            
            
            setFormData({...formData,message:mess})
            
                  }
          break;
          case "Tempeature monitering ":
            if (value) {
  
              console.log(value,"bnbbb")
            setFormData({...formData,subject:`Temperature Monitoring Update ${value}– Latest Readings`})
              
            }
setlabeel("Tempeature monitering ")

            // code block
          setpalceholderr("enter the temperature value")

            console.log("temppppp")
  
  
            if (emailto && deta&& value) {

              // console.log( "too:",emailto,"valuse:",value,"work:",deta)
                      
              let mess = `
            Dear ${emailto},
            
            I hope this email finds you well.
            
            We would like to inform you that the latest temperature reading recorded is ${value}°C. Please review the data and let us know if you require any further details or assistance regarding this report.
            
            Feel free to reach out if you have any questions.
            
            Best regards,  
            Our Team
        `;
              
              
              setFormData({...formData,message:mess})
              
                    }
            break;
      default:
        // code bloc
        // k
  
        console.log("non of us")
  
    }
  
  }
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h5" gutterBottom align="center">
          Send an Email
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Recipient Email"
                name="to"
                value={formData.to}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Grid>
          
<Grid item xs={12}>

 <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">work </InputLabel>
        <Select name="work"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={messinputs.work}
        
          onChange={handleChangemess}
        >
         <MenuItem value={"Ph monitering "}>Ph monitering</MenuItem>
    <MenuItem value={"Oil skimming "}>Oil skimming</MenuItem>
    <MenuItem value={"TDS monitering "}>TDS monitering </MenuItem>
    <MenuItem value={"Tempeature monitering "}>Tempeature monitering</MenuItem>
        </Select>
      </FormControl>

</Grid>
<Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                label={palceholderr}
                name="valuerate"
              placeholder={palceholderr}
                value={messinputs.valuerate}
                onChange={handleChangemess}
              
              
                required
              />
            </Grid>
<Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>
           
      
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Send Email
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default EmailForm;





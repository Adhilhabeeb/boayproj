


import { useState ,useEffect, useContext} from "react";
import { TextField, Button, Container, Paper, Typography, Grid , Select, MenuItem, InputLabel, FormControl} from "@mui/material";
import { addDoc, collection, serverTimestamp , query,
  orderBy,
  onSnapshot,
  limit, } from "firebase/firestore";
import { db } from "./Firebase";
import { ourcontext } from "./Rotersetup";



const EmailForm = () => {
  
      const {user,setuser} = useContext(ourcontext);
console.log(user,"uu")
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",

  });




const [palceholderr, setpalceholderr] = useState("")
const [valusemsg, setvalusemsg] = useState("")
const [labeel, setlabeel] = useState("")
const [messinputs, setmessinputs] = useState({
  work:"",valuerate:"",to:"" ,subject:"",location:"",text:""
})
let [works,setworks]=useState({
  work:"",usergmail:"",Loaction:"",text:""
})
useEffect(() => {
  console.log(works,"kjkjjjjj")
  
}, [works])


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangemess = (e) => {
    setmessinputs({ ...messinputs, [e.target.name]: e.target.value });
  };


useEffect(() => {
  

  console.log(messinputs,"mm")

if (messinputs.work.trim()!=""&& messinputs.to.trim()!=="" && messinputs.valuerate.trim()!="") {
  sntmess(messinputs.work,messinputs.valuerate,messinputs.to)
}
if (messinputs.work.trim()!=""&& messinputs.to.trim()!=="" && messinputs.valuerate.trim()!=""&&messinputs.location.trim()!=""&& messinputs.text.trim()!="") {
 addwork(messinputs.work,messinputs.location,messinputs.text,messinputs.to)
}

}, [messinputs])
 
  

function addwork(work,Loaction,text,usergmail) {
  setworks(()=>{

    return{

      work,Loaction,text,usergmail
    }
// switch(work){
//   case "Oil skimming " :


//   break;
//   case "Ph monitering ":
//     return{

//       work:work,
//       location:location,
//       text:text,
//       usergmail:to
//     }
//   break;
//   case "TDS monitering ":
//     return{

//       work:work,
//       location:location,
//       text:text,
//       usergmail:to
//     }
//   break;
//   case "Tempeature monitering ":
//     return{

//       work:work,
//       location:location,
//       text:text,
//       usergmail:to
//     }

// break;

  
// }
  })
}
function sntmess(work,value,to) {

setFormData((prev)=>{


  switch(work) {
    case "Oil skimming " :
    return  {
        to: to,
        subject: `Oil Skimmer Alert: Value Recorded - ${value}`,
        message: `Dear ${to},\n\nWe would like to inform you that our oil skimmer has recorded a value of ${value}. Please review the data and take necessary action if required.\n\nBest Regards`
      }
      break;
    case "Ph monitering ":

    return {
      to: to,
      subject: `pH Monitoring Update: Current Value - ${value}`,
      message: `Dear ${to},\n\nOur pH monitoring system has recorded a value of ${value}. Kindly review the details and let us know if any action is needed.\n\nBest Regards`
    }

      // code block
      break;
      case "TDS monitering ":
        return {
          to: to,
          subject: `TDS Monitoring Alert: Measured Value - ${value}`,
          message: `Dear ${to},\n\nOur TDS monitoring system has detected a value of ${value}. Please check the readings and proceed accordingly.\n\nBest Regards`
        }
        // code block
        break;
        case "Tempeature monitering ":
          // code block
          return {
            to: to,
            subject: `Temperature Alert: Current Reading - ${value}°C`,
            message: `Dear ${to},\n\nOur temperature monitoring system has recorded a temperature of ${value}°C. Please review the data and take necessary action if required.\n\nBest Regards`
          }
    
    default:
      // code block
  }



})

  
}



useEffect(() => {
  console.log(formData,"fordata")


}, [formData])


  useEffect(() => {
   let textfi=textfieldsfunc(messinputs.work)

    // console.log(messinputs,"mmm")
  }, [messinputs.work])
  
  const handleSubmit = async (e) => {
     e.preventDefault();
    
console.log(formData,"foooooooo")

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

 sendMessage()
  };
  function textfieldsfunc(deta,value,to) {
  

    switch(deta) {
      case "Oil skimming ":
        // code block
 
        // console.log("oiilll")


setlabeel("oil skimming")
  
      setpalceholderr("enter the oil value")
  
   


// console.log(deta,value,to,"iiiiiiiisss",emailto)

        break;
      case "Ph monitering ":

      
      
        // code block
setlabeel( "Ph monitering ")

        console.log("phhhh")
      setpalceholderr("enter the Ph value")


     
        break;
        case "TDS monitering ":
         
setlabeel("TDS monitering " )

          // code block
          setpalceholderr("enter the Tds value")
  
          console.log("tdsmmm")

     
          break;
          case "Tempeature monitering ":
           
setlabeel("Tempeature monitering ")

            // code block
          setpalceholderr("enter the temperature value")

            console.log("temppppp")
  
  
          
            break;
      default:
        // code bloc
        // k
  
        console.log("non of us")
  
    }
  
  }

  const sendMessage = async (event) => {
    

   
    if (works.Loaction.trim() === ""&&works.usergmail.trim() === ""&& works.text.trim() === "",works.work.trim() === "") {
      alert("Enter valid message");
      return;
    }
  


    
    await addDoc(collection(db, "works"), {
      text:works.text,
      location:works.Loaction,
      email: works.usergmail ,
     work:works.work,

      createdAt: serverTimestamp(),
  
    });
   
   
  };
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h5" gutterBottom align="center">
          Send an Email
        </Typography>
        <form  onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Recipient Email"
                name="to"
                value={messinputs.to}
                onChange={handleChangemess}
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
              <TextField
                fullWidth
                type="text"
                label="Location"
                name="location"
                value={messinputs.location}
                onChange={handleChangemess}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                label="text"
                name="text"
                value={messinputs.text}
                onChange={handleChangemess}
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
              <Button   fullWidth variant="contained" color="primary" type="submit">
                Send Email
              </Button>
            </Grid>
          </Grid>
        </form>
 
        {/* <Button  fullWidth variant="contained" color="primary" >
                Send firebse
              </Button> */}
      </Paper>
    </Container>
  );
};

export default EmailForm;





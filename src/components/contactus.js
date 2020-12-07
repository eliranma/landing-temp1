import React from 'react';
import {TextField, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import openWhatsapp from '../hook/openWhatsapp';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import emailjs from 'emailjs-com';



const useStyles = makeStyles((theme)=>({
    root:   {
        height: '100vh',
        background: 'rgb(255,255,255)',
        background: 'linear-gradient(236deg, rgba(255,255,255,1) 0%, rgba(58,56,74,1) 30%, rgba(23,17,4,1) 100%)',
        display: 'flex',
        flexDirection:'column',
        justifyItems:'center',
        alignItems:'center',
        justifyContent:'center',
        textAlign:"right"
    },
    container: {
        borderRadius: '20%',
        background: 'white',
        display: 'flex',
        padding: '35px 35px',
        flexDirection:'column'
    },
    iconContainer: {
        width: 'auto',
        height: 'auto'
    }
}));
const ContactUs = () =>{
    const [state, setState] = React.useState({
        name: "",
        phone: "",
        email: "",
        message: ""
      })
    const classes = useStyles();
    const checked = useWindowPosition('services');
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      }
      const sendEmail = (stateName, stateEmail, stateMessage) => {emailjs.send("nassy-temp1","template_65vgkg9",{
        message: stateMessage,
        name: stateName,
        email: stateEmail,
        }, 'user_PY0eS9CYsk03dp60ATNj3')
        .then((response)=>console.log("Succes", response.status, response.text))
        .then(document.name.reset())
        .catch((error)=>console.log("FAILED", error))}

    //   var whatsappLink = openWhatsapp(state.name, state.phone, state.message);
    //   console.log(whatsappLink);
    return (
    <form id='form'
    className={classes.root}
    noValidate
    name='form'
    autoComplete="off">
        <div className={classes.container}>
  <TextField id="standard-basic"
   label="שם מלא:"
   name="name"
   onChange={handleChange}
   required
   value ={state.name}
   />
  <TextField id="filled-basic"
  label="מספר טלפון:"
  name="phone"
  onChange={handleChange}
  required
  value = {state.phone}
  />
  <TextField id="outlined-basic"
  label="Email:"
  name="email"
  onChange={handleChange}
  required
  value = {state.email}
  />
  <TextField id="outlined-basic"
  label="הודעה:"
  name="message"
  onChange={handleChange}
  required
  value = {state.message}
  />
  <IconButton className={classes.iconContainer}>
        <WhatsAppIcon className={classes.submit}
        checked = {checked}
        type='submit'
        // onClick = {window.open(openWhatsapp(state.name, state.phone, state.message))}
        />
    </IconButton>
    <IconButton className={classes.iconContainer}
  onClick = {sendEmail(state.name, state.phone, state.message)}>
        <AlternateEmailIcon className={classes.submit}
        checked = {checked}/>
    </IconButton>
    </div>
    </form>
    )
}
export default ContactUs;
//User ID
// user_PY0eS9CYsk03dp60ATNj3
// Access Token
// cce69fefa9f170a63cf7f34dc0513f56
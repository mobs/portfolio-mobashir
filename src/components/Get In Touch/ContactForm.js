import React, { useState } from "react";
import { db } from '../../firebaseConfig'
import { addDoc, collection} from 'firebase/firestore'

import classes from "./contactForm.module.css";
import Button from "../UI/Button";

const ContactForm = () => {
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [message,setMessage] = useState();

    const userCollectionRef = collection(db,"contactData");

    const handleFnameChange = (event) =>{
        setFirstName(event.target.value);
    }

    const handleLnameChange = (event) =>{
        setLastName(event.target.value);
    }

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) =>{
        setPhone(event.target.value);
    }

    const handleMessageChange = (event) =>{
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addDoc(userCollectionRef,{
            name: firstName + " " +lastName,
            email: email,
            phone: phone,
            message:message
        }).then(() => {
            if(!alert("Thank You!!! Will connect with you soon")){
                window.location.reload()
            }
        }).catch((error) =>{
            alert(error.message);
        })
    }

    const formClasses = classes.contactForm;

    return (
        <div className={classes.contactFormCard}>
            <h1 >Leave A Message</h1>
            <form className={formClasses} onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" required
                    onChange={handleFnameChange}
                    className={classes.Inputs}
                /> <br />
                <input type="text" placeholder="Last Name(optional)"
                    onChange={handleLnameChange}
                    className={classes.Inputs}
                /> <br/>
                <input type="email" placeholder="Email" required
                    onChange={handleEmailChange}
                    className={classes.Inputs}
                /> <br/>
                <input type="text" placeholder="Mobile No." required
                    onChange={handlePhoneChange}
                    className={classes.Inputs}
                /> <br/>
                <input type="text" placeholder="Message" required
                    onChange={handleMessageChange}
                    className={classes.Inputs}
                /> <br />
                <Button type="submit" className={classes.sendBtn}> SUBMIT </Button>
            </form>
        </div>
    )
}

export default ContactForm;
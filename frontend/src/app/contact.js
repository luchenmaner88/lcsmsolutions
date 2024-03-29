"use client";

import axios from 'axios';
import styles from './contact.module.css'
import { useState } from "react";

export default function Contact(){

    const [name, setName]=useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [notify, setNotify] = useState('');

 


    const handleSubmit =  (e) =>{
        e.preventDefault();
        const htmlMessage = ` 
        <h3> From: ${email} </h3>
        <p> Hello LSCM Solutions:</p> 
        <p> ${message} </p>
        <p>Best Regards,</p>
        <p>${name}</p>`;

        const data =  {name,email,htmlMessage};
 

         axios.post('https://lcsmsolutionsbackend.onrender.com/api/sendemail', data).then((response)=>{
            if(response.status==200){
                console.log(response);
                setName("");
                setEmail("");
                setMessage("");
                setNotify(" Thank you for contacting us, we will reach you back shortly")
                setTimeout(() => {
                  setNotify('')     
                }, 5000);
            }
         })

        
    }


    return(
        <div className={styles.container}>
        
            <form className={styles.contact_form} onSubmit={handleSubmit}>
                <div className={styles.form_field}>
                    <h1>Contact Us</h1>
                </div>
                <div className={styles.form_field}>
                    <input id="name" name="name"  type='text' placeholder='Name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)} required></input>

                </div>
                <div className={styles.form_field}>
                    <input id="email" name="email" type='email' placeholder='Email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required ></input>
                </div>
                <div   className={styles.form_field + ' ' + styles.form_field_textArea}>
                    <textarea id="message" name="message"  value={message}
                     onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <div className={styles.form_field}>
                    <button type='submit'  className={styles.contact_button}>Submit</button>
                </div>

                <div className={styles.form_field+' '+styles.notify}>
      
                   {notify}
           
                </div>
                

            </form>



        </div>
    )
}



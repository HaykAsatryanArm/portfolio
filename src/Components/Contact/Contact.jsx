import React, { useRef } from 'react'
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_KEY)
            .then((result) => {
                alert("Successful")
            }, (error) => {
                alert("Error")
            });
    };

    return (
        <section className={styles.contact}>
            <div className={styles.title}>
                CONTACT WITH ME
            </div>
            <form ref={form} className={styles.form} onSubmit={sendEmail}>
                <div className={styles.field}>
                    <label className={styles.label}>Name</label>
                    <input className={styles.input} type="text" name="user_name" />
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.input} type="email" name="user_email" />
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Subject</label>
                    <input className={styles.input} type="text" name="subject" />
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Message</label>
                    <textarea className={styles.textarea} name="message" />
                </div>
                <input className={styles.submit} type="submit" value="Send" />
            </form>
        </section>
    )
}

export default Contact

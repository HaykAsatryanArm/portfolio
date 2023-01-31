import React from 'react'
import styles from './Home.module.css'

import cv from './../../Assets/Files/CV.pdf'

import { Link } from 'react-router-dom'
import { GrLinkedinOption as LinkedIn, GrFacebookOption as Facebook, GrGithub as Github } from 'react-icons/gr'


const Home = () => {
    
    const social = [
        {
            Icon: LinkedIn,
            to: 'https://www.linkedin.com/in/hayk-asatryan-arm/'
        },
        {
            Icon: Facebook,
            to: 'https://www.facebook.com/Asatryan.Hayk.Arm/'
        },
        {
            Icon: Github,
            to: 'https://github.com/HaykAsatryanArm'
        }
    ]

    return (
        <>

            <section className={styles.home}>
                <div className={styles.all}>
                    <div className={styles.info}>
                        <h3 className={styles.hello}>Hello, I am</h3>
                        <h1 className={styles.name}>Hayk Asatryan</h1>
                        <h6 className={styles.profession}>I am Front-End and Back-End web developer with experience with design programms.</h6>
                        <a className={styles.cv} href={cv} download="CV">
                            Download CV
                        </a>
                    </div>
                    <div className={styles.social}>
                        {
                            social.map((item, index) => (
                                <div className={styles.item} key={index}>
                                    <Link to={item.to} className={styles.link}>
                                        <item.Icon />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

import React, { useState } from 'react'
import styles from './Header.module.css'

import { Link } from 'react-router-dom'

const Header = () => {
    const [burger, setBurger] = useState(false)

    const nav = [
        {
            name: 'Home',
            to: '/'
        },
        {
            name: 'Skills',
            to: '/skills'
        },
        {
            name: 'Experience',
            to: '/experience'
        },
        {
            name: 'Projects',
            to: '/projects'
        },
        {
            name: 'Contact',
            to: '/contact'
        }
    ]

    return (
        <header className={styles.header}>
            <div className={styles.name}>
                Hayk Asatryan
            </div>
            <div className={`${styles.burger} ${burger ? styles.active : ''}`} onClick={() => setBurger(!burger)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`${styles.nav} ${burger ? styles.active : ''}`}>
                {
                    nav.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <Link to={item.to} className={styles.link} onClick={() => setBurger(false)}>
                                {item.name}
                            </Link>
                        </div>
                    ))
                }
            </ul>
        </header>
    )
}

export default Header

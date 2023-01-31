import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            © Copyright {year} Hayk Asatryan. All rights reserved.
        </footer>
    )
}

export default Footer

import React from 'react'
import styles from './footer.scss'

const Footer = () => (
    <footer className={styles.footer}>
        © {new Date().getFullYear()}, Creado por
        <a className={styles.linkAlex} href="http://www.alexrobaina.com"> Alex robaina</a> y <a className={styles.linkLali} href="http://www.alexrobaina.com"> Lali miramon</a>
    </footer>
)

export default Footer
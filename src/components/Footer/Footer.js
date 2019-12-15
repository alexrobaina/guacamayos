import React from 'react'
import styles from './footer.module.scss'

const Footer = () => (
    <footer className={styles.footer}>
        © {new Date().getFullYear()}, Creado por
        <a href="http://www.alexrobaina.com"> Alex robaina y </a><a href="http://www.alexrobaina.com">Lali miramon</a>
    </footer>
)

export default Footer
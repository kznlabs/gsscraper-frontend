import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from "next/link"; // Import CSS module

function Footer() {
    return (
        <div className={styles.footer}>
            <Link target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/investintesla/gsscraper">
                gsscraper
            </Link>

            <span> & </span>

            <Link target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/investintesla/gsscraper-frontend">
                gsscraper-frontend
            </Link><br/><br/>

            Strona nie używa plików cookies i została wykonana wyłącznie w celach hobbystycznych.<br/>
            Zdjęcia przedstawione na stronie nie są wykonane przez autora strony.<br/>
            Linki do zdjęć jak i inne dane produktów pobierane są z oficjalnej strony&nbsp;

            <Link target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/investintesla/gsscraper-frontend">x-kom'u</Link>

            <br/><br/>

            Strona powstała dzięki&nbsp;

            <Link target="_blank"
                  rel="noopener noreferrer" href="https://vercel.com/">vercel.com</Link> - wdrożenie frontendu
            oraz&nbsp;

            <Link target="_blank"
                  rel="noopener noreferrer" href="https://sldc.eu/aff.php?aff=622">sldc.eu (link referencyjny)</Link> -
            domena & api

        </div>
    );
}

export default Footer;

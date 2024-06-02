import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from "next/link"; // Import CSS module

function Footer() {
    return (
        <div className={styles.footer}>
            <Link target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/kznlabs/x-kom_hotshots_archive">
                api
            </Link>

            <span> & </span>

            <Link target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/kznlabs/gsscraper-frontend">
                frontend
            </Link><br/><br/>

            Strona nie używa plików cookies i została wykonana wyłącznie w celach hobbystycznych.<br/>
            Zdjęcia przedstawione na stronie nie są wykonane ani przechowywane przez autora strony.<br/>
            Linki do zdjęć jak i inne dane produktów pobierane są z oficjalnej strony&nbsp;

            <Link target="_blank"
                  rel="noopener noreferrer"
                  href="https://x-kom.pl/goracy_strzal/">x-kom'u</Link>

            <br/><br/>

            Strona powstała dzięki&nbsp;

            <Link target="_blank"
                  rel="noopener noreferrer" href="https://vercel.com/">vercel.com</Link> - hosting front'a
            oraz&nbsp;

            <Link target="_blank"
                  rel="noopener noreferrer" href="https://sldc.eu/aff.php?aff=622">sldc.eu (link referencyjny)</Link> -
            domena & host api

        </div>
    );
}

export default Footer;

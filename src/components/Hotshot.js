// Hotshot.js
import React from 'react';
import styles from '../styles/Hotshot.module.css';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import {Tooltip} from "react-tooltip";

function Hotshot({ hotshotData }) {

    return (
        <div className={styles.currentHotshot}>
            <div className={styles.hotshotHeader}>
                <div className={styles.hotshotCloud}>
                    <h3>Aktualny gorący strzał:</h3>
                    {hotshotData.start}
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.hotshotImage}>
                    <img className={styles.hotshotImage} src={hotshotData.image}
                         alt={`Miniaturka Gorącego strzału - ${hotshotData.name} - ${hotshotData.start}`} />
                </div>

                <div className={styles.hotshotInfo}>
                    <div className={styles.hotshotName}>
                        <Link target="_blank"
                              rel="noopener noreferrer"
                              href={'https://x-kom.pl/p/'+hotshotData.sku}
                        >
                            {hotshotData.name}
                        </Link>

                        <div className={styles.hotshotSku}>
                            Ilość w promocji: {hotshotData.amount} szt.
                        </div>
                    </div>


                    <div className={styles.hotshotPrices}>
                        <span className={styles.current}>{hotshotData.current} zł</span>

                        <a data-tooltip-id="hotshot-price"
                           data-tooltip-html={'Cena z ostatnich 30 dni: ' + hotshotData.omnibus + ' zł<br>' +
                               'Cena przed obnizką: ' + hotshotData.old + ' zł'}
                        >
                            <FontAwesomeIcon icon={faCircleInfo}/>
                        </a>

                        <Tooltip id="hotshot-price" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotshot;

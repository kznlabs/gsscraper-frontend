// Hotshot.js
import React from 'react';
import styles from '../styles/Hotshot.module.css';
import Link from "next/link";

function Hotshot({ hotshotData }) {

    return (
        // <div className={styles.HotshotContainer}>
        //     {hotshotData.itemName}
        //     {hotshotData.sku}
        //     {hotshotData.price} zł
        //     {hotshotData.oldPrice} zł
        //     {hotshotData.minprice} zł
        //     {hotshotData.amount} szt.
        //     <img src={hotshotData.thumbnailUrl}
        //          alt={`Miniaturka Gorącego strzału - ${hotshotData.itemName} - ${hotshotData.promotionStart}`} />
        //     {hotshotData.promotionStart}
        // </div>
        <div className={styles.HotshotContainer}>
            <img src={hotshotData.thumbnailUrl}
                     alt={`Miniaturka Gorącego strzału - ${hotshotData.itemName} - ${hotshotData.promotionStart}`} />
            <div className={styles.hotshotinfo}>
                <div>
                    <b>{hotshotData.itemName}</b>
                </div>

                <div className={styles.spacer}></div>

                <div className={styles.hotshotprice}><b>{hotshotData.price} zł</b></div>
                <div>Cena przed obniżką: <b>{hotshotData.oldPrice} zł</b></div>
                <div>Cena z ostatnich 30 dni: <b>{hotshotData.minPrice} zł</b></div>

                <div className={styles.spacer}></div>
                <div>kod x-kom'u: <Link href={'https://x-kom.pl/p/'+hotshotData.sku}>{hotshotData.sku}</Link></div>
            </div>
        </div>

    );
}

export default Hotshot;

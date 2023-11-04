import React from 'react';
import styles from '../styles/Table.module.css';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import CSS module
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tooltip'

function returnTooltip({produkt}) {

    return (
        <>
            `<div className={styles.hotshotPrice}>
                <h3>Cena z GS:</h3>{produkt['price']}
            </div>

            <div className={styles.lastPrice}>
                <h3>Cena przed obniżką:</h3>{produkt['price']}
            </div>

            <div className={styles.lowestPrice}>
                <h3>Cena z ostatnich 30 dni:</h3>{produkt['price']}

            </div>`
        </>
    );
}

function Table({data}) {
    return (
        // <div className="">
        //     <div className={styles.row}>
        //         <div className={styles.column}>Nazwa produktu</div>
        //         <div className={styles.column}>Kod x-kom'u</div>
        //         <div className={styles.column}>Cena</div>
        //         <div className={styles.column}>Stara cena</div>
        //         <div className={styles.column}>Cena z 30 dni</div>
        //         <div className={styles.column}>Ilość</div>
        //         <div className={styles.column}>Zdjęcie produktu</div>
        //         <div className={styles.column}>Data</div>
        //     </div>
        //     {data.map((product) => (
        //         <div className={styles.row} key={product.id}>
        //             <div className={styles.productName}>
        //                 {product.itemName}
        //             </div>
        //
        //             <div>
        //                 <div className={styles.hideOnFullWidth}>Kod x-kom'u:</div>
        //                 <Link href={'https://x-kom.pl/p/'+product.sku}>{product.sku}</Link>
        //             </div>
        //
        //             <div className={styles.hideOnMobileWidth}>
        //                 <div className={styles.hideOnFullWidth}>Cena:</div>
        //                 {product.price} zł
        //             </div>
        //
        //             <div>
        //                 <div className={styles.hideOnFullWidth}>Stara cena:</div>
        //                 {product.oldPrice} zł
        //             </div>
        //
        //             <div>
        //                 <div className={styles.hideOnFullWidth}>Najniższa cena z 30 dni:</div>
        //                 {product.minPrice} zł
        //             </div>
        //
        //             <div>
        //                 <div className={styles.hideOnFullWidth}>Ilość sztuk:</div>
        //                 {product.amount} szt.
        //             </div>
        //
        //             <div className={styles.productThumbnail}>
        //                 <img src={product.thumbnailUrl}
        //                      alt={`Miniaturka Gorącego strzału - ${product.itemName} - ${product.promotionStart}`}/>
        //             </div>
        //
        //             <div className={styles.footer}>
        //                 <div className={styles.hideOnFullWidth}>Data:</div>
        //                 {product.promotionStart}
        //             </div>
        //         </div>
        //     ))}
        //
        // </div>
        <div className={styles.hotshots_list}>
            <div className={styles.row}>
                <div className={styles.col}>Nazwa produktu</div>
                <div className={styles.col}>Kod x-kom'u</div>
                <div className={styles.col}>Ceny</div>
                <div className={styles.col}>Ilość</div>
                <div className={styles.col}>Zdjęcie produktu</div>
                <div className={styles.col}>Data</div>
            </div>
            {data.map((product) => (
                <div className={styles.row} key={product.id}>
                    <div className={styles.col}>
                        {product.itemName}
                    </div>

                    <div className={styles.col}>
                        <Link href={'https://x-kom.pl/p/'+product.sku}>{product.sku}</Link>
                    </div>


                    <div className={styles.col}>
                        {product.price} zł

                        <a data-tooltip-id="price-tooltip"
                           data-tooltip-html={'Cena z ostatnich 30 dni: ' + product.minPrice + ' zł<br>Cena przed obnizką: ' + product.oldPrice + ' zł'}
                        >

                            <FontAwesomeIcon icon={faCircleInfo}/>
                        </a>

                        <Tooltip id="price-tooltip" />
                    </div>

                    <div className={styles.col}>
                        {product.amount}
                    </div>

                    <div className={[styles.col, styles.productImage].join(' ')}>
                        <img src={product.thumbnailUrl}
                                             alt={`Miniaturka Gorącego strzału - ${product.itemName} - ${product.promotionStart}`}/>
                    </div>

                    <div className={styles.col}>
                        {product.promotionStart}
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Table;

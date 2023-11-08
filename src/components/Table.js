import React from 'react';
import styles from '../styles/Table.module.css';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import CSS module
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tooltip'

function Table({data}) {
    return (
        <div className={styles.hotshots_list}>
            <div className={[styles.header].join(' ')}>
                <div className={styles.col}>Nazwa produktu</div>
                <div className={styles.col}>Cena promocyjna</div>
                <div className={styles.col}>Ilość</div>
                <div className={styles.col}>Zdjęcie produktu</div>
                <div className={styles.col}>Data</div>
            </div>

            {data.map((product) => (
                <div className={styles.row} key={product.id}>
                    <div className={[styles.col, styles.name].join(' ')}>
                        {product.itemName} - <Link href={'https://x-kom.pl/p/' + product.sku}>{product.sku}</Link>
                    </div>


                    <div className={[styles.col, styles.prices].join(' ')}>
                        {product.price} zł<br/>

                        <a className={styles.tooltip} data-tooltip-id={'prices-for-' + product.id}
                           data-tooltip-html={'Cena z ostatnich 30 dni: ' + product.minPrice + ' zł<br>Cena przed obnizką: ' + product.oldPrice + ' zł'}
                        >

                            <FontAwesomeIcon icon={faCircleInfo}/>
                        </a>

                        <Tooltip id={'prices-for-' + product.id} />
                    </div>

                    <div className={[styles.col, styles.amount].join(' ')}>
                        {product.amount} szt.
                    </div>

                    <div className={[styles.col, styles.thumbnail].join(' ')}>
                        <img src={product.thumbnailUrl}
                             alt={`Miniaturka Gorącego strzału - ${product.itemName} - ${product.promotionStart}`}/>
                    </div>

                    <div className={[styles.col, styles.promodate].join(' ')}>
                        {product.promotionStart}
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Table;
import React from 'react';
import styles from '../styles/Table.module.css';
import Link from "next/link"; // Import CSS module

function Table({data}) {
    return (
        <div className={styles.productTableContainer}>
            <table className={styles.productTable}> {/* Apply the CSS class */}
                <thead>
                <tr>
                    <th>Nazwa produktu</th>
                    <th>Kod x-kom'u</th>
                    <th>Cena</th>
                    <th>Stara cena</th>
                    <th>Cena z 30 dni</th>
                    <th>Ilość</th>
                    <th>Zdjęcie produktu</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                {data.map((product) => (
                    <tr key={product.id}>
                        <td className={styles.productName}>
                            {product.itemName}
                        </td>

                        <td>
                            <div className={styles.hideOnFullWidth}>Kod x-kom'u:</div>
                            <Link href={'https://x-kom.pl/p/'+product.sku}>{product.sku}</Link>
                        </td>

                        <td className={styles.hideOnMobileWidth}>
                            <div className={styles.hideOnFullWidth}>Cena:</div>
                            {product.price} zł
                        </td>

                        <td>
                            <div className={styles.hideOnFullWidth}>Stara cena:</div>
                            {product.oldPrice} zł
                        </td>

                        <td>
                            <div className={styles.hideOnFullWidth}>Najniższa cena z 30 dni:</div>
                            {product.minPrice} zł
                        </td>

                        <td>
                            <div className={styles.hideOnFullWidth}>Ilość sztuk:</div>
                            {product.amount} szt.
                        </td>

                        <td className={styles.productThumbnail}>
                            <img src={product.thumbnailUrl}
                                 alt={`Miniaturka Gorącego strzału - ${product.itemName} - ${product.promotionStart}`}/>
                        </td>

                        <td className={styles.footer}>
                            <div className={styles.hideOnFullWidth}>Data:</div>
                            {product.promotionStart}
                        </td>
                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    );
}

export default Table;

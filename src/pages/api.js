// api.js
import axios from 'axios';

export const fetchAndFormatData = async (page, itemsPerPage) => {
    try {
        const response = await axios.get(`https://api.purpurmc.pl/api/products?page=${page}&items_per_page=${itemsPerPage}`);
        const {data: responseData, metadata} = response.data;

        const formattedData = responseData.map((product) => ({
            ...product,
            promotionStart: formatTime(product.promotionStart),
            promotionEnd: formatTime(product.promotionEnd),
        }));

        return {formattedData, totalPages: metadata.totalPages};
    } catch (error) {
        console.error("Error fetching data:", error);
        return {formattedData: [], totalPages: 0};
    }
};

export const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${date.getDate()}-${date.getMonth().toString().padStart(2, '0')}-${date.getFullYear()} ${hours}:${minutes}`;
};

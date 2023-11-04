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
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleString('pl', options);
};

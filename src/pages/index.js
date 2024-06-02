import { useEffect, useState } from 'react';
import { fetchAndFormatData } from './api';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hotshot from '../components/Hotshot';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import Footer from '../components/Footer';

export default function Home() {
    const itemsPerPage = 10;

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState([]);
    const [hotshotData, setHotshotData] = useState(null); // Initialize with null

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const fetchAndDisplayData = async (page) => {
            const { formattedData, totalPages } = await fetchAndFormatData(page, itemsPerPage);

            setData(formattedData);
            setTotalPages(totalPages);

            // If hotshotData is null, set it to the first element from data
            if (hotshotData === null && formattedData.length > 0) {
                setHotshotData(formattedData[0]);
            }
        };

        fetchAndDisplayData(currentPage);
    }, [currentPage, hotshotData]);

    return (
        <>
            <Head>
                <title>Historia promocji "Gorący Strzał"</title>
                {/*<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />*/}
    
            </Head>

            <div className="wrapper">
                <Navbar />
                {hotshotData && ( // Render Hotshot only when hotshotData is not null
                    <Hotshot hotshotData={hotshotData} />
                )}
                <Pagination currentPage={currentPage} totalPageCount={totalPages} setPage={handlePageChange} />
                <Table data={data} />
                <Footer />
            </div>
        </>
    );
}

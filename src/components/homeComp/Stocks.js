import React, { useEffect } from "react";

//! StockData API
//! https://api.stockdata.org/v1/news/all?
//! https://api.stockdata.org/v1/data/intraday?

//* MarketStack API
//* 5ee0ab2fe82bc43d034bfb68950e16ca

function Stocks() {
    useEffect(() => {
        const fetchData = async () => {
            const params = {
                api_token: "lubkIReMB1fJ7oqwxO0WB9WeiXhTI5JvUhZ0axUP",
                symbols: "AAPL, DOW",
                limit: "1",
            };

            const esc = encodeURIComponent;
            const query = Object.keys(params)
                .map(function (k) {
                    return esc(k) + "=" + esc(params[k]);
                })
                .join("&");

            const requestOptions = {
                method: "GET",
                limit: "1",
            };

            try {
                const response = await fetch(
                    "https://api.stockdata.org/v1/data/intraday?" + query,
                    requestOptions
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const result = await response.text();

                // Log the result
                console.log(result);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array to ensure the effect runs only once

    return (
        <section>
            <h1>Stocks :</h1>
        </section>
    );
}

export default Stocks;

// //! OFF SITE API CALL
// var requestOptions = {
//     method: 'GET'
// };

// var params = {
//     api_token: 'lubkIReMB1fJ7oqwxO0WB9WeiXhTI5JvUhZ0axUP',
//     symbols: 'msft,fb',
//     limit: '50'
// };

// var esc = encodeURIComponent;
// var query = Object.keys(params)
//     .map(function(k) {return esc(k) + '=' + esc(params[k]);})
//     .join('&');

// fetch("https://api.stockdata.org/v1/news/all?" + query, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error))

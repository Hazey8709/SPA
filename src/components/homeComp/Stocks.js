import React, { useState, useEffect } from "react";

//! StockData API
//! https://api.stockdata.org/v1/news/all?
//! https://api.stockdata.org/v1/data/intraday?

//* MarketStack API
//* 5ee0ab2fe82bc43d034bfb68950e16ca

//* ExchangeRate-API
//* acb34b5d19c4a4e2fab8b319
//* https://v6.exchangerate-api.com/v6/acb34b5d19c4a4e2fab8b319/latest/USD

//
//
//
//

//* URL for the API
const URL =
    "https://v6.exchangerate-api.com/v6/acb34b5d19c4a4e2fab8b319/latest/USD";

function Stocks() {
    //* State
    const [baseData, setBaseData] = useState([]);
    const [ratesData, setRatesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                //s Result Object from the API
                const result = await response.json();

                const baseData = result.base_code;
                setBaseData(baseData);

                const ratesData = result.conversion_rates;
                setRatesData(ratesData);

                //! Logs
                //console.log("Result: ", result);
                // console.log("BaseData: ", baseData);
                // console.log("RatesData", ratesData);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array to ensure the effect runs only once

    //! Logs
    console.log("Base-Data:", baseData);
    console.log("Rates-Data:", ratesData);

    return (
        <section style={style.sect_cont}>
            <h1 style={style.title}>Conversion Rates</h1>
            <h3>
                Rate: {baseData} ${ratesData.USD}
            </h3>

            <div></div>

            <div style={style.conversion}>
                {/* <h3>USD: ${ratesData.USD}</h3> */}
                <h3>EUR: ${ratesData.EUR}</h3>
                <h3>GBP: {ratesData.GBP}</h3>
                <h3>JPY: {ratesData.JPY}</h3>
                <h3>CAD: {ratesData.CAD}</h3>
                <h3>AUD: {ratesData.AUD}</h3>
                <h3>CHF: {ratesData.CHF}</h3>
                <h3>SEK: {ratesData.SEK}</h3>
                <h3>NZD: {ratesData.NZD}</h3>
                <h3>MXN: {ratesData.MXN}</h3>
                <h3>SGD: {ratesData.SGD}</h3>
                <h3>HKD: {ratesData.HKD}</h3>
                <h3>NOK: {ratesData.NOK}</h3>
                <h3>KRW: {ratesData.KRW}</h3>
                <h3>TRY: {ratesData.TRY}</h3>
                <h3>RUB: {ratesData.RUB}</h3>
                <h3>INR: {ratesData.INR}</h3>
                <h3>BRL: {ratesData.BRL}</h3>
                <h3>ZAR: {ratesData.ZAR}</h3>
                <h3>DKK: {ratesData.DKK}</h3>
                <h3>PLN: {ratesData.PLN}</h3>
                <h3>THB: {ratesData.THB}</h3>
                <h3>IDR: {ratesData.IDR}</h3>
                <h3>HUF: {ratesData.HUF}</h3>
                <h3>CZK: {ratesData.CZK}</h3>
                <h3>ILS: {ratesData.ILS}</h3>
                <h3>CLP: {ratesData.CLP}</h3>
                <h3>PHP: {ratesData.PHP}</h3>
                <h3>AED: {ratesData.AED}</h3>
                <h3>COP: {ratesData.COP}</h3>
            </div>
        </section>
    );
}

export default Stocks;

//! Switch to
//! Make a rates component and use props to pass the data to the component
//! Then use the component in the Stocks component by mapping through the data (ratesData)
//! Like Profile and user card

const style = {
    sect_cont: {
        border: ".1rem solid red",
        borderRadius: ".3rem",
        width: "20rem",
        height: "30rem",
        marginLeft: "40rem",
    },

    title: {
        fontSize: "2rem",
        textAlign: "center",
    },

    conversion: {
        border: ".1rem solid green",
        borderRadius: ".3rem",
        width: "10rem",
        height: "20rem",
        // marginLeft: "40rem",
    },
};

//* Imports
import React, { useState, useEffect } from "react";
import ConversionCard from "../conversionComp/ConversionCard";
import StockData from "./StockData";

//*  API's
//! StockData API
//! https://api.stockdata.org/v1/news/all?
//! https://api.stockdata.org/v1/data/intraday?

//* MarketStack API
//* 5ee0ab2fe82bc43d034bfb68950e16ca

//* ExchangeRate-API
//* acb34b5d19c4a4e2fab8b319
//* https://v6.exchangerate-api.com/v6/acb34b5d19c4a4e2fab8b319/latest/USD

//* URL for the API (ExchangeRate API)
const URL =
    "https://v6.exchangerate-api.com/v6/acb34b5d19c4a4e2fab8b319/latest/USD";

//? Functional Component
function F_I() {
    //
    //? State
    const [baseData, setBaseData] = useState([]);
    const [ratesData, setRatesData] = useState([]);

    //? UseEffect Async Fetch
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

    //? Return
    return (
        <section style={style.sect_Cont}>
            <StockData />
            <ConversionCard
                sectTitle='Conversion Rates'
                baseCode={baseData}
                baseCodeRate={ratesData.USD}
                conversionTitle="Conversion's"
                EUR={ratesData.EUR}
                GBP={ratesData.GBP}
                JPY={ratesData.JPY}
                CAD={ratesData.CAD}
                AUD={ratesData.AUD}
                CHF={ratesData.CHF}
                SEK={ratesData.SEK}
                NZD={ratesData.NZD}
                MXN={ratesData.MXN}
                SGD={ratesData.SGD}
                HKD={ratesData.HKD}
                NOK={ratesData.NOK}
                KRW={ratesData.KRW}
                TRY={ratesData.TRY}
                RUB={ratesData.RUB}
                INR={ratesData.INR}
                BRL={ratesData.BRL}
                ZAR={ratesData.ZAR}
                DKK={ratesData.DKK}
                PLN={ratesData.PLN}
                THB={ratesData.THB}
                IDR={ratesData.IDR}
                HUF={ratesData.HUF}
                CZK={ratesData.CZK}
                ILS={ratesData.ILS}
                CLP={ratesData.CLP}
                PHP={ratesData.PHP}
                AED={ratesData.AED}
                COP={ratesData.COP}
            />
        </section>
    );
}

export default F_I;

const style = {
    sect_Cont: {
        display: "flex",
        border: ".1rem solid yellow", // change back to black
        borderRadius: ".3rem",
        width: "35rem",
        height: "47rem",
        marginTop: "1rem",
        marginLeft: "13rem",
        padding: ".5rem",
        boxShadow: "1px 1px 10px black",
    },
};

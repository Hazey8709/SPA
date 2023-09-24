//
//
//
//
//

//

//? Functional Component
function StockData() {
    //? Return
    return (
        <section style={style.stockData_Cont}>
            <h1 style={style.title}>Stock Data</h1>

            <table style={style.table_Cont}>
                <tr style={style.tr}>
                    <th style={style.th}>STOCK</th>
                    <th style={style.th}>PRICE</th>
                    <th style={style.th}>AT-CLOSE</th>
                </tr>
                <tr style={style.tr}>
                    <td style={style.td}>DJI (DOW)</td>
                    <td style={style.td}>$33,963.84</td>
                    <td style={style.td1}>-0.31%</td>
                </tr>
                <tr style={style.tr}>
                    <td style={style.td}>BTC (BitCoin)</td>
                    <td style={style.td}>$26,586.86</td>
                    <td style={style.td2}>+0.21%</td>
                </tr>
                <tr style={style.tr}>
                    <td style={style.td}>AMAZON (AMZN)</td>
                    <td style={style.td}>$129.12</td>
                    <td style={style.td1}>-0.16%</td>
                </tr>
                <tr style={style.tr}>
                    <td style={style.td}>ETHEREUM (ETH)</td>
                    <td style={style.td}>$1,594.03</td>
                    <td style={style.td2}>+0.14%</td>
                </tr>
                <tr style={style.tr}>
                    <td style={style.td}>BNB (BNB)</td>
                    <td style={style.td}>$210.42</td>
                    <td style={style.td1}>-0.11%</td>
                </tr>
                <tr style={style.tr}>
                    <td style={style.td}>S&P 500 (INX)</td>
                    <td style={style.td}>$4,320.06</td>
                    <td style={style.td1}>-0.23%</td>
                </tr>
                <tr style={style.tr}>
                    <td style={style.td}>AMC ENTERTAINMENT (AMC)</td>
                    <td style={style.td}>$7.62</td>
                    <td style={style.td2}>+0.79%</td>
                </tr>
                <tr style={style.tr}>
                    <td style={style.td}>Cardano (ADA)</td>
                    <td style={style.td}>$0.2449</td>
                    <td style={style.td2}>+0.48%</td>
                </tr>
                <tr style={style.tr}>
                    <td style={style.td}>MICROSOFT CORPORATION (MSFT)</td>
                    <td style={style.td}>$317.01</td>
                    <td style={style.td1}>-0.06%</td>
                </tr>
            </table>
        </section>
    );
}

export default StockData;

const style = {
    stockData_Cont: {
        display: "block",
        border: ".1rem solid white",
        width: "30rem",
        height: "44.3rem",
        padding: "1rem",
    },

    title: {
        // display: "block",
        border: ".1rem solid black",
        backgroundColor: "black",
        color: "white",
        height: "4rem",
        marginTop: 0,
        fontSize: "2rem",
        textAlign: "center",
    },

    table_Cont: {
        display: "block",

        border: ".1rem solid black",
        backgroundColor: "black",
        width: "100%",
        height: "35rem",
        // marginTop: "8rem",
        padding: ".2rem",
    },

    tr: {
        // border: ".1rem solid black",
        width: "100%",
        height: "2rem",
        textAlign: "center",
        padding: ".1rem",
    },

    th: {
        // border: ".1rem solid white",
        // borderBottom: ".1rem solid black",
        backgroundColor: "black",
        color: "white",
        width: "100%",
        height: "3rem",
        textAlign: "center",
        padding: ".1rem",
    },

    td: {
        // border: ".1rem solid white",
        backgroundColor: "white",
        color: "black",
        width: "100%",
        height: "3rem",
        textAlign: "center",
        fontWeight: "bold",
        padding: ".1rem",
    },

    td1: {
        backgroundColor: "white",
        color: "green",
        width: "100%",
        height: "3rem",
        textAlign: "center",
        fontWeight: "bold",
        padding: ".1rem",
    },

    td2: {
        backgroundColor: "white",
        color: "red",
        width: "100%",
        height: "3rem",
        textAlign: "center",
        fontWeight: "bold",
        padding: ".1rem",
    },
};

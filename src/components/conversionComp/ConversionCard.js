//
//
//
//
//
//

const ConversionCard = (props) => {
    return (
        <section style={style.sect_Cont}>
            <h1 style={style.title}>{props.sectTitle}</h1>

            <div style={style.subTitles}>
                <h3>
                    Base Rate
                    <span style={style.span}>
                        {props.baseCode}: ${props.baseCodeRate}
                    </span>
                </h3>
            </div>

            <div style={style.conversion_Cont}>
                <div>
                    <h2 style={style.conversionTitle}>
                        {props.conversionTitle}
                    </h2>
                </div>
                <h4>EUR: {props.EUR}</h4>
                <h4>GBP: {props.GBP}</h4>
                <h4>JPY: {props.JPY}</h4>
                <h4>CAD: {props.CAD}</h4>
                <h4>AUD: {props.AUD}</h4>
                <h4>CHF: {props.CHF}</h4>
                <h4>SEK: {props.SEK}</h4>
                <h4>NZD: {props.NZD}</h4>
                <h4>MXN: {props.MXN}</h4>
                <h4>SGD: {props.SGD}</h4>
                <h4>HKD: {props.HKD}</h4>
                <h4>NOK: {props.NOK}</h4>
                <h4>KRW: {props.KRW}</h4>
                <h4>TRY: {props.TRY}</h4>
                <h4>RUB: {props.RUB}</h4>
                <h4>INR: {props.INR}</h4>
                <h4>BRL: {props.BRL}</h4>
                <h4>ZAR: {props.ZAR}</h4>
                <h4>DKK: {props.DKK}</h4>
                <h4>PLN: {props.PLN}</h4>
                <h4>THB: {props.THB}</h4>
                <h4>IDR: {props.IDR}</h4>
                <h4>HUF: {props.HUF}</h4>
                <h4>CZK: {props.CZK}</h4>
                <h4>ILS: {props.ILS}</h4>
                <h4>CLP: {props.CLP}</h4>
                <h4>PHP: {props.PHP}</h4>
                <h4>AED: {props.AED}</h4>
                <h4>COP: {props.COP}</h4>
            </div>
        </section>
    );
};

export default ConversionCard;

const style = {
    sect_Cont: {
        border: ".1rem solid white",
        borderRadius: ".3rem",
        backgroundColor: "black",
        width: "15rem",
        height: "46.5rem",
        // marginLeft: "10rem",
        float: "right",
    },

    title: {
        border: ".1rem solid black",
        color: "white",
        fontSize: "2rem",
        textAlign: "center",
    },

    subTitles: {
        display: "block",
        border: ".1rem solid white",
        borderRadius: ".3rem",
        color: "white",
        width: "14rem",
        height: "3rem",
        margin: "0 auto",
        padding: ".2rem",
    },

    span: {
        fontSize: "1.5rem",
        float: "right",
    },

    conversion_Cont: {
        border: ".1rem solid black",
        // borderRadius: ".3rem",
        color: "white",
        width: "10rem",
        height: "32rem",
        margin: "0 auto",
        marginTop: ".8rem",
        textAlign: "center",
        overFlow: "hidden",
        overflowY: "scroll",
        boxShadow: "1px 1px 10px white",
    },

    conversionTitle: {
        border: ".1rem solid black",
        backgroundColor: "black",
        color: "white",
        // width: "10rem",
        height: "3rem",
        textDecoration: "underline",
    },
};

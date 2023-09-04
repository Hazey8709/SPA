import imgCard_3 from "../../images/ads/jsTitle.png";
//
//
//

const AdCard3 = (Title) => {
    return (
        <section style={style.adCard}>
            <img src={imgCard_3} alt='Ad' style={style.imgCard_3} />
            <h1 style={style.title}>{Title.titleCard_3}</h1>
            <a
                href='https://github.com/Hazey8709/SPA/tree/main'
                style={style.link}
                target='blank'
                rel='noreferrer'
            >
                Link 3
            </a>
        </section>
    );
};

export default AdCard3;

const style = {
    adCard: {
        border: ".1rem inset white",
        borderRadius: ".3rem",
        backgroundColor: "#0005",
        width: "17rem",
        height: "250px",
        // padding: "1rem",
        margin: "0 auto",
        marginTop: "3rem",
        boxShadow: "1px 1px 10px white",
    },

    imgCard_3: {
        display: "block",
        // border: ".1rem solid red",
        borderRadius: ".3rem",
        backgroundColor: "white",
        width: "175px",
        margin: "0 auto",
    },

    title: {
        textAlign: "center",
        marginTop: "10px",
    },

    link: {
        display: "block",
        color: "white",
        textAlign: "center",
        textDecoration: "none",
        textShadow: "1px 1px 1px blue",
        fontSize: "18px",
        fontWeight: "bold",
    },
};

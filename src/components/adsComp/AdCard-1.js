//
//
//

const AdCard1 = (props) => {
    return (
        <section style={style.adCard}>
            <img
                src={props.imgCard_1}
                alt={props.alt}
                style={style.imgCard_1}
            />
            <h1 style={style.title}>{props.titleCard_1}</h1>
            <a
                href={props.hrefLink}
                style={style.link}
                target='blank'
                rel='noreferrer'
            >
                {props.linkName}
            </a>
        </section>
    );
};

export default AdCard1;

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

    imgCard_1: {
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

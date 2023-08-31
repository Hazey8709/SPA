// import imgCard_1 from "../../images/"
// import imgCard_2 from "../../images/"
// import imgCard_3 from "../../images/"

//
//
//
//

const Ads = () => {
    return (
        <aside style={style.ads_Cont}>
            <section style={style.adCard}>
                {/* <img src={imgCard_1} alt='' /> */}
                <h1>Title 1</h1>
                <a
                    href='https://github.com/Hazey8709/SPA/tree/main'
                    target='blank'
                    rel='noreferrer'
                >
                    Link 1
                </a>
            </section>

            <section style={style.adCard}>
                {/* <img src={imgCard_2} alt='' /> */}
                <h1>Title 2</h1>
                <a
                    href='https://github.com/Hazey8709/SPA/tree/main'
                    target='_blank'
                    rel='noreferrer'
                >
                    Link 2
                </a>
            </section>

            <section style={style.adCard}>
                {/* <img src={imgCard_1} alt='' /> */}
                <h1>Title 3</h1>
                <a
                    href='https://github.com/Hazey8709/SPA/tree/main'
                    target='_blank'
                    rel='noreferrer'
                >
                    Link 3
                </a>
            </section>
        </aside>
    );
};

export default Ads;

const style = {
    ads_Cont: {
        display: "",
        flexDirection: "column",
        // border: ".1rem solid teal",
        backgroundColor: "#0005",
        width: "20rem",
        height: "100vh",
    },

    adCard: {
        // border: ".1rem solid yellow",
        borderRadius: ".3rem",
        backgroundColor: "#0005",
        width: "17rem",
        height: "250px",
        // padding: "1rem",
        margin: "0 auto",
        marginTop: "3rem",
        boxShadow: "1px 1px 5px white",
    },
};

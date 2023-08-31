//
//
//

const Header = () => {
    return (
        <header style={style.header_Cont}>
            <p>Header</p>
            <section style={style.quickLinks}></section>
        </header>
    );
};

export default Header;

const style = {
    header_Cont: {
        // display: "",

        border: ".1rem solid white",
        backgroundColor: "#0005",
        width: "80rem",
        height: "10rem",
    },

    quickLinks: {
        // display: "",
        border: ".1rem solid yellow",
        borderRadius: ".3rem",

        width: "60rem",
        height: "2rem",
        margin: "0 auto",
        marginTop: "5rem",
    },
};

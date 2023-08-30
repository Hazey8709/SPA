const SiteName = (name) => {
    return <h1 style={style.title}>{name.siteName}</h1>;
};

export default SiteName;

const style = {
    title: {
        fontSize: "48px",
        fontFamily: "cursive",
        textShadow: "2px 2px 1px blue",
        textAlign: "center",
        marginTop: "1rem",
    },
};

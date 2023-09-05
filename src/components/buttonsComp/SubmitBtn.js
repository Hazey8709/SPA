import { FaCheck } from "react-icons/fa";

const SubmitBtn = () => {
    return (
        <button type='submit' value='submit' style={style.navBtn}>
            <FaCheck style={style.FaCheck} />
        </button>
    );
};

export default SubmitBtn;

const style = {
    navBtn: {
        display: "block",
        border: ".2rem outset white",
        borderRadius: ".1rem",
        backgroundColor: "#91deb1",
        margin: "0 auto",
        marginTop: ".3rem",
        width: "19.5rem",

        padding: ".2rem",
    },

    FaCheck: {
        color: "green",
    },
};

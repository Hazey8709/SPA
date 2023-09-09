import { FaCheck } from "react-icons/fa";
//
//
//
//
//

const CancelEditBtn = (props) => {
    return (
        <button
            onClick={props.onClick}
            title='Cancel edit '
            style={style.cancelBtn}
        >
            <FaCheck />
        </button>
    );
};

export default CancelEditBtn;

const style = {
    cancelBtn: {
        border: ".2rem solid darkRed",
        borderRadius: ".3rem",
        backgroundColor: "#f5b7b1",
        width: "3rem",
        marginLeft: "10rem",
        // marginRight: "3rem",
        color: "red",
        fontWeight: "bold",
        cursor: "pointer",
    },
};

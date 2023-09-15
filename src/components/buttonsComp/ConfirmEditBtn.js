import { FaCheck } from "react-icons/fa";
//
//
//
//
//

const ConfirmEditBtn = (props) => {
    return (
        <button
            onClick={props.onClick}
            title='Confirm Edit'
            style={style.confirmBtn}
        >
            <FaCheck />
        </button>
    );
};

export default ConfirmEditBtn;

const style = {
    confirmBtn: {
        border: ".2rem solid darkGreen",
        borderRadius: ".3rem",
        backgroundColor: "#c8face",
        color: "darkGreen",
        marginLeft: "6.8rem",
        width: "3rem",
        fontWeight: "bold",
        cursor: "pointer",
    },
};

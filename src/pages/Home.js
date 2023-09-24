//* Imports
import MessageInfo from "../components/homeComp/MessageInfo";
import F_I from "../components/homeComp/F_I";

//
//
//

const Home = () => {
    return (
        <main style={style.homeMain_Cont}>
            <MessageInfo />

            <div style={style.Cont}>
                <F_I />
            </div>
        </main>
    );
};

export default Home;

const style = {
    homeMain_Cont: {
        display: "flex",
        border: ".1rem solid red",
        width: "71rem",
        height: "50.3rem",
        marginLeft: ".1rem",
    },

    Cont: {
        border: ".1rem solid purple",
    },
};

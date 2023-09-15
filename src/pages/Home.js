//* Imports
import MessageInfo from "../components/homeComp/MessageInfo";

//
//
//
//

const Home = () => {
    return (
        <main style={style.homeMain_Cont}>
            <MessageInfo />
        </main>
    );
};

export default Home;

const style = {
    homeMain_Cont: {
        border: ".1rem solid red",
        width: "71rem",
        height: "50.3rem",
        marginLeft: ".1rem",
    },
};

import { Route, Routes } from "react-router-dom";
import Nav from "../src/components/navComp/Nav";
import Header from "./components/headerComp/Header";
import Ads from "./components/adsComp/Ads";

function App() {
    return (
        <div style={style.frame_Cont}>
            <Nav />
            <Header />
            <Ads />
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                {/* <Route path='Chat' element={<Chat />} /> */}
                {/* <Route path='Friends' element={<Friends />} /> */}
                {/* <Route path='Profile' element={<Profile />} /> */}
            </Routes>

            <main style={style.main_Cont}>Main Content</main>
        </div>
    );
}

export default App;

const style = {
    frame_Cont: {
        display: "flex",
        // border: ".1rem solid red",
        flexDirection: "row",
        height: "100%",
        width: "100%",
    },

    main_Cont: {
        display: "inline-block",
        position: "absolute",
        border: ".1rem solid violet",
        height: "50.2rem",
        width: "66.7%",
        marginTop: "10.1rem",
        marginLeft: "17.7rem",
    },
};

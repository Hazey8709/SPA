import { Route, Routes } from "react-router-dom";
import Nav from "../src/components/navComp/Nav";
import Header from "./components/headerComp/Header";
import Ads from "./components/adsComp/Ads";

function App() {
    return (
        <main style={style.main_Cont}>
            <Nav />
            <Header />
            <Ads />
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                {/* <Route path='Chat' element={<Chat />} /> */}
                {/* <Route path='Friends' element={<Friends />} /> */}
                {/* <Route path='Profile' element={<Profile />} /> */}
            </Routes>
        </main>
    );
}

export default App;

const style = {
    main_Cont: {
        display: "flex",
        border: ".1rem solid red",
        flexDirection: "row",
        height: "100%",
        width: "100%",
    },
};

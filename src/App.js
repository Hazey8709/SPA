import { Route, Routes } from "react-router-dom";
import Nav from "../src/components/navComp/Nav";

function App() {
    return (
        <main style={style.mainCont}>
            <Nav />
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
    mainCont: {
        // display: "",
        border: ".1rem solid red",
        height: "100%",
        width: "100%",
    },
};

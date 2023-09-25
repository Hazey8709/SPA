import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MessageProvider } from "./context/MessageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <MessageProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MessageProvider>
    // </React.StrictMode> // Removed StrictMode to fix the warning: findDOMNode is deprecated in StrictMode.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

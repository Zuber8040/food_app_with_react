import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Headers from "./src/components/Header";

const AppLayout = () => {
    return (
        <div className="app">
            <Headers />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<AppLayout />);
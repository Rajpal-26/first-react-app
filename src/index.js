import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let currTime = new Date(2023,5,5,20);
currTime = currTime.getHours();
let greeting = "";

let style = {};

if (currTime >= 1 && currTime < 12) {
  greeting = "Good Morning";
  style.color = "green";
}
else if (currTime >= 12 && currTime < 19) {
  greeting = "Good Afternoon";
  style.color = "yellow";
}
else {
  greeting = "Good Night";
  style.color = "blue";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div className="head">
      <h1>
      Hello sir,
        <span className="change" style={style}> { greeting }</span>
      
    </h1>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

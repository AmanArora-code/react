import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parentDiv" }, [
  React.createElement("div", { id: "childDiv", key: "1" }, [
    React.createElement("h1", { key: "1-1" }, "React"),
    React.createElement("h2", { key: "1-2" }, "is a javascript library"),
  ]),
  React.createElement("div", { id: "childDiv2", key: "2" }, [
    React.createElement("h1", { key: "2-1" }, "Parcel"),
    React.createElement("h2", { key: "2-2" }, "is a bundler"),
  ]),
]);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

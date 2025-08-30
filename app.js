const parent = React.createElement("div", { id: "parentDiv" }, [
  React.createElement("div", { id: "childDiv" }, [
    React.createElement("h1", {}, "Heading 1 tag"),
    React.createElement("h2", {}, "Heading 2 tag"),
  ]),
  React.createElement("div", { id: "childDiv2" }, [
    React.createElement("h1", {}, "Heading 1 tag"),
    React.createElement("h2", {}, "Heading 2 tag"),
  ]),
]);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

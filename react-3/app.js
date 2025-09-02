import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React-Element(js object) => rendered to Html element
const heading = React.createElement("h1", {}, "Learn React with Aman 👌");
// console.log(heading); //object

//!JSX
//Jsx-Html-like or XML-like syntax not html inside js
//JSX is transpiled before it reaches the JS Engine by Parcel and not exactly parcel but babel, babel is responsible for this transpilation/compilation.
//JSX (Babel transpiles jsx to)=> React.createElement => React-Element(js object) => rendered to Html element

const heading2 = (
  <>
    <h2>
      Learn React and JSX. Jsx-Html-like or XML-like syntax not html inside js
    </h2>
    <h1>Helloo</h1>
    {heading}
  </>
);
// console.log(heading2);

//lets convert the above heading2 react element into functional Component
//and we also saw two diff syntax of functional components
const Heading2Component = () => (
  <>
    <h2>
      Learn React and JSX. Jsx-Html-like or XML-like syntax not html inside js
    </h2>
    <h1>Helloo from Heading2Component</h1>
  </>
);

let variable = 1000;
//Components
const HeadingComponent = () => {
  return (
    <div>
      <h1>Hi From Functional Component</h1>
      <h2>Varibale value is {variable}</h2>
      <Heading2Component />
      {/* this is also known as Component Composition - Component composition is
      just using one component inside another */}
    </div>
  );
};
// console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// root.render(heading2);

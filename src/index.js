import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return <h1>REACT COURSE</h1>;
}

function Body() {
  return (
    <div>
      <p>hello world</p>
      <ul>
        <li>list element 1</li>
        <li>list element 2</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <p>Happy Coding!</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);

import React from "react";
import RestuarantCard from "./RestuarantCard";
import resdata from "../utils/mockdata";

const Body = () => {
  return (
    <main>
      <section className="search">
        <input type="text" />
        <span>
          <button className="search-button">Search</button>
        </span>
      </section>
      <section className="restuarant-container">
        {resdata.map((restuarant) => {
          return <RestuarantCard key={restuarant.id} restuarant={restuarant} />;
        })}
      </section>
    </main>
  );
};

export default Body;

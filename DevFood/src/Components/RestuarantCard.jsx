import React from "react";

const RestuarantCard = (props) => {
  const { restuarant } = props;

  // console.log(props);

  return (
    <article className="card">
      <img className="card-img" src={restuarant.image} alt={restuarant.name} />

      <div className="card-content">
        <header>
          <h2>{restuarant.name}</h2>
        </header>
        <h4>{restuarant.cuisine}</h4>
        <h4>{restuarant.rating}⭐</h4>
        <p>
          Price for two {restuarant.priceRange}
          {restuarant.price}
        </p>
        <p>{restuarant.location}</p>
      </div>
    </article>
  );
};

export default RestuarantCard;

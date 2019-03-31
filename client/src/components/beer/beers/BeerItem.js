import React, { Component } from "react";
import { Link } from "react-router-dom";
import beerPlaceholderImage from "../../../images/beer-placeholder.jpg";

class BeerItem extends Component {
  render() {
    const { beer } = this.props;

    let beerImage;

    if (beer.labels) {
      beerImage = beer.labels.medium;
    } else {
      beerImage = beerPlaceholderImage;
    }

    return (
      <div className="beer-item">
        <div className="img-wrapper">
          <img src={beerImage} />
        </div>
        <div className="beer-info">
          <Link className="beer-name" to={`/beer/${beer.id}`}>
            {beer.name}
          </Link>
          <Link
            className="brewery-name"
            to={`/brewery/${beer.breweries[0].id}`}
          >
            {beer.breweries[0].name}
          </Link>
          {beer.abv ? (
            <p className="beer-abv">{beer.abv}% ABV</p>
          ) : (
            <p className="beer-abv">No ABV available</p>
          )}

          {beer.description ? (
            <p className="beer-description">{beer.description}</p>
          ) : (
            <p className="beer-description">No description available</p>
          )}
        </div>
      </div>
    );
  }
}

export default BeerItem;

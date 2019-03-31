import React, { Component } from "react";

import BeerItem from "./BeerItem";

export default class BeerFeed extends Component {
  render() {
    let beerFeed = this.props.beers.map(beer => (
      <BeerItem key={beer.id} beer={beer} />
    ));
    return <div className="beer-feed">{beerFeed}</div>;
  }
}

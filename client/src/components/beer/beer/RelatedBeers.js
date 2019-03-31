import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../common/spinner/Spinner";
import beerPlaceholderImage from "../../../images/beer-placeholder.jpg";

import { getBeersByStyle } from "../../../actions/beerActions";

class RelatedBeers extends Component {
  state = {
    dataLoaded: false
  };
  componentDidMount() {
    this.props.getBeersByStyle(this.props.style);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.beer.beers !== this.props.beer.beers) {
      this.setState({
        dataLoaded: true
      });
    }
  }
  render() {
    const { beers, loading } = this.props.beer;
    let relatedBeers;
    if (!this.state.dataLoaded) {
      relatedBeers = <Spinner />;
    } else {
      console.log(beers);
      relatedBeers = beers.map(beer => (
        <div className="related-beer">
          {beer.labels ? (
            <img src={beer.labels.icon} />
          ) : (
            <img src={beerPlaceholderImage} />
          )}
          <div className="beer-info">
            <h4>{beer.name}</h4>
            <p>{beer.breweries[0].name}</p>
          </div>
        </div>
      ));
    }

    return (
      <div className="related-beers-wrapper">
        <h3>Related beers</h3>
        <div className="related-beers">{relatedBeers}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beer: state.beer,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getBeersByStyle }
)(RelatedBeers);

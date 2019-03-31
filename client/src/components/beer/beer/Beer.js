import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { getBeerById } from "../../../actions/beerActions";
import beerPlaceholderImage from "../../../images/beer-placeholder.jpg";
import RelatedBeers from "./RelatedBeers";
import Spinner from "../../common/spinner/Spinner";

import { connect } from "react-redux";

import "./Beer.css";

class Beer extends Component {
  state = {
    beer: {}
  };
  componentDidMount() {
    this.props.getBeerById(this.props.match.params.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.beer.beer !== this.props.beer.beer) {
      this.setState({
        beer: this.props.beer.beer
      });
    }
  }

  render() {
    const {
      name,
      breweries,
      description,
      abv,
      style,
      labels
    } = this.state.beer;
    const { beer, loading } = this.props.beer;
    let beerContent;

    if (beer === null || loading) {
      beerContent = <Spinner />;
    } else {
      beerContent = (
        <div className="beer-content-wrapper">
          <div className="beer-header">
            <h1>{name}</h1>
            {breweries ? <h3>{breweries[0].name}</h3> : null}
          </div>
          <div className="beer-content">
            <div className="beer-info">
              <h4>Beer Info</h4>
              <p>
                <span>ABV: </span>
                {abv}%
              </p>
              {style ? (
                <p>
                  <span>Style: </span>
                  {style.name}
                </p>
              ) : null}

              <p>
                <span>Description: </span>
                {description}
              </p>
            </div>
            {labels ? (
              <img src={labels.large} />
            ) : (
              <img src={beerPlaceholderImage} />
            )}
          </div>
        </div>
      );
    }
    return (
      <div className="beer">
        {beerContent}
        {this.state.beer.style ? (
          <RelatedBeers style={this.state.beer.style.id} />
        ) : null}
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
  { getBeerById }
)(Beer);

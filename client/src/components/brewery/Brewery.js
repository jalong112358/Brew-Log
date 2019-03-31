import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { getBreweryById } from "../../actions/beerActions";
import beerPlaceholderImage from "../../images/beer-placeholder.jpg";

import Spinner from "../common/spinner/Spinner";

import { connect } from "react-redux";

import "./Brewery.css";

class Brewery extends Component {
  state = {
    dataLoaded: false
  };
  componentDidMount() {
    this.props.getBreweryById(this.props.match.params.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.beer.brewery !== this.props.beer.brewery) {
      this.setState({
        dataLoaded: true
      });
    }
  }

  render() {
    const { brewery } = this.props.beer;
    let breweryContent;

    if (!this.state.dataLoaded) {
      breweryContent = <Spinner />;
    } else {
      breweryContent = (
        <div className="brewery-content">
          <div className="brewery-heading">
            <div className="brewery-info">
              <h1>{brewery.name}</h1>
              <a href={brewery.website}>{brewery.website}</a>
              <p>Established in {brewery.established}</p>
            </div>

            {brewery.images ? (
              <img src={brewery.images.large} />
            ) : (
              <img src={beerPlaceholderImage} />
            )}
          </div>

          <p className="brewery-description">{brewery.description}</p>
        </div>
      );
    }
    return <div className="brewery">{breweryContent}</div>;
  }
}

const mapStateToProps = state => ({
  beer: state.beer,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getBreweryById }
)(Brewery);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Spinner from "../../common/spinner/Spinner";
import { searchBeers } from "../../../actions/beerActions";

import BeerFeed from "./BeerFeed";
import PageIndicator from "./PageIndicator";

import { connect } from "react-redux";

import "./Beers.css";

class Beers extends Component {
  state = {
    currentPage: 1,
    numberOfPages: 1
  };

  componentDidMount() {
    this.loadBeer();
  }
  componentWillReceiveProps(nextProps, prevState) {
    if (this.props.beer.beers !== nextProps.beer.beers) {
      this.setState({
        numberOfPages: nextProps.beer.beers.numberOfPages
      });
    }
    if (this.props.match.params.q !== nextProps.match.params.q) {
      this.setState(
        {
          currentPage: 1
        },
        () => this.loadBeer()
      );
    }
  }
  loadBeer = () => {
    this.props.searchBeers(this.props.match.params.q, this.state.currentPage);
  };
  toPage = page => {
    this.setState(
      {
        currentPage: page
      },
      () => this.loadBeer()
    );
  };
  prevPage = () => {
    this.setState(
      {
        currentPage: this.state.currentPage - 1
      },
      () => this.loadBeer()
    );
  };
  nextPage = () => {
    this.setState(
      {
        currentPage: this.state.currentPage + 1
      },
      () => this.loadBeer()
    );
  };
  render() {
    const { beers, loading } = this.props.beer;

    let beerFeed;

    if (beers === null || loading) {
      beerFeed = <Spinner />;
    } else {
      if (beers.data) {
        beerFeed = (
          <div>
            {this.state.numberOfPages > 1 ? (
              <PageIndicator
                toPage={this.toPage.bind(this)}
                numberOfPages={beers.numberOfPages}
                prevPage={this.prevPage}
                nextPage={this.nextPage}
                currentPage={this.state.currentPage}
              />
            ) : null}

            <BeerFeed beers={beers.data} />
            {this.state.numberOfPages > 1 ? (
              <PageIndicator
                toPage={this.toPage.bind(this)}
                numberOfPages={beers.numberOfPages}
                prevPage={this.prevPage}
                nextPage={this.nextPage}
                currentPage={this.state.currentPage}
              />
            ) : null}
          </div>
        );
      } else {
        beerFeed = <h3>No beers found</h3>;
      }
    }
    return <div className="beers">{beerFeed}</div>;
  }
}

const mapStateToProps = state => ({
  beer: state.beer,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { searchBeers }
)(Beers);

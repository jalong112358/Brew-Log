import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { searchBeers } from "../../actions/beerActions";
import { connect } from "react-redux";

import logo from "../../images/brew-log-logo.png";

import "./Landing.css";

class Landing extends Component {
  state = {
    search: ""
  };
  onSubmit = e => {
    if (this.state.search.length > 0) {
      e.preventDefault();
      this.props.history.push(`/beers/search/${this.state.search}`);
    }
  };

  onChange = e => {
    this.setState({
      search: e.target.value
    });
  };
  render() {
    return (
      <div className="landing">
        <img className="logo" src={logo} />
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.search}
            type="text"
            placeholder="Search for a beer..."
            onChange={this.onChange}
          />
          <button type="submit">
            <i class="fas fa-search" />
          </button>
        </form>
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
  { searchBeers }
)(withRouter(Landing));

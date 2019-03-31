import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { searchBeers } from "../../../actions/beerActions";
import { connect } from "react-redux";
import "./Toolbar.css";

import logo from "../../../images/brew-log-logo.png";

class Toolbar extends Component {
  state = {
    search: "",
    searchBarToggle: false
  };
  onSubmit = e => {
    if (this.state.search.length > 0) {
      e.preventDefault();
      this.setState({
        searchBarToggle: false
      });

      this.props.history.push(`/beers/search/${this.state.search}`);
    }
  };

  onChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  toggleSearch = () => {
    this.setState({
      searchBarToggle: !this.state.searchBarToggle
    });
  };
  render() {
    let searchBarOpen = "";

    if (this.state.searchBarToggle) {
      searchBarOpen = "open";
    } else {
      searchBarOpen = "";
    }
    return (
      <div className="toolbar">
        <div className="wrapper-for-mobile">
          <img className="logo" src={logo} />
          <div className="search-icon">
            {this.state.searchBarToggle ? (
              <i className="fas fa-times fa-2x " onClick={this.toggleSearch} />
            ) : (
              <i className="fas fa-search fa-lg" onClick={this.toggleSearch} />
            )}
          </div>
        </div>

        <form onSubmit={this.onSubmit} className={searchBarOpen}>
          <input
            value={this.state.search}
            type="text"
            placeholder="Search for a beer..."
            onChange={this.onChange}
          />
          <button type="submit">
            <i className="fas fa-search" />
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
)(withRouter(Toolbar));

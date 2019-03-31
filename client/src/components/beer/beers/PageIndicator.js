import React, { Component } from "react";

class PageIndicator extends Component {
  state = {
    pagesArray: []
  };

  componentDidMount() {
    let newArray = [];
    for (let i = 1; i <= this.props.numberOfPages; i++) {
      newArray = [...newArray, i];
    }
    this.setState({
      pagesArray: newArray
    });
  }
  render() {
    const {
      toPage,
      prevPage,
      nextPage,
      currentPage,
      numberOfPages
    } = this.props;

    let pageNumbers = this.state.pagesArray.map(page => {
      let indicatorClass = "";
      if (currentPage === page) {
        indicatorClass = "active";
      }
      return (
        <li className={indicatorClass} onClick={toPage.bind(this, page)}>
          {page}
        </li>
      );
    });

    return (
      <div className="page-indicator">
        <button onClick={prevPage}>
          <i class="fas fa-caret-left fa-2x" />
        </button>
        <ul>{pageNumbers}</ul>
        <button onClick={nextPage}>
          <i class="fas fa-caret-right fa-2x" />
        </button>
      </div>
    );
  }
}

export default PageIndicator;

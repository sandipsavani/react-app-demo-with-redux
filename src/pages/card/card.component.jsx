import React, { Component } from "react";
import { CardList } from "./../../components/card-list/card-list.component";
import { SearchBox } from "./../../components/search-box/search-box.components";
import {
  getCardList,
  getFilteredCardList,
} from "./../../redux/card/card.actions";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        searchField: e.target.value,
      },
      () => this.props.getFilteredCardList(this.state.searchField)
    );
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((users) => this.props.getCardList(users));
  }

  render() {
    const { cardItems } = this.props;
    return (
      <div>
        <h1>Card Search</h1>
        <SearchBox
          placeholder="Search a Card"
          handleChange={(e) => this.handleChange(e)}
        />
        <CardList cards={cardItems} />
      </div>
    );
  }
}

const mapStateToProps = ({ card: { cardItems } }) => ({
  cardItems,
});

const mapDispatchToProps = (dispatch) => ({
  getCardList: (users) => dispatch(getCardList(users)),
  getFilteredCardList: (users) => dispatch(getFilteredCardList(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

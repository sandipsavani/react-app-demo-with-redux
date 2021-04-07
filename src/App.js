import React, { Component } from "react";
// import { CardList } from "./components/card-list/card-list.component";
// import { SearchBox } from "./components/search-box/search-box.components";
// import { getCardList, getFilteredCardList } from "./redux/card/card.actions";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/home.component";
import AboutPage from "./pages/about/about.component";
import CardPage from "./pages/card/card.component";
import Header from "./components/header/header.component";
import "./App.css";
// import { connect } from "react-redux";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchField: "",
  //   };
  // }

  // handleChange = (e) => {
  //   this.setState(
  //     {
  //       searchField: e.target.value,
  //     },
  //     () => this.props.getFilteredCardList(this.state.searchField)
  //   );
  // };

  // componentDidMount() {
  //   const url = "https://jsonplaceholder.typicode.com/users";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((users) => this.props.getCardList(users));
  // }

  render() {
    // const { cardItems } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={CardPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
        {/* <h1>Card Search</h1>
        <SearchBox
          placeholder="Search a Card"
          handleChange={(e) => this.handleChange(e)}
        />
        <CardList cards={cardItems} /> */}
      </div>
    );
  }
}

// const mapStateToProps = ({ card: { cardItems } }) => ({
//   cardItems,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getCardList: (users) => dispatch(getCardList(users)),
//   getFilteredCardList: (users) => dispatch(getFilteredCardList(users)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

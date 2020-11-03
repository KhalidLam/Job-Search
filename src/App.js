import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerClass: "header",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  handleScroll = (e) => {
    const classList =
      e.target.scrollTop > 30 ? "header header-shadow" : "header";
    this.setState({ headerClass: classList });
  };

  render() {
    return (
      <div className='job'>
        <Header headerClass={this.state.headerClass} />
        <Main />
      </div>
    );
  }
}

export default App;

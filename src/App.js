import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerClass: "header",
      jobBg: "",
      jobDetailTitle: "",
      detailPage: false,
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

  handleJobClick = (bg, title) => {
    console.log(this.state.detailPage);
    this.setState({ detailPage: !this.state.detailPage, jobBg: bg, jobDetailTitle: title });
  };

  render() {
    return (
      <div className='job'>
        <Header headerClass={this.state.headerClass} />
        <Main handleJobClick={this.handleJobClick} detailPage={this.state.detailPage} jobBg={this.state.jobBg} />
      </div>
    );
  }
}

export default App;

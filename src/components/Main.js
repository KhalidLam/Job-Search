import React, { Component } from "react";
import Filter from "./Filter/Filter";
import Jobs from "./Jobs/Jobs";
import Search from "./Search/Search";

class Main extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     jobBg: "",
  //     jobDetailTitle: "",
  //     detailPage: false
  //   };
  // }

  // handleJobClick = (jobBg, jobDetailTitle) => {
  //   console.log("job clicked");
    // const number = Math.floor(Math.random() * 10);
    // const url = `https://unsplash.it/640/425?image=${number}`;
    // jobBg.src = url;

    // const logo = jobCard.querySelector("svg");
    // const bg = logo.style.backgroundColor;
    // console.log(jobBg);
    // jobBg.style.background = bg;
    // const title = jobCard.querySelector(".job-card-title");
    // jobDetailTitle.textContent = title.textContent;
    // jobLogos.innerHTML = logo.outerHTML;
    // wrapper.classList.add("detail-page");
    // wrapper.scrollTop = 0;

    // this.setState({detailPage: !this.state.detailPage})

  // }

  render() {
    return (
      <div
        className={this.props.detailPage ? "wrapper detail-page" : "wrapper"}
      >
        <Search />
        <div className='main-container'>
          <Filter />
          <Jobs handleJobClick={this.props.handleJobClick} jobBg={this.props.jobBg} />
        </div>
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
import JobFilter from "./Filter/JobFilter";
import Jobs from "./Jobs/Jobs";
import Search from "./Search/Search";

class Main extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Search />
        <div className='main-container'>
          <JobFilter />
          <Jobs />
        </div>
      </div>
    );
  }
}

export default Main;

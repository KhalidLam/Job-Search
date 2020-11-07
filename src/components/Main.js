import React from "react";
import Filter from "./Filter/Filter";
import Jobs from "./Jobs/Jobs";
import Search from "./Search/Search";

const Main = (props) => {
  const { detailPage, handleJobClick, jobBg } = props;

  return (
    <div className={detailPage ? "wrapper detail-page" : "wrapper"}>
      <Search />
      <div className='main-container'>
        <Filter />
        <Jobs handleJobClick={handleJobClick} jobBg={jobBg} />
      </div>
    </div>
  );
};

export default Main;

import React from "react";

const FilterRow = ({ data: { jobLabel, jobNumber, checked } }) => {
  return (
    <div className='type-container'>
      <input type='checkbox' id='job7' className='job-style' defaultChecked={checked} />
      <label htmlFor='job7'>{jobLabel}</label>
      <span className='job-number'>{jobNumber}</span>
    </div>
  );
};

export default FilterRow;

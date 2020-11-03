import React from "react";
import FilterRow from "./FilterRow";

const JobFilter = () => {
  return (
    <div className='search-type'>
      {/* Alert */}
      <div className='alert'>
        <div className='alert-title'>Create Job Alert</div>
        <div className='alert-subtitle'>
          Create a job alert now and never miss a job
        </div>
        <input type='text' placeholder='Enter job keyword' />
        <button className='search-buttons'>Create Job Alerts</button>
      </div>

      {/* Filters */}
      <div className='employment job-time'>
        <div className='job-time-title'>Type of Employment</div>
        <div className='job-wrapper'>
          {employment.map((employ, index) => (
            <FilterRow key={index} data={employ} />
          ))}
        </div>
      </div>
      <div className='seniority job-time'>
        <div className='job-time-title'>Seniority Level</div>
        <div className='job-wrapper'>
          {seniority.map((level, index) => (
            <FilterRow key={index} data={level} />
          ))}
        </div>
      </div>
      <div className='salary job-time'>
        <div className='job-time-title'>Salary Range</div>
        <div className='job-wrapper'>
          {salaries.map((salary, index) => (
            <FilterRow key={index} data={salary} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobFilter;

const employment = [
  {
    jobLabel: "Full Time Jobs",
    jobNumber: "56",
    checked: true,
  },
  {
    jobLabel: "Part Time Jobs",
    jobNumber: "43",
    checked: false,
  },
  {
    jobLabel: "Remote Jobs",
    jobNumber: "24",
    checked: false,
  },
  {
    jobLabel: "Internship Jobs",
    jobNumber: "27",
    checked: false,
  },
  {
    jobLabel: "Contract",
    jobNumber: "76",
    checked: false,
  },
  {
    jobLabel: "Training Jobs",
    jobNumber: "28",
    checked: false,
  },
];

const seniority = [
  {
    jobLabel: "Student Level",
    jobNumber: "98",
    checked: false,
  },
  {
    jobLabel: "Entry Level",
    jobNumber: "44",
    checked: false,
  },
  {
    jobLabel: "Mid Level",
    jobNumber: "35",
    checked: true,
  },
  {
    jobLabel: "Senior Level",
    jobNumber: "29",
    checked: true,
  },
  {
    jobLabel: "Directors",
    jobNumber: "26",
    checked: false,
  },
  {
    jobLabel: "VP or Above",
    jobNumber: "56",
    checked: false,
  },
];

const salaries = [
  {
    jobLabel: "$700 - $1000",
    jobNumber: "49",
    checked: false,
  },
  {
    jobLabel: "$1000 - $1200",
    jobNumber: "67",
    checked: false,
  },
  {
    jobLabel: "$1200 - $1400",
    jobNumber: "24",
    checked: false,
  },
  {
    jobLabel: "$1500 - $1800",
    jobNumber: "27",
    checked: true,
  },
  {
    jobLabel: "$2000 - $3000",
    jobNumber: "76",
    checked: false,
  },
  {
    jobLabel: "$3000 - $4000",
    jobNumber: "22",
    checked: false,
  },
  {
    jobLabel: "$4000 - $5000",
    jobNumber: "18",
    checked: false,
  },
];

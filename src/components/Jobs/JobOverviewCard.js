import React from "react";

const JobOverviewCard = ({ job: { title, subtitle, tags }, handleJobClick }) => {

  return (
    <div className='job-overview-card'>
      <div className='job-card overview-card'>
        <div className='overview-wrapper'>
          <svg
            viewBox='0 -13 512 512'
            xmlns='http://www.w3.org/2000/svg'
            style={{ backgroundColor: "#2e2882" }}
          >
            <g fill='#feb0a5'>
              <path d='M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0' />
              <path d='M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0' />
            </g>
            <path
              d='M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0'
              fill='#feb0a5'
            />
          </svg>
          <div className='overview-detail'>
            <div className='job-card-title'>{title}</div>
            <div className='job-card-subtitle'>
              {subtitle}
            </div>
          </div>
          <svg
            className='heart feather feather-heart'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z' />
          </svg>
        </div>
        <div className='job-overview-buttons'>
          <div className='search-buttons time-button'>Full Time</div>
          <div className='search-buttons level-button'>Senior Level</div>
          <div className='job-stat'>New</div>
          <div className='job-day'>4d</div>
        </div>
      </div>
    </div>
  );
};

export default JobOverviewCard;

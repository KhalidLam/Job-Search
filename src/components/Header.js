import React from "react";

function Header({headerClass}) {
  // const [headerClass, setHeaderClass] = useState("header");

  return (
    <div className={headerClass}>
      <div className='logo'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            xmlns='http://www.w3.org/2000/svg'
            d='M512 503.5H381.7a48 48 0 01-45.3-32.1L265 268.1l-9-25.5 2.7-124.6L338.2 8.5l23.5 67.1L512 503.5z'
            fill='#0473ff'
            data-original='#28b446'
          />
          <path
            xmlns='http://www.w3.org/2000/svg'
            fill='#0473ff'
            data-original='#219b38'
            d='M361.7 75.6L265 268.1l-9-25.5 2.7-124.6L338.2 8.5z'
          />
          <path
            xmlns='http://www.w3.org/2000/svg'
            d='M338.2 8.5l-82.2 234-80.4 228.9a48 48 0 01-45.3 32.1H0l173.8-495h164.4z'
            fill='#0473ff'
            data-original='#518ef8'
          />
        </svg>
        Milao
      </div>

      <div className='header-menu'>
        <a href='#find_job' className='active'>
          Find Job
        </a>
        <a href='#company_review'>Company Review</a>
        <a href='#find_salaries'>Find Salaries</a>
      </div>

      <div className='user-settings'>
        <div className='dark-light'>
          <svg
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='1.5'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' />
          </svg>
        </div>

        <div className='user-menu'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-square'
          >
            <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
          </svg>
        </div>
        <img
          className='user-profile'
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png'
          alt=''
        />
        <div className='user-name'>Suhayel Nasim</div>
      </div>
    </div>
  );
}

export default Header;



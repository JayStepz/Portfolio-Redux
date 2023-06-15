import React from 'react';
import '../styling/NavStyle.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="nav nav-tabs main">
        <li className="nav-item col-1">
          <a
            href="#landing"
            onClick={() => handlePageChange('Landing')}

            className={currentPage === 'Landing' ? 'nav-link active' : 'nav-link'}
          >
            Hello
          </a>
        </li>
        <li className="nav-item col-1">
          <a
            href="#about"
            onClick={() => handlePageChange('AboutMe')}
            

            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item col-1">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item col-1">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item col-1">
          <a
            href="#contact"
            
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <div className='col-7'>
          <li className='name' /*style={{textAlign: 'right', paddingRight: 10, paddingTop: 8}}*/>
            Jakob Stephens
          </li>
        </div>
        </ul>
    </div>
  );
}

export default NavTabs;
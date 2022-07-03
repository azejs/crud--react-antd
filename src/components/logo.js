/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../images/LG.jpg';
import Royal from '../images/royal.jpg';


function Logo(props) {
  const { collapsed } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: '5px',
        background: '#003366',
      }}
    >
      <Link to="/" style={{ display: 'contents' }}>
        <div
          className="isoLogoWrapper"
          style={{
            width: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            alt="Hotel"
            width={collapsed ? '70px' : '150px'}
            height="auto"
            src={collapsed ? logo : logo}
          />
        </div>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  collapsed: PropTypes.bool, // .isRequired
};

export default Logo;

import React from 'react';
import LogoImage from './logo.png'

function Logo({ className }) {
  return (
    <img className={className} src={LogoImage} alt="logo" />
  );
}

export default Logo;

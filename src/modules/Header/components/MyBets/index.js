import React from 'react';
import styled from 'styled-components'
import CubeImage from 'shared/icons/menu/cube.js'
import * as ScreenSizes from 'shared/constants/screenSizes'

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  min-width: 150px;
  padding: 15px 20px 13px 40px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-family: "MullerMedium";
  font-size: 15px;
  background-color: #6d809a;
  @media (max-width: ${ScreenSizes.XLARGE}) {
    display: none;
  }
  svg {
    position: absolute;
    left: 18px;
    top: 13px;
    path {
      fill: #fff;
      fill-rule: evenodd;
    }
  }
`

function MyBets({ className }) {
  return (
    <Button className={className}>
      <CubeImage />
      Мои ставки
    </Button>
  );
}

export default MyBets;

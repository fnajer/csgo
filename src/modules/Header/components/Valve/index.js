import React from 'react';
import styled from 'styled-components'
import ValveImage from 'shared/icons/valve.svg'
import * as ScreenSizes from 'shared/constants/screenSizes'

const ValveBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  min-width: 90px;
  height: 100%;
  min-height: 90px;
  background-color: #2f3647;
  @media (max-width: ${ScreenSizes.XSMALL}) {
    display: none;
  }
`

function Valve({ className }) {
  return (
    <ValveBackground className={className}>
      <img src={ValveImage} alt="valve" />
    </ValveBackground>
  );
}

export default Valve;

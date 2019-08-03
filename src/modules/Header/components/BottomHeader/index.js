import React from 'react';
import { Col as ColBase } from 'react-grid-system';
import styled, { css } from 'styled-components'
import Navigation from '../Navigation';
import Social from '../Social';
import Locale from '../Locale';
import * as ScreenSizes from 'shared/constants/screenSizes'

const Col = styled(ColBase)`
  display: flex;
  align-items: center;
`
const SocialCol = styled(Col)`
  justify-content: flex-end;
  padding: 10px 0;
`
const DividerCss = css`
  content: '';
  position: fixed;
  left: 0;
  top: 90px;
  display: block;
  width: 100%;
  border-top: 2px solid #eaeef1;
`
const NavigationCol = styled(Col)`
  &::before {
    ${DividerCss}
    top: 90px;
  }
  @media (max-width: ${ScreenSizes.SLARGE}) {
    &::before {
      top: 180px;
    }
  }
`

function TopHeader() {
  return (
    <>
      <NavigationCol component='section' xl={8.5}>
        <Navigation />
      </NavigationCol>
      <SocialCol component='section' xl={3.5}>
        <Social />
        <Locale />
      </SocialCol>
    </>
  );
}

export default TopHeader;

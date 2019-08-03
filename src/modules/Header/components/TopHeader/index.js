import React from 'react';
import { Col as ColBase } from 'react-grid-system';
import styled, { css } from 'styled-components'
import LogoBase from '../Logo';
import ValveBase from '../Valve';
import Proposals from '../Proposals';
import MyBetsBase from '../MyBets';
import Profile from '../Profile';
import Controls from '../Controls';
import * as ScreenSizes from 'shared/constants/screenSizes'

const Col = styled(ColBase)`
  display: flex;
  align-items: center;
`
const LogoCol = styled(Col)`
  height: 90px;
`
const Logo = styled(LogoBase)`
  margin-right: 35px;
`
const Valve = styled(ValveBase)`
  margin: 0 5px;
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
const ProposalsCol = styled(Col)`
  @media (max-width: ${ScreenSizes.SLARGE}) {
    justify-content: center;
    min-height: 90px !important;
    > div:last-child {
      border-right: none;
    }
    &::before {
      ${DividerCss}
    }
  }
`
const AccountCol = styled(Col)`
  justify-content: flex-end;
`
const MyBets = styled(MyBetsBase)`
  margin-right: 10px !important;
`

function TopHeader() {
  return (
    <>
      <LogoCol xs={6} xl={3.4}>
        <Logo />
        <Valve />
      </LogoCol>
      <AccountCol xs={6} xl={4.2} push={{ xl: 4.4 }}>
        <MyBets />
        <Profile />
        <Controls />
      </AccountCol>
      <ProposalsCol xl={4.4} pull={{ xl: 4.2 }}>
        <Proposals />
      </ProposalsCol>
    </>
  );
}

export default TopHeader;

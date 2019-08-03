import React from 'react';
import { Container as BaseContainer, Row, Col as ColBase } from 'react-grid-system';
import styled from 'styled-components'
import TopHeader from './components/TopHeader';
import BottomHeader from './components/BottomHeader';
import * as ScreenSizes from 'shared/constants/screenSizes'

const MainRow = styled(Row)`
  min-height: 90px;
`
const Container = styled(BaseContainer)`
  @media (min-width: ${ScreenSizes.SLARGE}) {
    max-width: 1800px !important;
    width: 100%;
    padding: 0 50px !important;
  }
`
const Col = styled(ColBase)`
  display: flex;
  align-items: center;
`

function Header() {
  return (
    <MainRow component='header' justify='between' nogutter>
      <Col xs={12}>
        <Container>
          <Row>
            <TopHeader />
          </Row>
          <Row>
            <BottomHeader />
          </Row>
        </Container>
      </Col>
    </MainRow>
  );
}

export default Header;

import React from 'react';
import styled from 'styled-components'
import BonusesImage from 'shared/icons/bonuses.svg'
import IntuitionImage from 'shared/icons/intuition.svg'
import * as ScreenSizes from 'shared/constants/screenSizes'

const Proposal = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 100%;
  border-right: 2px solid #eaeef1;
  color: #2db2f0;
  @media (max-width: ${ScreenSizes.XSMALL}) {
    width: 150px;
  }
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #2db2f0;
`

const Text = styled.div``
const Title = styled.h3`
  margin-bottom: 3px;
  font-family: "MullerBold";
  font-size: 14px;
`
const Description = styled.span`
  @media (max-width: ${ScreenSizes.XSMALL}) {
    display: none;
  }
`


function Proposals() {
  return (
    <>
      <Proposal>
        <Circle>
          <img src={BonusesImage} alt="bonuses" />
        </Circle>
        <Text>
          <Title>Бонусы</Title>
          <Description>Ежедневные раздачи</Description>
        </Text>
      </Proposal>
      <Proposal>
        <Circle>
          <img src={IntuitionImage} alt="intuition" />
        </Circle>
        <Text>
          <Title>Интуиция</Title>
          <Description>Угадывай события</Description>
        </Text>
      </Proposal>
    </>
  );
}

export default Proposals;

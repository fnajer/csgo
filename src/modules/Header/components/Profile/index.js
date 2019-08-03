import React from 'react';
import styled from 'styled-components'
import * as ScreenSizes from 'shared/constants/screenSizes'
import AvatarImage from './avatar.png'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100%;
  @media (max-width: ${ScreenSizes.MEDIUM}) {
    display: none;
  }
`

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 45px;
  height: 45px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: #f0f2f5;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -8px;
    right: -8px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #f0f2f5;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #fe0623;
  }
`

const Text = styled.div`
  font-family: "MullerMedium";
  font-size: 16px;
  margin-right: 10px;
`
const Name = styled.span`
  display: block;
  margin-bottom: 3px;
  color: #27303c;
`
const Cash = styled.span`
  color: #17b96c;
  font-size: 19px;
`

function Profile() {
  return (
    <>
      <Wrapper>
        <Avatar>
          <img src={AvatarImage} alt="avatar" />
        </Avatar>
        <Text>
          <Name>Виктор Павлов</Name>
          <Cash>8 608.50 Р</Cash>
        </Text>
      </Wrapper>
    </>
  );
}

export default Profile

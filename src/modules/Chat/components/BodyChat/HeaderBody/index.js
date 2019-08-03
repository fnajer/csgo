import React from 'react';
import styled from 'styled-components'
import ChatImage from 'shared/icons/chat/chat.js'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  padding: 17px 25px 14px 25px;
  border-bottom: 1px solid #f5f6f9;
  svg {
    margin-right: 10px;
    transform: rotate(90deg);
    fill: #ff3c00;
  }
`
const Title = styled.div`
  display: flex;
  align-items: center;
`
const OnlineTracker = styled.div`
  display: flex;
  align-items: center;
`
const Status = styled.div`
  width: 7px;
  height: 7px;
  margin-right: 7px;
  background-color: #3abc33;
  border-radius: 50%;
`
const Count = styled.span`
  margin-right: 4px;
  font-weight: bold;
`

function HeaderBody() {
  return (
    <Header>
      <Title>
        <ChatImage />
        Чат
      </Title>
      <OnlineTracker>
        <Status />
        <Count>456</Count>онлайн
      </OnlineTracker>
    </Header>
  );
}

export default HeaderBody

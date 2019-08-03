import React from 'react';
import styled from 'styled-components'
import MessagesBlock from '../MessagesBlock'
import HeaderBody from './HeaderBody'
import SendBlock from './SendBlock'
import OutsideAlerter from 'shared/helpers/OutsideAlerter'

const BodyWrapper = styled.div`
  position: relative;
  left: 0;
  top: -150px;
  background-color: #e8eaee;
`

function Body({ isOpen, close }) {
  return (
    <OutsideAlerter isOpen={isOpen} close={close}>
      <BodyWrapper>
        <HeaderBody />
        <MessagesBlock />
        <SendBlock />
      </BodyWrapper>
    </OutsideAlerter>
  );
}

export default Body

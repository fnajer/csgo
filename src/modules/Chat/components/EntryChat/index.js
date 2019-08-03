import React from 'react';
import styled from 'styled-components'
import ChatImage from 'shared/icons/chat/chat.js'

const Entry = styled.div`
  position: relative;
  left: -50px;
  top: 0;
  display: ${props => props.isOpen ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  color: #333a44;
  font-size: 21px;
  transform: rotate(-90deg);
  text-transform: uppercase;
  background-color: #7d8ea0;
  border-radius: 0 0 10px 10px;
  svg {
    margin-right: 10px;
    fill: #ff3c00;
    transform: rotate(90deg);
  }
  :hover {
    svg {
      fill: #4696f3;
    }
  }
`

function EntryChat({ isOpen, onClick }) {
  return (
    <Entry 
      isOpen={isOpen} 
      onClick={onClick}
    >
      <ChatImage />
      Chat
    </Entry>
  );
}

export default EntryChat

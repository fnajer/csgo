import React, { useState } from 'react';
import styled from 'styled-components'
import Entry from './components/EntryChat'
import Body from './components/BodyChat'

const ChatWrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 50%;
`

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatWrapper>
      <Entry 
        isOpen={isOpen} 
        onClick={() => setIsOpen(true)}
      />
      <Body 
        isOpen={isOpen} 
        close={() => setIsOpen(false)} 
      />
    </ChatWrapper>
  );
}

export default Chat

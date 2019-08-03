import React from 'react';
import styled from 'styled-components'
import SmileImage from 'shared/icons/chat/smile.js'
import SendImage from 'shared/icons/chat/send.js'

const SendBlockWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
`
const TextArea = styled.textarea.attrs({
  placeholder: 'Введите сообщение'
})`
  width: 100%;
  height: 100%;
  border: none;
  padding: 25px 90px 5px 25px;
  font-family: "MullerRegular";
  font-size: 16px;
  resize: none;
  background-color: #f6f7f9;
`
const ChatControls = styled.div`
  position: absolute;
  top: 20px;
  right: 28px;
  width: 55px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  svg {
    fill #9fa8b4;
  }
  svg:hover {
    fill: #1b2129;
  }
`

function SendBlock() {
  return (
    <SendBlockWrapper>
      <TextArea />
      <ChatControls>
        <SmileImage />
        <SendImage />
      </ChatControls>
    </SendBlockWrapper>
  );
}

export default SendBlock

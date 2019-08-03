import React from 'react';
import styled, { css } from 'styled-components'

const MessageWrapper = styled.article`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`
const Avatar = styled.img.attrs(props => ({ 
  src: props.src, 
  alt: 'User message avatar'
}))`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`
const TextBlock = styled.div``
const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`
const Name = styled.span`
  font-size: 15px;
  color: #333a44;
`
const Date = styled.span`
  font-size: 11px;
  color: #6f7d9e;
`
const Triangle = css`
  content: '';
  position: absolute;
  top: -7px;
  left: 10px;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 0 0 9px;
  border-color: transparent transparent transparent #f6f7f9;
`
const Description = styled.section`
  position: relative;
  padding: 12px 20px;
  font-size: 14px;
  color: #455366;
  background-color: #f6f7f9;
  border-radius: 6px;
  ::after {
    ${Triangle}
  }
`

function Message(props) {
  const { avatar, name, date, desc } = props.message
  return (
    <MessageWrapper>
      <Avatar src={avatar} />
      <TextBlock>
        <Title>
          <Name>{name}</Name>
          <Date>{date}</Date>
        </Title>
        <Description>
          {desc}
        </Description>
      </TextBlock>
    </MessageWrapper>
  );
}

export default Message

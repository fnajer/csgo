import React from 'react';
import styled from 'styled-components'
import AvatarHugh from './chat-avatar-1.png'
import AvatarMatt from './chat-avatar-2.png'
import Message from './Message'

const Messages = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 320px;
  padding: 13px 25px 10px 25px;
  font-family: "MullerMedium";
`

const messages = [
  {
    avatar: AvatarHugh,
    name: 'Hugh Laurie',
    date: '1.04.2019, 10:18',
    desc: 'Спасибо спритам, что не выигрывают против NaVi'
  },
  {
    avatar: AvatarMatt,
    name: 'Matt LeBlanc',
    date: '1.04.2019, 10:22',
    desc: 'Почему у меня может не грузиться профиль в приложении?'
  }
]

function MessagesBlock() {
  return (
    <Messages>
      {messages.map(message => (
        <Message
          key={message.name}
          message={message}
        />
      ))}
    </Messages>
  );
}

export default MessagesBlock

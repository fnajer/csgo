import React from 'react';
import { Container } from 'react-grid-system';
import styled from 'styled-components'
import Header from 'modules/Header';
import Chat from 'modules/Chat';
import Divider from 'shared/helpers/Divider';

const AppWrapper = styled(Container)`
  padding: 0 !important;
`

function App() {
  return (
    <AppWrapper fluid>
      <Header />
      <Divider />
      <Chat />
    </AppWrapper>
  );
}

export default App;

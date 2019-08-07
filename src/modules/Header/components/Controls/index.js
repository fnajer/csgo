import React, { useState } from 'react';
import styled from 'styled-components'
import MobileMenu from '../MobileMenu';
import AddImage from 'shared/icons/add.svg'

const AddIcon = styled.img.attrs(props => ({ 
  src: AddImage, 
  alt: 'Add deposit'
}))`
`
const Deposit = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #17bb6d;
  cursor: pointer;
`


function Controls() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Deposit>
        <AddIcon />
      </Deposit>
      <MobileMenu 
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        close={() => setIsOpen(false)}
      />
    </>
  );
}

export default Controls

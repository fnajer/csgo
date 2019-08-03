import React from 'react';
import styled, { css } from 'styled-components'

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
  position: relative;
  cursor: pointer;
  :hover div {
    background-color: #7a8097;
  }
`

const HambergerIcon = styled.div`
  height: 3px;
  width: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 2px;
  background-color: #27303c;
  transform: translate(-50%,-50%) rotate(0deg);
  transition: width,opacity,top,left,transform-origin,transform ease 0.5s;
  &::before,&::after{
    content:"";
    position: absolute;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
    margin: auto;
    width: 50%;
    transition: width,opacity,top,left,transform-origin,transform ease 0.5s;
  }
  &::before{
    opacity: 0;
    top: -7px;
    left: 0;
    transform-origin: left;
  }
  &::after{
    bottom:-7px;
    right: 0;
    transform-origin: right;
  }
  ${props => props.isOpen ? openState : ''}
`

const openState = css`
  transform:translate(-50%,-50%) rotate(135deg);
  &::before{
    opacity: 1;
    top:0;
    transform: translateX(100%) rotate(-90deg);
  }
  &::after{
    bottom:0;
    transform: translateX(-100%) rotate(-90deg);
  }
`

function Icon({ exceptRef, isOpen, onClick }) {
  return (
    <IconWrapper ref={exceptRef} onClick={onClick}>
      <HambergerIcon isOpen={isOpen} />
    </IconWrapper>
  );
}

export default Icon
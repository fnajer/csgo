import React from 'react';
import styled, { css } from 'styled-components'
import SupportImage from 'shared/icons/headphones.svg'

const Menu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Support = styled.div`
  box-sizing: content-box;
  width: 45px;
  height: 45px;
  cursor: pointer;
  border-radius: 50%;
  margin: 1px;
  background: #7d8ea0 url(${SupportImage}) no-repeat center center;
  :hover {
    margin: 0;
    background-color: #0075f3;
    border: 1px solid #0075f3;
  }
`
const ItemBaseCss = css`
  padding: 0 25px;
  cursor: pointer;
  font-family: "MullerBold";
  font-size: 16px;
`
const Item = styled.div`
  ${ItemBaseCss}
  color: #4c5768;
  background-color: #fff;
  :hover div {
    padding-bottom: 21px;
    border-bottom: 4px solid #0075f3;
  }
`
const Text = styled.div`
  padding: 25px 0;
`

function Navigation() {
  return (
    <>
      <Menu>
        <Support />
        <Item>
          <Text>Cтавки</Text>
        </Item>
        <Item>
          <Text>Новости</Text>
        </Item>
        <Item>
          <Text>Рейтинги</Text>
        </Item>
        <Item>
          <Text>Скидки</Text>
        </Item>
        <Item>
          <Text>Техподдержка</Text>
        </Item>
        <Item>
          <Text>Как это работает?</Text>
        </Item>
      </Menu>
    </>
  );
}

export default Navigation

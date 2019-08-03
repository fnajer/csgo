import React, { useRef } from 'react';
import styled, { css } from 'styled-components'
import CubeImage from 'shared/icons/menu/cube.js'
import BalanceImage from 'shared/icons/menu/balance.js'
import HistoryImage from 'shared/icons/menu/history.js'
import OutImage from 'shared/icons/menu/out.js'
import PromoImage from 'shared/icons/menu/promo.js'
import SettingsImage from 'shared/icons/menu/settings.js'
import ExitImage from 'shared/icons/menu/exit.js'
import OutsideAlerter from 'shared/helpers/OutsideAlerter'
import HambergerIcon from './HambergerIcon'

const Triangle = css`
  content: '';
  position: absolute;
  top: -12px;
  right: 8px;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 13.5px 12px 13.5px;
  border-color: transparent transparent #fff transparent;
`

const MenuWrapper = styled.div`
  position: relative;
  margin-bottom: 5px;
`
const Menu = styled.nav`
  position: absolute;
  top: 40px;
  right: -10px;
  z-index: 5;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  width: 240px;
  box-shadow: 0px 0px 62px -10px rgba(0,0,0,0.75);
  ::after {
    ${Triangle}
  }
`
const SvgCss = css`
  position: absolute;
  left: 18px;
  top: 18px;
`
const PathCss = css`
  fill: #a2abb8;
  fill-rule: evenodd;
`
const ItemBaseCss = css`
  padding: 20px 30px 20px 55px;
  cursor: pointer;
  font-family: "MullerMedium";
  font-size: 15px;
  position: relative;
  svg {
    ${SvgCss}
    path {
      ${PathCss}
    }
  }
`
const Item = styled.div`
  ${ItemBaseCss}
  border-bottom: 1px solid #f6f7f9;
  color: #303441;
  background-color: #fff;
  :hover {
    padding-left: 51px;
    border-left: 4px solid #0b76ff;
    svg {
      left: 14px;
      path {
        fill: #0b76ff;
      }
    }
  }
`

const ExitItem = styled.div`
  ${ItemBaseCss}
  color: #8d99a8;
  background-color: #f6f7f9;
  padding-top: 25px;
  padding-bottom: 25px;
  svg {
    top: 22px;
  }
  :hover {
    color: #fff;
    background-color: #0f1118;
    svg {
      path {
        fill: #fff;
      }
    }
  }
`

function MobileMenu({ isOpen, onClick, close }) {
  const exceptionElement = useRef(null);
  return (
    <MenuWrapper>
      <HambergerIcon 
        exceptRef={exceptionElement} 
        isOpen={isOpen} 
        onClick={onClick}
      />      
      <OutsideAlerter 
        isOpen={isOpen} 
        close={close}
        exceptionElement={exceptionElement}
      >
        <Menu isOpen={isOpen}>
          <Item>
            <CubeImage />
            Мои ставки
          </Item>
          <Item>
            <BalanceImage />
            Пополнить баланс
          </Item>
          <Item>
            <OutImage />
            Вывести средства
          </Item>
          <Item>
            <HistoryImage />
            История операций
          </Item>
          <Item>
            <PromoImage />
            Ввести промо-код
          </Item>
          <Item>
            <SettingsImage />
            Настройки аккаунта
          </Item>
          <ExitItem>
            <ExitImage />
            Выйти из аккаунта
          </ExitItem>
        </Menu>
      </OutsideAlerter>
    </MenuWrapper>
  );
}

export default MobileMenu

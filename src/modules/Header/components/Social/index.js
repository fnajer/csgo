import React from 'react';
import styled, { css } from 'styled-components'
import TelegramImage from 'shared/icons/social/tg.js'
import SteamImage from 'shared/icons/social/steam.js'
import VkImage from 'shared/icons/social/vk.js'

const ItemCss = css`
  fill: #818d9e;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    fill: #1b2129;
  }
`
const TelegramItem = styled(TelegramImage)`
  ${ItemCss}
`
const SteamItem = styled(SteamImage)`
  ${ItemCss}
`
const VkItem = styled(VkImage)`
  ${ItemCss}
`

function Social() {
  return (
    <>
      <TelegramItem />
      <SteamItem />
      <VkItem />
    </>
  );
}

export default Social

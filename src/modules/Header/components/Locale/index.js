import React from 'react';
import styled from 'styled-components'
import EarthImage from 'shared/icons/earth.svg'
import UsaImage from 'shared/icons/usa.png'

const Selector = styled.div`
  padding: 15px 15px 11px 40px;
  border: 1px solid #e8ebf5;
  color: #3c4253;
  cursor: pointer;
`
const TimeSelector = styled(Selector)`
  background: transparent url(${EarthImage}) no-repeat 15px center;
  margin-right: 17px;
`
const LanguageSelector = styled(Selector)`
  padding-left: 43px;
  background: transparent url(${UsaImage}) no-repeat 15px center;
`
const Triangle = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 6px;
  border-style: solid;
  border-width: 10px 5px 0 5px;
  border-color: #3c4252 transparent transparent transparent;
`

function Locale() {
  return (
    <>
      <TimeSelector>
        8:44
        <Triangle />
      </TimeSelector>
      <LanguageSelector>
        EN
        <Triangle />
      </LanguageSelector>
    </>
  );
}

export default Locale

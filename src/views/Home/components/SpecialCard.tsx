import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/special/koge-partnership.png');
  background-repeat: no-repeat;
  background-position: middle center;
  min-height: 400px;
  min-width: 750px;
  width:750px;
  height:400px;
  padding:0px;
  margin:0px;
  height:400px
  align-self:center;
  margin:auto;
  margin-bottom:10%;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const SpecialCard = () => {


  return (
      <a href="/farms">
    <StyledFarmStakingCard>
      <CardBody/>
    </StyledFarmStakingCard>
      </a>
  )
}

export default SpecialCard

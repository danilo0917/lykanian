import React from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import { usePreSaleContract } from 'hooks/useContract'
import Hero from './components/Hero'
import PresaleContribute from './components/PresaleContribute'
import Divider from './components/Divider'


const Presale = () => {
  const { account } = useWallet()
  // presale contract address
  // const presaleContract = "0x74908A72D1B615Cd983D8915E364032c849125a6"
  const presaleContract = "0x08D8F902E4653615E25D150727df3EC2d1B4bD44"

  // token address
  // const currencyAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56"
  const currencyAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56"
  const contract = usePreSaleContract(presaleContract)
  return(
    <>
      <Page>
      <Hero />
      {/* <Divider /> */}
      <PresaleContribute
        address = {presaleContract}
        currency = "BUSD"
        currencyAddress = {currencyAddress}
        tokenDecimals = {18}
        contract = {contract}
      />
      </Page>
    </>
  )
}

export default Presale

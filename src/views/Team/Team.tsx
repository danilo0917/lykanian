import React from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import Hero from './components/Hero'
import Divider from './components/Divider'
import TeamMemberCard from './components/TeamMemberCard'

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const description1 = "Programmer, CEO of lemonswap project, Stockholm, Sweden."
const description2 = "Dev of lemonswap project, Los Angeles, California, USA."
const description3 = "Head of Financial department of lemonswap project, Stockholm, Sweden."
const description4 = "Head of marketing department of lemonswap project, Trento, Italy."

const Team = () => {
  return(
    <>
      <Page>
      <Hero />
      <Divider />
      <Cards>
        <TeamMemberCard avatar="/images/teams/member-1.jpg" description={description1} name="Fredrik Johannes" linkedIn="https://www.linkedin.com/in/fredrik-gg/"/>
        <TeamMemberCard avatar="/images/teams/member-2.jpg" description={description2} name="Joseph Piper" linkedIn="https://www.linkedin.com/in/joseph-piper-defi/"/>
        <TeamMemberCard avatar="/images/teams/member-3.jpg" description={description3} name="Jan Strom" linkedIn="https://www.linkedin.com/in/jan-storm-b41175218/"/>
        <TeamMemberCard avatar="/images/teams/member-4.jpg" description={description4} name="Ferdinand Martino" linkedIn="https://www.linkedin.com/in/ferdinand-martino/"/>
        
      </Cards>
      </Page>
    </>
  )
}

export default Team

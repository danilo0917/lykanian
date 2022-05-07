import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { TranslateString } from 'utils/translateTextHelpers'
import { BSC_BLOCK_TIME } from 'config'
import { getWeb3 } from 'utils/web3'
import styled from 'styled-components'
import { useMasterchef } from 'hooks/useContract'
import { CardHeader, Heading, Link, BaseLayout, CardBody, Card } from '@pancakeswap-libs/uikit'
import { getMasterChefAddress } from 'utils/addressHelpers'
import useBlock from '../hooks/useBlock'
import getTimePeriods from '../utils/getTimePeriods'
import useBlockCountdown from '../hooks/useGetBlockCountdown'

const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400

const timerProps = {
  isPlaying: true,
  size: 89,
  strokeWidth: 8,
  trailColor: '#E9EAEB',
}

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  )
}

const StyledTimerCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

// eslint-disable-next-line no-bitwise
const getTimeSeconds = (time) => (minuteSeconds - time) | 0
// eslint-disable-next-line no-bitwise
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0
// eslint-disable-next-line no-bitwise
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0
// eslint-disable-next-line no-bitwise
const getTimeDays = (time) => (time / daySeconds) | 0


function secondsToDhms(sec) {
    const days = Math.floor(sec / (3600*24));
    const hours = Math.floor(sec % (3600*24) / 3600);
    const minutes = Math.floor(sec % 3600 / 60);
    const seconds = Math.floor(sec % 60);
    return {days, hours, minutes, seconds};
}
const TimerBox = styled.div`
  display: flex;
  justify-content: center;
  align: center;
  font-family: sans-serif;
  text-align: center;
  margin-top:50px;
`

const Layout = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 6;
      width: 100%;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 3;
    }
  }
`
// START BLOCK: 15751269
// END BLOCK: 18751269

// const BEGIN_TIME = 1627887161; // Monday, August 2, 2021 4:00:00 PM GMT
const BEGIN_TIME = 1638201600; // Monday, August 2, 2021 4:00:00 PM GMT
const HomePageCountdown =() => {
    // const currentBlock = useBlock();
    const tarBlock = 15751269
    const startTime = Date.now() / 1000
    const remainingTime = (BEGIN_TIME - startTime);
    const days = Math.ceil(remainingTime / daySeconds)

    const daysDuration = days * daySeconds
    return (
      <StyledTimerCard>
        <CardBody>
          <Heading size="lg" mb="24px">
            Presale Staring
          </Heading>
          <TimerBox>
        <Layout>
          <CountdownCircleTimer
            {...timerProps}
            colors="#ffd000"
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime }) => renderTime('days', getTimeDays(daysDuration - elapsedTime))}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#ffd000"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > hourSeconds, 10]}
          >
            {({ elapsedTime }) => renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#ffd000"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > minuteSeconds, 10]}
          >
            {({ elapsedTime }) => renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#ffd000"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > 0, 10]}
          >
            {({ elapsedTime }) => renderTime('seconds', getTimeSeconds(elapsedTime))}
          </CountdownCircleTimer>
        </Layout>
        
      </TimerBox>
        </CardBody>
      </StyledTimerCard>
    )
}

export default HomePageCountdown

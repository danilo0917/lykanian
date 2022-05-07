import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Link, ResetCSS } from '@pancakeswap-libs/uikit'
import useToast from 'hooks/useToast'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import Image from 'views/Nft/components/Image'
import styled from 'styled-components'
import { ToastListener } from './contexts/ToastsContext'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'
import GlobalStyle from './style/Global'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Presale = lazy(() => import('./views/Presale'))
const Team = lazy(() => import('./views/Team'))
// const Lottery = lazy(() => import('./views/Lottery'))
const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))


let didAskToJoinTelegram = false;

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  const { toastSuccess} = useToast()
  const v = Math.random();
  if (v < 0.3 && !didAskToJoinTelegram){
    const action = {text:"Join now", url:"https://t.me/MOOBDAO"}
    toastSuccess("Have you joined our Telegram community?", "Come chat with us!", action);
  }
  didAskToJoinTelegram = true;
  
    

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Presale />
            </Route>
            <Route path="/presale" exact>
              <Presale />
            </Route>
            {/* <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/nests">
              <Farms tokenMode/>
            </Route>
          
            <Route path="/pools">
             <Pools />
            </Route> */}
            {/* <Route path="/team">
             <Team />
            </Route> */}
            {/* <Route path="/lottery"> */}
            {/*  <Lottery /> */}
            {/* </Route> */}
            {/* <Route path="/ifo"> */}
            {/*  <Ifos /> */}
            {/* </Route> */}
            {/* <Route path="/nft"> */}
            {/*  <Nft /> */}
            {/* </Route> */}
            {/* Redirect */}
            <Route path="/staking">
             <Redirect to="/pools" />
            </Route>
            <Route path="/syrup">
             <Redirect to="/pools" />
            </Route>
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>

        </Suspense>
      </Menu>
      {/* <NftGlobalNotification /> */}
      <ToastListener />
    </Router>
  )
}


export default React.memo(App)

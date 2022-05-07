import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Skeleton, Text } from '@pancakeswap-libs/uikit'

import useI18n from 'hooks/useI18n'

const StyledTeamMemberCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  min-height: 320px;
  min-width:300px;
  margin-bottom:30px;
`
const CirclarImage = styled.img`
    border-radius: 50%;
    width:150px;
    height:150px;
    border: 4px solid rgba(200,200,200,0.4);

`;

const Header = styled.div`
    font-weight: 700;
    font-size: 26px;
    margin-top: 10px;
`;
const TeamCardBody = styled(CardBody)`
    width: 100% !important;
    height: 100%;
    margin: auto;
    text-align: center;
    
`;
const Description = styled.div`
    font-size: 20px;
    padding-top: 16px;
    `;

const Link = styled.a`
  margin-top: 3em;
  text-decoration: none;
  color: #008a81;
  padding-top: 4em;
`;

export interface Props {
    avatar: string
    name: string
    description: string
    linkedIn: string
  }

const TeamMemberCard: React.FC<Props> = ({
    avatar,
    name,
    description,
    linkedIn
}) => {

  return (
    <StyledTeamMemberCard>
        <TeamCardBody style={{ width: '18rem' }}>
            <CirclarImage src={avatar} alt="Team member" />
            <Header>{name}</Header>
            <Description>
               {description}
            </Description>
            <Link href={linkedIn} target="_blank"><i className="fab fa-linkedin fa-fw fa-lg" style={{"marginTop":"10px"}}/></Link>
            
        </TeamCardBody>
    </StyledTeamMemberCard>
  )
}

export default TeamMemberCard

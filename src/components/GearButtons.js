import React from 'react'
import styled, { keyframes } from 'styled-components'
import DeveloperGear from '../images/developers.svg'
import ContactGear from '../images/contact.svg'
import ClientGear from '../images/clients.svg'
import ApplyGear from '../images/apply.svg'
import InternGear from '../images/interns.svg'
import SendGear from '../images/send.svg'
import SponsorsGear from '../images/sponsors.svg'
import { gearAnimation } from '../utilities'

const AnimationWrapper = styled.div`
  svg {
    width: 200px;
    cursor: pointer;
    ${gearAnimation};
  }
`
const GearButtons = () => (
  <AnimationWrapper>
    <DeveloperGear />
    <ContactGear />
    <ClientGear />
    <InternGear />
    <SponsorsGear />
    {/* <ApplyGear /> */}
    {/* <SendGear /> */}
  </AnimationWrapper>
)
export default GearButtons

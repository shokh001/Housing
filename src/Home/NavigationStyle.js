import styled from 'styled-components'
import {ReactComponent as logo} from '../assets/icons/logo.svg'
import {ReactComponent as chevronDown} from '../assets/icons/chevron-down-white.svg'
import {ReactComponent as phone} from '../assets/icons/phone.svg'
import {ReactComponent as user} from '../assets/icons/user.svg'
import {ReactComponent as ciclePlus} from '../assets/icons/circle-plus.svg'
import {ReactComponent as burger} from '../assets/icons/burger-mobile.svg'
import {ReactComponent as eks} from '../assets/icons/eks.svg'
import {ReactComponent as chevronRight} from '../assets/icons/chevron-right.svg'


export const Container = styled.div`
  width: 90%;
  display: block;
  margin: 0 auto;
`

export const Top = styled.div`
  background-color: gray;
  padding-top: 40px;
  padding-bottom: 150px;

  @media (max-width: 600px) {
    padding-bottom: 30px;
    padding-top: 0;
  }
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    padding: ${({navbar}) => navbar? '10px 0': '0'};
    background-color: #0D263B;
  }
`

export const NavMobile = styled.div`
width: 72%;
height: 100vh;
background-color: #fff;
padding: 10px 20px;
position: absolute;
top: 0;
left: 0;
transition: all .4s linear;

@media (min-width: 600px) {
   display: none;
  }


  transform: ${(props) => props.click? 'translateX(0)' : 'translateX(-100%)'};
`



export const BurgerMobile = styled(burger)`
display:  none;

@media (max-width: 600px) {
   display: block;
  }
`

export const LogoText = styled.a`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  line-height: 32px;
  /* margin-left: 12px; */
  text-decoration: none;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: ${({mobile}) => mobile? 'space-between': 'default'};
    color: ${({mobile}) => mobile? '#0D263B': '#fff'};
    /* width: 100%; */
  }
`



export const LogoIcon = styled(logo)`
margin-right: 15px;

& path {
  fill: ${({blue}) => blue? '#0061DF': '#fff'};
}
`

export const EksIcon = styled(eks)`
transform: ${(props) => props.click? 'translateX(0)' : 'translateX(-100%)'};
margin-left: 20px;
`

export const ChevronRight = styled(chevronRight)`

`

export const Links = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: ${({mobile}) => mobile? '100%': 'default'};
    margin-top: ${({mobile}) => mobile? '10px': '0'};
  }
`

export const Link_ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  @media (max-width: 600px) {
   display: ${({mobile}) => mobile? 'block': 'none'};
   width: 100%;
   padding-left: 0;
   margin-bottom: 10px;
  }
`

export const Link_li = styled.li`
  margin-right: 20px;
  display: flex;
  align-items: center;

  @media (max-width : 600px) {      
      border-top: 1px solid #E6E9EC;
      width: 100%;
      padding: 12px 0;
      justify-content: space-between;
  }

  :last-child {
    margin-right: 0;
  }
`

export const Link_a = styled.a`
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: #fff;
  text-decoration: none;
  position: relative;

  ::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: all 0.3s linear;
  }

  :hover::after {
    width: 40px;
  }

  @media (max-width: 600px) {
   color: #0D263B;
  }  
`

export const ChevronDown = styled(chevronDown)`
    margin-left: 10px;
`

export const Call = styled.a`
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: #fff;
  text-decoration: none;
  display: flex; 
  align-items: center;
  margin-right: 30px;

  @media (max-width: 600px) {
   display: none;
  }
`
export const PhoneIcon = styled(phone)`
  margin-right: 10px;
  margin-left: 30px;
`

export const UserICon = styled(user)`

`

export const Button = styled.button`
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: #0061DF;
  padding: 20px 12px;
  background-color: #fff;
  border: none;
  outline: none;
  display: flex; 
  align-items: center;
  margin-left: 50px;
  border-radius: 3px;

  @media (max-width: 600px) {
    display: ${({mobile}) => mobile? 'block': 'none'};
    color: #FFFFFF;
    background: #0061DF;
    width: 96%;
    margin: 0 auto;
  }
`

export const CirclePlusIcon = styled(ciclePlus)`
  margin-right: 10px;

  & path {
  fill: ${({mobile}) => mobile? '#fff': '#0061DF'};
}
`


import styled from 'styled-components'
import {ReactComponent as trusted} from '../assets/icons/trusted.svg'
import {ReactComponent as home} from '../assets/icons/house.svg'
import {ReactComponent as calculator} from '../assets/icons/calculator.svg'
import {ReactComponent as maps} from '../assets/icons/maps.svg'
import {ReactComponent as profile} from '../assets/icons/profile.svg'

export const ChooseUsWrap = styled.div`
background-color: #F6F8F9;
padding-top: 100px;
padding-bottom: 100px;

@media (max-width: 600px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
export const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 600px) {
    flex-wrap: wrap;
    display: ${({test}) =>test? "none": "flex"};
  }
`

export const DivCarousel = styled.div`
@media (min-width: 600px) {
    display: none;
  }
`

export const TrustedIcon = styled(trusted)`
 & path {
     fill: #0061DF
 }
`
export const MapsIcon = styled(maps)`

`

export const HomeIcon = styled(home)`

`

export const CalcIcon = styled(calculator)`

`

export const IconWrap = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
`

export const CardWrap = styled.div`
width: 290px;
background-color: #ffffff;
box-sizing: border-box;
padding: 40px 30px;
border-radius: 3px;
position: relative;

@media (max-width: 600px) {
    padding: 40px 50px;   
  }

:hover {
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1); 
    
    ${TrustedIcon} {
        & path {
            fill: #ffffff;
        }
    }

    ${HomeIcon} {
        & path {
            fill: #ffffff;
        }
    }

    ${CalcIcon} {
        & path {
            fill: #ffffff;
        }
    }

    ${MapsIcon} {
        & path {
            fill: #ffffff;
        }
    }

    ${IconWrap} {
        background-color: #0061DF;
    }
}

@media (max-width: 600px) {
    width: 100%;
    margin-bottom: 28px;

    :last-child {
        margin-bottom: 0;
    }
  }
`

export const ProfileImg = styled(profile)`
width: 70px;
height: 90px;
position: absolute;
left: 36%;
bottom: -43px;

@media (max-width: 600px) {
    left: 43%;    
  }
`

export const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const CardTitle = styled.div`
font-weight: 600;
font-size:  ${({title}) => title? "16px": "18px"};
line-height: 23px;
text-align: center;
color: #0D263B;
margin-bottom: ${({title}) => title? "9px": "17px"};
margin-top:  ${({title}) => title? "40px": "25px"};
`

export const CardText = styled.div`
font-weight: normal;
font-size: ${({title}) => title? "16px": "14px"};
line-height: 24px;
text-align: center;
color: #696969;

`
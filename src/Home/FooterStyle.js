import styled from 'styled-components'
import {ReactComponent as location} from '../assets/icons/location.svg'
import {ReactComponent as facebook} from '../assets/icons/facebook.svg'
import {ReactComponent as twitter} from '../assets/icons/twitter.svg'
import {ReactComponent as instagram} from '../assets/icons/instagram.svg'
import {ReactComponent as linkedIn} from '../assets/icons/linkedIn.svg'
import {ReactComponent as email} from '../assets/icons/email.svg'
import {ReactComponent as phone} from '../assets/icons/phone.svg'
import {ReactComponent as telegram} from '../assets/icons/telegram.svg'
import {ReactComponent as logo} from '../assets/icons/logo.svg'
import {ReactComponent as up} from '../assets/icons/chevron-up.svg'

export const FooterWrap = styled.div`

`

export const LocationIcon = styled(location)`
margin-right: 15px;
`

export const Facebook = styled(facebook)`
margin-right: 30px;
`

export const Twitter = styled(twitter)`
margin-right: 30px;
`

export const Instagram = styled(instagram)`
margin-right: 30px;
`

export const LinkedIn = styled(linkedIn)`

`

export const Email = styled(email)`
margin-right: 15px;
`

export const Phone = styled(phone)`
margin-right: 15px;
`

export const Telegram = styled(telegram)`

`
export const ChevronUp = styled(up)`

`

export const Logo = styled(logo)`
margin-right: 12px;
`

export const LogoText = styled.div`
font-weight: bold;
font-size: 25px;
line-height: 32px;
color: #FFFFFF;
`

export const Register = styled.div`
padding: 50px 0;
text-align: center;
background: #0061DF;

@media (max-width: 600px) {
    padding: 80px 0;
}
`

export const Title = styled.div`
font-weight: 600;
font-size: 30px;
line-height: 38px;
color: #FFFFFF;

@media (max-width: 600px) {
    font-size: 20px;
    line-height: 25px;
}
`

export const Text = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
margin-top: 20px;

@media (max-width: 600px) {
    margin-top: 10px;
}
`

export const Button = styled.button`
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #0061DF;
padding: 20px 50px;
margin-top: 30px;
outline: none;
border: none;
cursor: pointer;
background: #ffffff;
border-radius: 3px;
`

export const Foot = styled.div`
background: #0D263B;
padding: 100px 0;
border-bottom: 1px solid rgba(255, 255, 255, 0.15);

@media (max-width: 600px) {
    padding: 50px 0;
}
`

const GetDisplay = (item) => {
    switch(item) {
        case "fake": return "block"
        case "row": return "none"
        
        default : return "block"
    }
}

export const Row = styled.div`
display: flex;
justify-content: space-between;
align-items: ${({row}) => row? 'center': "top"};
flex-wrap: wrap;


@media (max-width: 600px) {
    display: ${({row}) => row? 'none': "block"};
}
`

export const RowFake = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
display: none;

@media (max-width: 600px) {
    display: block;
}
`

export const Div = styled.div`
flex-direction: column;

@media (max-width: 600px) {
    width: 100%;
    margin-bottom: 50px;
    :last-child{
        margin-bottom: 0;
    }
}
`

export const FootTitle = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;

@media (max-width: 600px) {
    margin-bottom: 30px;
}
`

export const FootLink = styled.a`
font-weight: normal;
text-decoration: none;
font-size: 14px;
color: #FFFFFF;
`

export const LinkWrap = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
`

export const InputWrap = styled.div`
display: flex;
margin-top: 20px;
align-items: center;
height: 60px;
width: 100%;
background-color: #ffffff;
border-radius: 3px;
padding-right: 2px;
`

export const Input = styled.input`
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
padding: 10px 0 10px 10px;
outline: none;
border: none;

@media (max-width: 600px) {
    width: 86%;
}
`

export const TelegramWrap = styled.div`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background: #0061DF;
border-radius: 3px;

@media (max-width: 600px) {
    position: ${({telegram})=> telegram? "absolute": "default"};
    right: 0;
    bottom: 0;
}
`

export const FootFinally = styled.div`
padding: 30px 0;
background: #0D263B;
position: relative;
`

export const Descr = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;

@media (max-width: 600px) {
    text-align: center;
    width: 220px;
    margin: 0 auto;
}
`

export const FootRow = styled.div`
display: flex;
align-items: center;

@media (max-width: 600px) {
    justify-content: center;
    margin-bottom: 20px;
}

`

export const FinallyLink = styled.a`
font-weight: normal;
font-size: 14px;
line-height: 18px;
text-align: right;
color: #FFFFFF;
text-decoration: none;

@media (max-width: 600px) {
    margin-right: 20px;

    :last-child{
        margin-right: 0;
    }
}
`



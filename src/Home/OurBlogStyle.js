import styled from 'styled-components'
import {ReactComponent as user} from '../assets/icons/user-gray.svg'
import {ReactComponent as calendar} from '../assets/icons/calendar-gray.svg'


export const UserIcon = styled(user)`

`
export const CalendarIcon = styled(calendar)`

`
export const BlogWrapper = styled.div`
background: #F6F8F9;
padding: 100px 0;

@media (max-width: 600px) {
padding: 50px 0;
}
`

export const CardWrap = styled.div`
width: 23.5%;
border: 1px solid #E6E9EC;
box-sizing: border-box;
border-radius: 3px;
:hover {
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);    
}

@media (max-width: 600px) {
width: 100%;
margin-bottom: 26px;
:last-child{
    margin-bottom: 0;
}
}
`

export const CardHeader = styled.div`
width: 100%;
height: 200px;
background-color: #E6E9EC;
`

export const ButtonHeader = styled.button`
background: ${({button}) => button? '#0061DF': '#0D263B'} ;
border-radius: 3px;
padding: 5px 12px;
font-weight: 600;
font-size: 10px;
line-height: 13px;
border: none;
outline: none;
cursor: pointer;
color: #FFFFFF;
` 

export const ButtonWrap = styled.div`
padding: 20px;
`

export const CardBody = styled.div`
 padding: 20px;
 border-bottom: 1px solid #E6E9EC;
 background: #FFFFFF;
`

export const CardTitle = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 28px;
color: #0D263B;
margin-top: 15px;
`

export const CardText = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
margin-top: 8px;
margin-bottom: 15px;
`

export const WrapIcons = styled.div`
display: flex;
align-items: center;
`

export const  Wrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;

`

export const IconText = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
margin-left: 12px;
`

export const Link = styled.a`
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-decoration-line: underline;
text-transform: uppercase;
color: #0061DF;

`

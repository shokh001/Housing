import styled from 'styled-components'
import {ReactComponent as home} from '../assets/icons/house-carousel.svg'
import {ReactComponent as apartment} from '../assets/icons/apartment.svg'
import {ReactComponent as office} from '../assets/icons/business-and-trade.svg'
import {ReactComponent as villa} from '../assets/icons/villa.svg'
import {ReactComponent as room} from '../assets/icons/living-room.svg'


export const CardWrap = styled.div`
width: 92%;
background-color: gray;
box-sizing: border-box;
text-align: center;
border-radius: 3px;
padding-top: 80px;
padding-bottom: 30px;
margin: 0 auto;
:hover {
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);    
}

@media (max-width: 600px) {
    width: 92%;
}

`



export const CardText = styled.div`
font-weight: 600;
font-size: 18px;
line-height: 23px;
color: #FFFFFF;
margin-top: 50px;
`

export const HomeIcon = styled(home)`

`
export const ApartmentIcon = styled(apartment)`

`
export const OfficeIcon = styled(office)`

`
export const VillaIcon = styled(villa)`

`

export const RoomIcon = styled(room)`

`


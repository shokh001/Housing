import styled from 'styled-components'
import {ReactComponent as bed} from '../assets/icons/bed.svg'
import {ReactComponent as bath} from '../assets/icons/bath.svg'
import {ReactComponent as car} from '../assets/icons/car.svg'
import {ReactComponent as ruler} from '../assets/icons/ruler.svg'
import {ReactComponent as expansion} from '../assets/icons/expansion.svg'
import {ReactComponent as circlePlus} from '../assets/icons/circle-plus.svg'
import {ReactComponent as heart} from '../assets/icons/heart-bg.svg'


export const CardWrap = styled.div`
width: 285px;
border: 1px solid #E6E9EC;
box-sizing: border-box;
border-radius: 3px;
margin: 0 auto;
:hover {
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);    
}

@media (max-width: 600px) {
    width: 100%;
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
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

export const CardBody = styled.div`
 padding: 20px;
 border-bottom: 1px solid #E6E9EC;
`

export const CardTitle = styled.div`
 font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #0D263B;
`

export const CardText = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
margin-top: 8px;
`

export const WrapIcons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: ${({WrapIcons}) => WrapIcons? '0': "23px"};
`

export const  Wrap = styled.div`
text-align: ${({Footer}) => Footer? 'left': 'center'};
`

export const BedIcon = styled(bed)`

`
export const BathIcon = styled(bath)`

`
export const CarIcon = styled(car)`

`
export const RulerIcon = styled(ruler)`

`

export const IconText = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #696969;
`

export const CardFooter = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const OldCost = styled.div`
font-weight: normal;
font-size: 12px;
line-height: 15px;
text-decoration-line: line-through;
color: #696969;
`

export const NewCost = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 20px;
margin-top: 4px;
color: #0D263B;
`
export const ExpansionIcon = styled(expansion)`

`
export const CirclePlusIcon = styled(circlePlus)`
& path {
    fill: #696969;
}
margin-right: 20px;
margin-left: 20px;
`
export const HeartIcon = styled(heart)`

`

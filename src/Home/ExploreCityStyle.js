import styled from 'styled-components'
import {ReactComponent as facebook} from '../assets/icons/facebook.svg'
import {ReactComponent as twitter} from '../assets/icons/twitter.svg'
import {ReactComponent as instagram} from '../assets/icons/instagram.svg'
import {ReactComponent as linkedIn} from '../assets/icons/linkedIn.svg'

export const Facebook = styled(facebook)`
display:none;
`

export const Twitter = styled(twitter)`
display:none;
`

export const Instagram = styled(instagram)`
display:none;
`

export const LinkedIn = styled(linkedIn)`
display:none;
`

export const Wrap = styled.div`
background-color: #ffffff;
padding-top: 100px;
padding-bottom: 100px;
border-bottom: ${({ouragents}) => ouragents? 'none': "1px solid #E6E9EC"};

@media (max-width: 600px) {
   padding: 50px 0;
}

`
export const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 600px) {
        display: ${({agents})=>agents? "none" :"flex"};
}

`

export const DivWrap = styled.div`
@media (min-width: 600px) {
        display: none;
}
`

export const CardWrap = styled.div`
width: ${({ouragents}) => ouragents? '19%': "290px"};
height: ${({ouragents}) => ouragents? '280px': "270px"};
display: ${({ouragents}) => ouragents? 'flex': "block"};
justify-content: center;
align-items: center;
margin-bottom: 20px;
background-color: #adadad;
box-sizing: border-box;
border-radius: 3px;
position: relative;
:hover {
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
    background-color : #888;
    
    ${Facebook} {
        display: block;
  }

    ${Instagram} {
            display: block;
    }

    ${Twitter} {
            display: block;
    }

    ${LinkedIn} {
            display: block;
    }
}

@media (max-width: 600px) {
   width: ${({ouragents}) => ouragents? "90%": "48%"};
   margin: ${({ouragents}) => ouragents? "0 auto 40px": "0 0 20px 0"};
}

`



export const CardTitle = styled.div`
font-weight: 600;
font-size: 18px;
line-height: 23px;
text-align: center;
position: relative;
margin-top: ${({ouragents}) => ouragents? '0': "210px"};
color: ${({ouragents}) => ouragents? '#0D263B': "#fff"};
`

export const CardText = styled.div`
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-align: center;
color: ${({ouragents}) => ouragents? '#0D263B': "#fff"};
margin-top: 8px;
`

export const WrapTitle = styled.div`
width: 85%;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
border-radius: 3px;
padding: 20px 0;
position: absolute;
bottom: -42px;
left:17px;
text-align: center;
background-color: #ffffff;
`

export const WrapIcons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 60%;
`
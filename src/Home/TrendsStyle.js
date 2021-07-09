import styled from 'styled-components'

export const TrendswWrap = styled.div`
padding: 200px 0;
text-align: center;
background-color: gray;

@media (max-width: 600px) {
    padding: 120px 20px;
}
`

export const Title = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
`

export const Text = styled.div`
font-weight: 600;
font-size: 30px;
line-height: 45px;
color: #FFFFFF;
width: 530px;
display: block;
margin: 0 auto;
margin-top: 20px;

@media (max-width: 600px) {
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    width: auto;
}
`

export const Button = styled.button`
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #FFFFFF;
padding: 20px 50px;
margin-top: 30px;
outline: none;
border: none;
cursor: pointer;
background: #0061DF;
border-radius: 3px;

@media (max-width: 600px) {
    margin-top: 15px;
}
`
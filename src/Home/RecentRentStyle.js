import styled from 'styled-components'

export const RecentRentWrap = styled.div`

@media (max-width: 600px) {
    width: 50%;
    margin-bottom: ${({wrap}) => wrap? "30px": "0"};
}

`

export const RentWrap = styled.div`
padding-bottom: 100px;
`

export const Info = styled.div`
/* width: 100%; */
padding: 40px;
display: flex; 
align-items: center;
justify-content: space-between;

@media (max-width: 600px) {
    flex-wrap: wrap;
    padding: 60px 30px;
}
`


export const Number = styled.div`
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-align: center;
color: #0061DF;
`

export const Descr = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 24px;
text-align: center;
text-transform: uppercase;
color: #696969;
`

export const Line = styled.div`
width: 100%;
background-color: #E6E9EC;
height: 1px;
margin-bottom: 20px;

@media (max-width: 600px) {
   margin-bottom: 0;
}
`
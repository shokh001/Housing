import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 60px;

    @media (max-width: 600px) {
      padding-bottom: 30px;
}
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #0D263B;

  margin-top: ${({recent}) => recent? '80px': "0"};

  @media (max-width: 600px) {
    font-size: 22px;
    line-height: 28px;
  }
`

export const Text = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #696969;
  margin-top: 10px;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 20px;
  }
`

export const Item = styled.div`
    width: 275px;
    height: 400px;
    background-color: coral;
`
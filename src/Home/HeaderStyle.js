import styled from 'styled-components'
import {ReactComponent as search} from '../assets/icons/search-gray.svg'
import {ReactComponent as burger} from '../assets/icons/burger-gray.svg'


export const Header = styled.div`
  text-align: center;
`

export const MiniTitle= styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  line-height: 20px;
  text-transform: uppercase;
  margin-top: 150px;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 200px;
  }
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 60px;
  line-height: 76px;
  color: #fff;
  margin: 0;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 38px;
    margin-top: 15px;
    margin-bottom: 100px;
  }
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-left: 0;
`

export const Li = styled.li`
  margin-right: 30px;
  :last-child {
      margin-right: 0;
  }
`

export const Link = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: #fff;
  position: relative;
`

export const CenterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

export const FormWrap = styled.div`
  padding: 20px;
  background-color: #fff;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 1000px;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;

  @media (max-width: 600px) {
    display: block;
    padding-top: 0;
  }
`

export const Box = styled.div`
text-align: left;
`

export const TitleBox = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: #0D263B;
  margin: 0;
  margin-left: 4px;
  text-align: left;

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`

export const Select = styled.select`
  margin-top: 10px;
  outline: none;
  border:none;
  border-bottom: 2px solid #E6E9EC;
  padding-right: 100px;
  padding-bottom: 8px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #696969;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Option = styled.option`
  
`

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #E6E9EC;
`

export const Input = styled.input`
  margin-top: 10px;
  border: none;
  outline: none;
  padding-bottom: 8px;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const SearchIcon = styled(search)`
    & path {
        fill : ${({search})=> search? 'white': '#696969'}
    }
    margin-right: ${({search})=> search? '10px': '0'};
`
export const BurgerWrap = styled.div`
  display: flex;
  align-items: center;
  /* text-align: left; */
  margin-right: 15px;

  @media (max-width: 600px) {
    margin-top: 15px;
    margin-bottom: 20px;
  }
`

export const BurgerText = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #0D263B;
  width: 68px;
  text-align: left;
  
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const BurgerIcon = styled(burger)`
  margin-right: 10px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 13px;
  color: #FFFFFF;
  background: #0061DF;
  border-radius: 3px;
  border: none;
  line-height: 17px;
  padding: 20px 38px;

  @media (max-width: 600px) {
    width: 100%;
  }
`


import React, { Component } from 'react';
import { Box, BurgerText, BurgerWrap, CenterForm, SearchIcon, FormWrap, Header, Li, Link, MiniTitle, Option, Select, TitleBox, Title, Ul, InputWrap, Input, BurgerIcon, Button } from './HeaderStyle';
import { Container } from './NavigationStyle';

export default class HeaderBanner extends Component {
  render() {
    return (
      <Header> 
         <Container>
         <MiniTitle>It's great to be home!</MiniTitle>

<Title>Find Your Perfect Home</Title>

<Ul>
  <Li>
      <Link href="#" className='active'>Buy</Link>
  </Li>

  <Li>
      <Link href="#">Rent</Link>
  </Li>

  <Li>
      <Link href="#">Sold</Link>
  </Li>
</Ul>

<CenterForm>
  <FormWrap>
      <Box>
        <TitleBox>TYPE</TitleBox>
        <Select>
          <Option value='0'>Property Type</Option>
          <Option value='1'>Type</Option>
          <Option value='2'>Type</Option>
          <Option value='3'>Type</Option>
        </Select>
      </Box>

      <Box>
        <TitleBox>LOCATION</TitleBox>
        <Select>
          <Option value='1'>All Cities</Option>
          <Option value='0'>All Cities</Option>
          <Option value='2'>All Cities</Option>
          <Option value='3'>All Cities</Option>
        </Select>
      </Box>

      <Box>
        <TitleBox>SEARCH</TitleBox>
        <InputWrap>
          <Input placeholder='Enter Keywords' />
          <SearchIcon />
        </InputWrap>
      </Box>

      <BurgerWrap>
        <BurgerIcon />
        <BurgerText>Advanced  Search</BurgerText>
      </BurgerWrap>
      
      <Button>
        <SearchIcon search/>
        Search
      </Button>
  </FormWrap>
</CenterForm>
         </Container>
      </Header>
    );
  }
}

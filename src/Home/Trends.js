import React, { Component } from 'react';
import {Button, Text, Title, TrendswWrap} from './TrendsStyle.js'

export default class Trends extends Component {
  render() {
    return (
      <TrendswWrap> 
          <Title>Trends</Title>
          <Text>
             Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
          </Text>

          <Button type='button'>Read more</Button>
      </TrendswWrap>
    );
  }
}

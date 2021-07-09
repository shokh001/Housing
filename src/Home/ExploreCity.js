import React, { Component } from 'react';
import { Text, Title } from './CarouselStyle';
import { Container } from './NavigationStyle';
import {Wrap, CardTitle, CardText, Div, CardWrap} from './ExploreCityStyle'

export default class ExploreCity extends Component {
  render() {

    const Data = [
        {
            id:1,        
            title:'Los Angeles',
            text:'15 Properties'
        },

        {
            id:2,        
            title:'New York',
            text:'7543 Properties'
        },

        {
            id:3,        
            title:'London',
            text:'23 Properties'
        },

        {
            id:4,        
            title:'Paris',
            text:'821 Properties'
        },   
        
        {
            id:5,        
            title:'Los Angeles',
            text:'15 Properties'
        },

        {
            id:6,        
            title:'New York',
            text:'7543 Properties'
        },

        {
            id:7,        
            title:'London',
            text:'23 Properties'
        },

        {
            id:8,        
            title:'Paris',
            text:'821 Properties'
        },


    ]

    return (
      <Wrap> 
          <Container>
            <Title>Explore Cities</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text> 

            <Div>
                {
                    Data.map(({id, title, text}) => {
                        return(
                            <CardWrap key={id}>
                                <CardTitle>{title}</CardTitle>

                                <CardText>{text}</CardText>
                            </CardWrap>
                        )
                    })
                }
            </Div>
          </Container>
      </Wrap>
    );
  }
}

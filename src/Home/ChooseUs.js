import React, { Component } from 'react';
import { Text, Title } from './CarouselStyle';
import { Container } from './NavigationStyle';
import {ChooseUsWrap, CardTitle, Icon, CardText, TrustedIcon, IconWrap, MapsIcon, CalcIcon, HomeIcon, Div, CardWrap} from './ChooseUsStyle'

export default class ChooseUs extends Component {
  render() {

    const Data = [
        {
            id:1,
            icon: 'trusted',
            title:'Trusted By Thousands',
            text:'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
        },

        {
            id:2,
            icon: 'home',
            title:'Wide Renge Of Properties',
            text:'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
        },

        {
            id:3,
            icon: 'calc',
            title:'Financing Made Easy',
            text:'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
        },

        {
            id:4,
            icon: 'maps',
            title:'See Neighborhoods',
            text:'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
        },    
    ]

    const ChooseIcon = (icon) => {
        switch(icon){
            case "trusted" : return <TrustedIcon color/>
            case "home" :return <HomeIcon />
            case "calc" :return <CalcIcon />
            case "maps" :return <MapsIcon />
        }
    }

    return (
      <ChooseUsWrap> 
          <Container>
            <Title>Why Choose Us</Title>
            <Text>We provide full service at every step</Text> 

            <Div>
                {
                    Data.map(({id, icon, title, text}) => {
                        return(
                            <CardWrap key={id}>
                                <Icon>
                                    <IconWrap col>
                                        {
                                            ChooseIcon(icon)
                                        }                                    
                                    </IconWrap>
                                </Icon>

                                <CardTitle>{title}</CardTitle>

                                <CardText>{text}</CardText>
                            </CardWrap>
                        )
                    })
                }
            </Div>
          </Container>
      </ChooseUsWrap>
    );
  }
}

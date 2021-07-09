import React, { Component } from 'react';
import { Text, Title } from './CarouselStyle';
import { Container } from './NavigationStyle';
import {Wrap, CardTitle, CardText, WrapIcons, Div, CardWrap, WrapTitle, Facebook, Twitter, Instagram, LinkedIn, DivWrap} from './ExploreCityStyle'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class OurAgents extends Component {
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
    ]

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


    return (
      <Wrap ouragents> 
          <Container>
            <Title>Meet Our Agents</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text> 

            <Div agents>
                {
                    Data.map(({id, title, text}) => {
                        return(
                            <CardWrap ouragents key={id}>
                                
                                <WrapIcons>
                                    <Facebook />
                                    <Twitter />
                                    <Instagram />
                                    <LinkedIn />
                                </WrapIcons>

                                <WrapTitle>
                                    <CardTitle ouragents >{title}</CardTitle>
                                    <CardText ouragents>{text}</CardText>
                                </WrapTitle>
                            </CardWrap>
                        )
                    })
                }
            </Div>

            <DivWrap>
                <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}                
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"                       
                >
                {
                        Data.map(({id, title, text}) => {
                            return(
                                <CardWrap ouragents key={id}>
                                    
                                    <WrapIcons>
                                        <Facebook />
                                        <Twitter />
                                        <Instagram />
                                        <LinkedIn />
                                    </WrapIcons>

                                    <WrapTitle>
                                        <CardTitle ouragents >{title}</CardTitle>
                                        <CardText ouragents>{text}</CardText>
                                    </WrapTitle>
                                </CardWrap>
                            )
                        })
                    }
                </Carousel>  
            </DivWrap>
          </Container>
      </Wrap>
    );
  }
}

import React, { Component } from 'react';
import { Container } from './NavigationStyle';
import {RecentRentWrap, RentWrap, Info, Number, Descr, Line } from './RecentRentStyle';
import {  Text, Title } from './CarouselStyle';
import {CardWrap, HeartIcon, ExpansionIcon,  CirclePlusIcon, NewCost, CardHeader, RulerIcon, CarIcon, BathIcon, CardBody,CardTitle, CardText, WrapIcons, Wrap, BedIcon, IconText, CardFooter, OldCost, ButtonHeader, ButtonWrap} from './CardStyle'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class RecentRent extends Component {
  render() {

    const Data = [
      {
          id:1,
          title:'New Apartment Nice Wiew',
          text:'Quincy St, Brooklyn, NY, USA',
          oldSum:'$2,800/mo',
          newSum:'$7,500/mo'
      },
  
      {
          id:2,
          title:'Skyper Pool Apartment',
          text:'112 Glenwood Ave Hyde Park, Boston',
          oldSum:'$2,800/mo',
          newSum:'$5,250/mo'
      },
  
      {
          id:3,
          title:'New Caledonian Wharf',
          text:'251 SW 6th Ln Florida City, FL',
          oldSum:'$2,800/mo',
          newSum:'$2,300/mo'
      },
  
      {
          id:4,
          title:'Spacious Family Home',
          text:'4 W 21st St Flatiron District, New York',
          oldSum:'$2,800/mo',
          newSum:'$1,900/mo'
      }
  ]

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };


    return (
      <RentWrap> 
          <Container>
            <Info>
                <RecentRentWrap wrap>
                    <Number>66.180</Number>
                    <Descr>Homes for sale</Descr>
                </RecentRentWrap>

                <RecentRentWrap wrap>
                    <Number>4.809</Number>
                    <Descr>Open houses</Descr>
                </RecentRentWrap>

                <RecentRentWrap>
                    <Number>30.469</Number>
                    <Descr>Recently sold</Descr>
                </RecentRentWrap>

                <RecentRentWrap>
                    <Number>2.919</Number>
                    <Descr>Price reduced</Descr>
                </RecentRentWrap>
            </Info>


          </Container>

          <Line></Line>

          <Container>
            <Title recent>Recent Properties for Rent</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>        

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
                arrows={true}                
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"                            
            >
                {
                  Data.map(({id, title, text, oldSum, newSum}) => {
                    return(                      
                        <CardWrap key={id}> 
    
                          <CardHeader>                          
                            <ButtonWrap>
                            <ButtonHeader button>FEATURED</ButtonHeader>
                            <ButtonHeader>FOR SALE</ButtonHeader>
                            </ButtonWrap>
                          </CardHeader>

                          <CardBody>
                                <CardTitle>{title}</CardTitle>

                                <CardText>{text}</CardText>

                                <WrapIcons>
                                    <Wrap>
                                        <BedIcon />
                                        <IconText>4 Beds</IconText>
                                    </Wrap>

                                    <Wrap>
                                        <BathIcon />
                                        <IconText>5 Baths</IconText>
                                    </Wrap>

                                    <Wrap>
                                        <CarIcon />
                                        <IconText>1 Garage</IconText>
                                    </Wrap>

                                    <Wrap>
                                        <RulerIcon />
                                        <IconText>1200 Sq Ft</IconText>
                                    </Wrap>
                                </WrapIcons>    
                          </CardBody>

                          <CardFooter>
                            
                                <Wrap Footer>
                                    <OldCost>{oldSum}</OldCost>
                                    <NewCost>{newSum}</NewCost>
                                </Wrap>

                                <WrapIcons WrapIcons>
                                    <ExpansionIcon />
                                    <CirclePlusIcon />
                                    <HeartIcon />
                                </WrapIcons>

                          </CardFooter>
                      </CardWrap>                  
                    )
                  })
                }
             </Carousel>                           
        </Container>    
      </RentWrap>
    );
  }
}

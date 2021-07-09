import React, { Component } from 'react';
import { Text, Title } from './CarouselStyle';
import { Container } from './NavigationStyle';
import {ChooseUsWrap, CardText,  Div, CardWrap, ProfileImg, CardTitle, DivCarousel} from './ChooseUsStyle'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class Testimonials extends Component {
  render() {

    const Data = [
        {
            id:1,
            name: 'Marvin McKinney',
            status: 'Designer',        
            text:"“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"
        },

        {
            id:2,
            name: 'Theresa Webb' , 
            status: 'Host',      
            text:"“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"
        },

        {
            id:3,
            name: 'Robert Fox' ,  
            status: 'Reporter',     
            text:"“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"
        },

        {
            id:4,
            name: 'Guy Hawkins',  
            status: 'Developer',      
            text:"“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"
        },    
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
      <ChooseUsWrap> 
          <Container>
            <Title>Our Testimonials</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text> 

            <Div test>
                {
                    Data.map(({id, name, status, text}) => {
                        return(
                            <div  key={id}>
                                <CardWrap>                                                               
                                    <CardText>{text}</CardText>
                                    <ProfileImg />
                                </CardWrap>

                                <CardTitle title>{name}</CardTitle>
                                <CardText>{status}</CardText>
                            </div>
                        )
                    })
                }
            </Div>


            <DivCarousel>
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
                        Data.map(({id, name, status, text}) => {
                            return(
                                <div  key={id}>
                                    <CardWrap>                                                               
                                        <CardText>{text}</CardText>
                                        <ProfileImg />
                                    </CardWrap>

                                    <CardTitle title>{name}</CardTitle>
                                    <CardText>{status}</CardText>
                                </div>
                            )
                        })
                    }
                </Carousel>    
            </DivCarousel>
           
          </Container>
      </ChooseUsWrap>
    );
  }
}

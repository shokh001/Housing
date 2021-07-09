import React, { Component } from 'react';
import {HomeIcon, ApartmentIcon, OfficeIcon, VillaIcon, RoomIcon, CardText, CardWrap} from './OurPropertiesStyle'
import { Wrapper, Text, Title } from './CarouselStyle';
import { Container } from './NavigationStyle';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class OurProperties extends Component {
  render() {

    const Data = [
      {
          id:1,
          icon:'home',
          text:'House'        
      },
  
      {
          id:2,
          title:'apartment',
          text:'Apartment',
          
      },
  
      {
          id:3,
          icon:'office',
          text:'Office',
          
      },
  
      {
          id:4,
          icon:'villa',
          text:'Villa',
          
      },

      {
          id:5,
          icon:'room',
          text:'Room',
        
      }
  ]


    const ChooseIcon = (icon) => {
        switch(icon){
            case "home" : return <HomeIcon />
            case "apartment" :return <ApartmentIcon />
            case "office" :return <OfficeIcon />
            case "villa" :return <VillaIcon />
            case "room" :return <RoomIcon />
        }
    }

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
    <Wrapper>
        <Container>
            <Title>Explore Our Properties</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin</Text>        

            <Carousel
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                arrows={true}
                keyBoardControl={true}                
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"                       
            >
                {
                  Data.map(({id, icon, text}) => {
                    return(                      
                        <CardWrap key={id}>                     
                            {/* {
                                ChooseIcon(icon)
                            }           */}

                            <VillaIcon />

                            <CardText>
                                {text}
                            </CardText>
                        </CardWrap>                  
                    )
                  })
                }
             </Carousel>               
            
        </Container>
    </Wrapper>
    );
  }
}

import React, { Component } from 'react';
import {CardWrap,BlogWrapper, UserIcon, CalendarIcon , CardHeader, CardBody,CardTitle, CardText, WrapIcons, Wrap, IconText, ButtonHeader, ButtonWrap, Link} from './OurBlogStyle'
import { Text, Title } from './CarouselStyle';
import { Container } from './NavigationStyle';

export default class OurBlog extends Component {
  render() {

    const Data = [
      {
          id:1,
          btnText:'FAMILY HOUSE',          
          title:'Redfin Ranks the Most Competitive Neighborhoods',
          text:'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ',
      },
  
      {
          id:2,
          btnText:'APARTMENT',
          title:'Housing Markets That Changed the  Most This Decade',
          text:'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ',
      },
  
      {
          id:3,
          btnText:'APARTMENT',
          title:'Redfin Unveils the Best Canadian  Cities for Biking',
          text:'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ',
      },
  
      {
          id:4,
          btnText:'RENTAL',
          title:'You Can Buy The Piano Teacher’s Home from Groundhog Day',
          text:'Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus. ',
      }
  ]

   

    return (
    <BlogWrapper>
        <Container>
            <Title>From Our Blog</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>        

            <Wrap>
            {
                  Data.map(({id, title, text, btnText}) => {
                    return(                      
                        <CardWrap key={id}> 
    
                          <CardHeader>                          
                            <ButtonWrap>
                            <ButtonHeader button>{btnText}</ButtonHeader>                        
                            </ButtonWrap>
                          </CardHeader>

                          <CardBody>

                                <Wrap>
                                    <WrapIcons>                                
                                            <UserIcon />
                                            <IconText>Robert Fox</IconText>                                
                                    </WrapIcons>

                                    <WrapIcons>                                
                                            <CalendarIcon />
                                            <IconText>Robert Fox</IconText>                                
                                    </WrapIcons>
                                </Wrap>

                                <CardTitle>{title}</CardTitle>

                                <CardText>{text}</CardText>   

                                <Link href="#">Readmore</Link>                      
                          </CardBody>
                          
                      </CardWrap>                  
                    )
                  })
                }   
            </Wrap>
            
        </Container>
    </BlogWrapper>
    );
  }
}

import React, { Component } from 'react';
import {Button, FootRow, Facebook,RowFake, Row, Instagram, Twitter, LinkedIn, FootLink, Email, Div, Phone, Text, FootTitle, Foot, Title, FooterWrap, Register, LinkWrap, LocationIcon, InputWrap, Input, TelegramWrap, Telegram, FootFinally, Descr, Logo, FinallyLink, ChevronUp} from './FooterStyle'
import { Container, LogoText } from './NavigationStyle';

export default class Footer extends Component {
  render() {
    return (
        <FooterWrap> 

            <Register>
                <Title>Become a Real Estate Agent</Title>
                <Text>
                    We only work with the best companies around the globe
                </Text>

                <Button type='button'>Read more</Button>
            </Register>

            <Foot>
                <Container>
                   <Row>
                        <Div>
                            <FootTitle>Contact Us</FootTitle>
                            <LinkWrap>
                                <LocationIcon />
                                <FootLink href='#'>
                                    329 Queensberry Street, North <br /> Melbourne VIC 3051, Australia.
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>
                                <Phone />
                                <FootLink href='#'>
                                    123 456 7890 
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>
                                <Email />
                                <FootLink href='#'>
                                    support@houzing.com
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>
                                <Facebook />
                                <Twitter />
                                <Instagram />
                                <LinkedIn />
                            </LinkWrap>
                        </Div>

                        <Div>
                            <FootTitle>Discover</FootTitle>
                            <LinkWrap>                                
                                <FootLink href='#'>
                                    Chicago
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>                                
                                <FootLink href='#'>
                                 Los Angeles 
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>                                
                                <FootLink href='#'>
                                    Miami
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>
                                <FootLink href='#'>
                                    New York
                                </FootLink>
                            </LinkWrap>
                        </Div>

                        <Div>
                            <FootTitle>Lists by Category</FootTitle>
                            <LinkWrap>                                
                                <FootLink href='#'>
                                    Apartments  
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>                                
                                <FootLink href='#'>
                                    Condos  
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>                                
                                <FootLink href='#'>
                                    Houses 
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>
                                <FootLink href='#'>
                                    Offices 
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>
                                <FootLink href='#'>
                                    Retail  
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>
                                <FootLink href='#'>
                                    Villas 
                                </FootLink>
                            </LinkWrap>
                        </Div>

                        <Div>
                            <FootTitle>Quick Links</FootTitle>
                            <LinkWrap>                                
                                <FootLink href='#'>
                                About Us  
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>                                
                                <FootLink href='#'>
                                Terms & Conditions   
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>                                
                                <FootLink href='#'>
                                User’s Guide 
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>
                                <FootLink href='#'>
                                Support Center 
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>
                                <FootLink href='#'>
                                Press Info  
                                </FootLink>
                            </LinkWrap>

                            <LinkWrap>
                                <FootLink href='#'>
                                Contact Us 
                                </FootLink>
                            </LinkWrap>
                        </Div>

                        <Div>
                            <FootTitle>Subscribe</FootTitle>
                            <LinkWrap>                                
                                <FootLink href='#'>
                                    We don’t send spam so don’t worry.
                                </FootLink>
                            </LinkWrap>

                            <InputWrap>
                                <Input placeholder ='Enter your email' />
                                <TelegramWrap>
                                    <Telegram />
                                </TelegramWrap>
                            </InputWrap>
                        </Div>
                   </Row>
                </Container>
            </Foot>

            <FootFinally>
                <Container>
                    <Row row>
                        <Descr>
                            Copyright © 2021 CreativeLayers. All Right Reserved.
                        </Descr>

                        <FootRow>
                            <Logo />
                            <LogoText>
                                Houzing
                            </LogoText>                            
                        </FootRow>

                        <FootRow>
                            <FinallyLink href='#'>Home</FinallyLink>
                            <FinallyLink href='#'>Site Map</FinallyLink>
                            <FinallyLink href='#'>Privacy policy</FinallyLink>
                            <FinallyLink href='#'>Cookie Policy</FinallyLink>
                        </FootRow>

                        <TelegramWrap telegram>
                            <FinallyLink href='#'>
                                <ChevronUp />
                            </FinallyLink>
                        </TelegramWrap>
                    </Row>

                    <RowFake>
                        <FootRow>
                            <Logo />
                            <LogoText>
                                Houzing
                            </LogoText>                            
                        </FootRow>

                        <FootRow>
                            <FinallyLink href='#'>Home</FinallyLink>
                            <FinallyLink href='#'>Site Map</FinallyLink>
                            <FinallyLink href='#'>Privacy policy</FinallyLink>
                            <FinallyLink href='#'>Cookie Policy</FinallyLink>
                        </FootRow>

                        <Descr>
                            Copyright © 2021 CreativeLayers. All Right Reserved.
                        </Descr>   

                        <TelegramWrap telegram>
                            <FinallyLink href='#'>
                                <ChevronUp />
                            </FinallyLink>
                        </TelegramWrap>                                             
                    </RowFake>
                </Container>
            </FootFinally>
        </FooterWrap>
    );
  }
}

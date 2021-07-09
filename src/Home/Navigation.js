import React, { Component } from 'react';
import {CirclePlusIcon, ChevronRight, Button, Call, ChevronDown, Links,LogoIcon, LogoText,  EksIcon, NavMobile, Link_a, Link_li, Link_ul, Nav, PhoneIcon, UserICon, BurgerMobile, Container} from './NavigationStyle.js'
export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      click: false
    }
  }

  render() {

    

    return (
      <Nav> 
        <Container>

        <NavMobile click={this.state.click}>                          
            <LogoText mobile href='#'>
                <Links mobile>
                    <LogoIcon blue/>
                    Houzing
                </Links>

                <EksIcon onClick={() => {this.setState({click: !this.state.click})}} />
            </LogoText>         

            <Links mobile>
              <Link_ul mobile>
                  <Link_li>
                    <Link_a href = '#'>HOME</Link_a>
                    <ChevronRight/>
                  </Link_li>

                  <Link_li>
                    <Link_a href = '#'>LISTING</Link_a>
                    <ChevronRight/>
                  </Link_li>

                  <Link_li>
                    <Link_a href = '#'>PROPERTY</Link_a>
                    <ChevronRight/>
                  </Link_li>

                  <Link_li>
                    <Link_a href = '#'>PAGES</Link_a>
                    <ChevronRight/>
                  </Link_li>

                  <Link_li>
                    <Link_a href = '#'>CONTACT</Link_a>  
                    <ChevronRight/>            
                  </Link_li>
              </Link_ul>                                 
            </Links>                       

            <Button mobile type='button'>
                  <CirclePlusIcon mobile />
                  CREATE LISTING
              </Button>  
      </NavMobile>


          <Nav navbar>
          <BurgerMobile onClick={() => {this.setState({click: !this.state.click})}} />

            <LogoText href='#'>
                <LogoIcon/>
                Houzing
            </LogoText>         

            <Links>
              <Link_ul>
                  <Link_li>
                    <Link_a href = '#'>HOME</Link_a>
                    <ChevronDown/>
                  </Link_li>

                  <Link_li>
                    <Link_a href = '#'>LISTING</Link_a>
                    <ChevronDown/>
                  </Link_li>

                  <Link_li>
                    <Link_a href = '#'>PROPERTY</Link_a>
                    <ChevronDown/>
                  </Link_li>

                  <Link_li>
                    <Link_a href = '#'>PAGES</Link_a>
                    <ChevronDown/>
                  </Link_li>

                  <Link_li>
                    <Link_a href = '#'>CONTACT</Link_a>              
                  </Link_li>
              </Link_ul>

              <Call href ='#'>
                <PhoneIcon/>
                (+88) 1990 6886
              </Call>

              <UserICon/>

              <Button type='button'>
                  <CirclePlusIcon />
                  CREATE LISTING
              </Button>
            </Links>
          </Nav>
        </Container>           
      </Nav>
    );
  }
}

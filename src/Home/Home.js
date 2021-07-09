import React, { Component } from 'react';
import Navigation from './Navigation.js'
import HeaderBanner from './HeaderBanner'
import { Top } from './NavigationStyle.js';
import  OurFeatures from './Carousel.js';
import ChooseUs from './ChooseUs.js';
import OurProperties from './OurProperties'
import Trends from './Trends.js';
import RecentRent from './RecentRent.js';
import Testimonials from './Testimonials'
import ExploreCity from './ExploreCity.js';
import OurAgents from './OurAgents'
import OurBlog from './OurBlog.js';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div className = 'home'> 
        <Top>
            <Navigation />            
            <HeaderBanner />
        </Top>

        <OurFeatures />

        <ChooseUs />

        <OurProperties />

        <Trends />

        <RecentRent />

        <Testimonials />

        <ExploreCity />

        <OurAgents />

        <OurBlog />

        <Footer />
     </div>
    );
  }
}

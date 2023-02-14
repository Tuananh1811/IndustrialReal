import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Project from "./Section/Project";
import FeaturedRealEstate from './Section/FeaturedRealEstate';
import NewsHome from './Section/NewsHome';
import About from './Section/About';
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomePage extends Component {

    render() {

        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <div>
                <HomeHeader />
                <Project settings={settings} />
                <FeaturedRealEstate settings={settings} />
                <NewsHome settings={settings={
                     slidesToShow: 2
                }}/>
                <About/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

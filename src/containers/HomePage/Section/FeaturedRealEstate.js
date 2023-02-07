import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './FeaturedRealEstate.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class FeaturedRealEstate extends Component {

    render() {
        return (
            <div className='section-slide'>
                <div className='section-container'>
                hello
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRealEstate);

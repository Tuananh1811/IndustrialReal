import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Project.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Project extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event:action
    }
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };

        return (
            <div className='section-project'>
                <div className='project-content'>
                    <Slider {...settings}>
                        <div className='pro-customize'>
                            <h3>1</h3>
                        </div>
                        <div className='pro-customize'>
                            <h3>2</h3>
                        </div>
                        <div className='pro-customize'>
                            <h3>3</h3>
                        </div>
                        <div className='pro-customize'>
                            <h3>4</h3>
                        </div>
                        <div className='pro-customize'>
                            <h3>5</h3>
                        </div>
                        <div className='pro-customize'>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>

            </div>

        );
    }

}

const mapStateToProps = state => {
    return {

        //inject
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);

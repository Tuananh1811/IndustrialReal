import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Project.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectslide from "../../../assets/projectslide/3d.jpg";
class Project extends Component {

   
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <div className='section-project'>
                <div className='project-content'>
                    <Slider {...settings}>
                        <div className='pro-customize'>
                            <img alt='project 1' className='pro-customize-img' src={projectslide}/>
                            <h5 className='pro-customize-title'>Khu liên hợp công nghiệp </h5>
                        </div>
                        <div className='pro-customize'>
                            <img alt='project 1' className='pro-customize-img' src={projectslide}/>
                            <h5 className='pro-customize-title'>Khu liên hợp công nghiệp </h5>
                        </div>
                        <div className='pro-customize'>
                            <img alt='project 1' className='pro-customize-img' src={projectslide}/>
                            <h5 className='pro-customize-title'>Khu liên hợp công nghiệp </h5>
                        </div>
                        <div className='pro-customize'>
                            <img alt='project 1' className='pro-customize-img' src={projectslide}/>
                            <h5 className='pro-customize-title'>Khu liên hợp công nghiệp </h5>
                        </div>
                        <div className='pro-customize'>
                            <img alt='project 1' className='pro-customize-img' src={projectslide}/>
                            <h5 className='pro-customize-title'>Khu liên hợp công nghiệp </h5>
                        </div>
                        <div className='pro-customize'>
                            <img alt='project 1' className='pro-customize-img' src={projectslide}/>
                            <h5 className='pro-customize-title'>Khu liên hợp công nghiệp </h5>
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
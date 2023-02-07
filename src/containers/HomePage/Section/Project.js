import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Project.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectslide from "../../../assets/projectslide/3d.jpg";

import { LANGUAGES } from '../../../utils';

import { changeLanguageApp } from "../../../store/actions";
class Project extends Component {


    render() {
       

        return (
            <div className='section-slide project-slide'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span><FormattedMessage id="titleSlide.latestproject"/></span>
                        <a className='section-header-link' href='/'><FormattedMessage id="button.seemore"/></a>
                    </div>
                    <Slider {...this.props.settings}>
                        <div className='section-customize'>
                            <img alt='section 1' className='section-customize-img' src={projectslide} />
                            <h5 className='section-customize-title'><FormattedMessage id="slide.industrialcomplex" /> </h5>
                        </div>
                        <div className='section-customize'>
                            <img alt='section 2' className='section-customize-img' src={projectslide} />
                            <h5 className='section-customize-title'><FormattedMessage id="slide.industrialcomplex" /> </h5>
                        </div>
                        <div className='section-customize'>
                            <img alt='section 3' className='section-customize-img' src={projectslide} />
                            <h5 className='section-customize-title'><FormattedMessage id="slide.industrialcomplex" /></h5>
                        </div>
                        <div className='section-customize'>
                            <img alt='section 4' className='section-customize-img' src={projectslide} />
                            <h5 className='section-customize-title'><FormattedMessage id="slide.industrialcomplex" /></h5>
                        </div>
                        <div className='section-customize'>
                            <img alt='section 5' className='section-customize-img' src={projectslide} />
                            <h5 className='section-customize-title'><FormattedMessage id="slide.industrialcomplex" /></h5>
                        </div>
                        <div className='section-customize'>
                            <img alt='section 6' className='section-customize-img' src={projectslide} />
                            <h5 className='section-customize-title'><FormattedMessage id="slide.industrialcomplex" /></h5>
                        </div>
                    </Slider>
                </div>

            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language,
        //inject
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);

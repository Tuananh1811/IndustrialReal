import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './FeaturedRealEstate.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from "../../../store/actions";
import realestate from "../../../assets/real/real.jpg"
class FeaturedRealEstate extends Component {

    render() {
        return (
            <div className='section-slide'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span><FormattedMessage id="titleSlide.FeaturedRealEstate" /></span>
                        <a className='section-header-link' href='/'><FormattedMessage id="button.seemore" /></a>
                    </div>
                    <Slider {...this.props.settings}>
                        <div className='section-customize'>
                            <img alt='section 1' className='section-customize-img' src={realestate} />
                            <h5 className='section-customize-title'><FormattedMessage id="slideRealEstate.FeaturedRealEstate" /> </h5>
                        </div>
                        <div className='section-customize'>
                            <img alt='section 2' className='section-customize-img' src={realestate} />
                            <h5 className='section-customize-title'><FormattedMessage id="slideRealEstate.FeaturedRealEstate" /> </h5>
                        </div>
                        <div className='section-customize'>
                            <img alt='section 3' className='section-customize-img' src={realestate} />
                            <h5 className='section-customize-title'><FormattedMessage id="slideRealEstate.FeaturedRealEstate" /></h5>
                        </div>
                        <div className='section-customize'>
                            <img alt='section 4' className='section-customize-img' src={realestate} />
                            <h5 className='section-customize-title'><FormattedMessage id="slideRealEstate.FeaturedRealEstate" /></h5>
                        </div>
                        <div className='section-customize'>
                            <img alt='section 5' className='section-customize-img' src={realestate} />
                            <h5 className='section-customize-title'><FormattedMessage id="slideRealEstate.FeaturedRealEstate" /></h5>
                        </div>
                        <div className='section-customize'>
                            <img alt='section 6' className='section-customize-img' src={realestate} />
                            <h5 className='section-customize-title'><FormattedMessage id="slideRealEstate.FeaturedRealEstate" /></h5>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }

}
/**


 */
const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRealEstate);

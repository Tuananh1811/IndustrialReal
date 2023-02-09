import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './NewsHome.scss';
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
            <div className='section-slide project-slide'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span><FormattedMessage id="titleSlide.NewsHome" /></span>
                        <a className='section-header-link' href='/'><FormattedMessage id="button.seemore" /></a>
                    </div>
                    <Slider {...this.props.settings}>
                        <div className='section-customize-news'>
                            <div className='section-customize-news-img'>
                                <img className="style-img" alt='tin tuc' src={realestate} />
                            </div>
                            <div className='section-customize-news-title'>
                                <p className="style-date"><strong>blog</strong><span> | </span> <span>9 February 2023</span></p>
                                <h3><a href='/'><FormattedMessage id="slideNews.title" /></a></h3>
                                <div class="btn-link-news">
                                    <a href="/" ><FormattedMessage id="button.readarticle" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='section-customize-news'>
                            <div className='section-customize-news-img'>
                                <img className="style-img" alt='tin tuc' src={realestate} />
                            </div>
                            <div className='section-customize-news-title'>
                                <p className="style-date"><strong>blog</strong><span> | </span> <span>9 February 2023</span></p>
                                <h3><a href='/'><FormattedMessage id="slideNews.title" /></a></h3>
                                <div class="btn-link-news">
                                    <a href="/" ><FormattedMessage id="button.readarticle" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='section-customize-news'>
                            <div className='section-customize-news-img'>
                                <img className="style-img" alt='tin tuc' src={realestate} />
                            </div>
                            <div className='section-customize-news-title'>
                                <p className="style-date"><strong>blog</strong><span> | </span> <span>9 February 2023</span></p>
                                <h3><a href='/'><FormattedMessage id="slideNews.title" /></a></h3>
                                <div class="btn-link-news">
                                    <a href="/" ><FormattedMessage id="button.readarticle" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='section-customize-news'>
                            <div className='section-customize-news-img'>
                                <img className="style-img" alt='tin tuc' src={realestate} />
                            </div>
                            <div className='section-customize-news-title'>
                                <p className="style-date"><strong>blog</strong><span> | </span> <span>9 February 2023</span></p>
                                <h3><a href='/'><FormattedMessage id="slideNews.title" /></a></h3>
                                <div class="btn-link-news">
                                    <a href="/" ><FormattedMessage id="button.readarticle" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='section-customize-news'>
                            <div className='section-customize-news-img'>
                                <img className="style-img" alt='tin tuc' src={realestate} />
                            </div>
                            <div className='section-customize-news-title'>
                                <p className="style-date"><strong>blog</strong><span> | </span> <span>9 February 2023</span></p>
                                <h3><a href='/'><FormattedMessage id="slideNews.title" /></a></h3>
                                <div class="btn-link-news">
                                    <a href="/" ><FormattedMessage id="button.readarticle" /></a>
                                </div>
                            </div>
                        </div>
                        <div className='section-customize-news'>
                            <div className='section-customize-news-img'>
                                <img className="style-img" alt='tin tuc' src={realestate} />
                            </div>
                            <div className='section-customize-news-title'>
                                <p className="style-date"><strong>blog</strong><span> | </span> <span>9 February 2023</span></p>
                                <h3><a href='/'><FormattedMessage id="slideNews.title" /></a></h3>
                                <div class="btn-link-news">
                                    <a href="/" ><FormattedMessage id="button.readarticle" /></a>
                                </div>
                            </div>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRealEstate);

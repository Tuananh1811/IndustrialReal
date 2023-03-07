import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';

import { changeLanguageApp } from "../../store/actions";
class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event:action
    }
    render() {
        let language = this.props.language;
        console.log("check", this.props.userInfo);
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'>
                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <a className='child-content-link' href='/'>
                                    <div><b><FormattedMessage id="homeheader.property" /></b></div>
                                    <div><span className='sub-title'><FormattedMessage id="homeheader.findproperty" /> </span></div>
                                </a>

                            </div>
                            <div className='child-content'>
                                <a className='child-content-link' href='/'>
                                    <div><b><FormattedMessage id="homeheader.project" /></b></div>
                                    <div><span className='sub-title'><FormattedMessage id="homeheader.findproject" /></span></div>
                                </a>

                            </div>
                            <div className='child-content'>
                                <a className='child-content-link' href='/'>
                                    <div><b><FormattedMessage id="homeheader.news" /></b></div>
                                    <div><span className='sub-title'><FormattedMessage id="homeheader.newproperty" /> </span></div>
                                </a>

                            </div>
                            <div className='child-content'>
                                <a className='child-content-link' href='/'><div><b><FormattedMessage id="homeheader.contact" /></b></div>
                                    <div><span className='sub-title'><FormattedMessage id="homeheader.contactconsultant" /></span></div></a>

                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <a href='/'> <i className="fas fa-question"></i><FormattedMessage id="homeheader.support" /> </a>

                            </div>

                            <div className='flag'>
                                <div className={language === LANGUAGES.VI ? "language-vi active" : "language-vi"}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                                <div className={language === LANGUAGES.EN ? "language-en active" : "language-en"}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='home-header-banner-content'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><FormattedMessage id="banner.title2" /></div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input id="timkiem_chung" className='search-input' type="search" placeholder="Tìm dự án"></input>
                        </div>

                    </div>
                    <div className='options'>
                        <div className='option-child'>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className='option-child-text'><FormattedMessage id="banner.banneroption1" /></div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-industry"></i>
                                    </div>
                                    <div className='option-child-text'><FormattedMessage id="banner.banneroption2" /></div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className='option-child-text'><FormattedMessage id="banner.banneroption3" /></div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-sitemap"></i>
                                    </div>
                                    <div className='option-child-text'><FormattedMessage id="banner.banneroption4" /></div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className='option-child-text'><FormattedMessage id="banner.banneroption5" /></div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className='option-child-text'><FormattedMessage id="banner.banneroption6" /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
        //inject
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

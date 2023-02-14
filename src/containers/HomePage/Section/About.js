import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './About.scss';
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from "../../../store/actions";

class About extends Component {

    render() {
        return (
            <div className='section-slide '>
                <div className='section-container'>
                    <div className='section-header'>
                        <span><FormattedMessage id="titleSlide.AboutHome" /></span>
                    </div>
                    <div className='section-about'>
                        <div className='section-abour-left'>
                            
                        </div>
                        <div className='section-abour-right'>2</div>

                    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(About);

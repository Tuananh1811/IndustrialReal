import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeFooter.scss';
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from "../../../store/actions";

class HomeFooter extends Component {

    render() {
        return (
           <div className='home-footer'>
          
           <p>&copy; 2023 by CNCTech</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

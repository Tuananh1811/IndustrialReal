import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import { LANGUAGES } from '../../utils';
import { FormattedMessage } from 'react-intl';
import './Header.scss';

class Header extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event:action
    }
    render() {
        const { processLogout } = this.props;
        let language = this.props.language;
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút logout */}
                <div className=" header-top-right"  >
                    <span className='welcome'><FormattedMessage id="homeheader.welcome"></FormattedMessage>, <strong>Admin</strong></span>
                    <div className="languages">
                        <span className={language === LANGUAGES.VI ? "language-vi active" : "language-vi"}
                            onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                            VN
                        </span>
                        <span className={language === LANGUAGES.EN ? "language-en active" : "language-vi"}
                            onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                            EN
                        </span>
                    </div>
                    <i onClick={processLogout} className="fas fa-sign-out-alt" ></i>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
         processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

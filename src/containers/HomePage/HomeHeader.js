import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
class HomeHeader extends Component {

    render() {
        const { isLoggedIn } = this.props;
        let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/home';

        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <i class="fas fa-bars"></i>
                        <div className='header-logo'>
                        </div>
                    </div>
                    <div className='center-content'>
                        <div className='child-content'>
                            <div><b>Bất động sản</b></div>
                            <div><span className='sub-title'>Tìm dự án theo loại </span></div>
                        </div>
                        <div className='child-content'>
                            <div><b>Dự án</b></div>
                            <div><span className='sub-title'>Chọn dự án có sẵn</span></div>
                        </div>
                        <div className='child-content'>
                            <div><b>Tư vấn</b></div>
                            <div><span className='sub-title'>Chọn nhân viên tư vấn </span></div>
                        </div>
                        <div className='child-content'>
                            <div><b>Gói tư vấn</b></div>
                            <div><span className='sub-title'>Tư vấn tổng quát</span></div>
                        </div>
                    </div>
                    <div className='right-content'>
                    <i class="fas fa-question"></i> Hỏi đáp
                    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

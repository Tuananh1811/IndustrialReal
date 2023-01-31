import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
class HomeHeader extends Component {

    render() {
        const { isLoggedIn } = this.props;
        let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/home';

        return (
            <React.Fragment>
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
                            <div className='support'>
                                <i class="fas fa-question"></i> Hỏi đáp
                            </div>

                            <div className='flag'>
                                VN
                            </div>
                        </div>


                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='home-header-banner-content'>
                        <div className='title1'>Tìm tài sản công nghiệp tiếp theo của bạn</div>
                        <div className='title2'>Đất thương mại & phát triển</div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input id="timkiem_chung" className='search-input' type="search" placeholder="Tìm dự án"></input>
                        </div>

                    </div>
                    <div className='options'>
                        <ul className=''>
                            <li><a href='#'>1</a></li>
                            <li><a href='#'>2</a></li>
                            <li><a href='#'>3</a></li>
                            <li><a href='#'>4</a></li>
                        </ul>
                    </div>
                </div>

            </React.Fragment>

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

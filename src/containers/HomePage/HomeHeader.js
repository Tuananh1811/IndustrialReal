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
                                <a className='child-content-link' href='/'>
                                    <div><b>Bất động sản</b></div>
                                    <div><span className='sub-title'>Tìm dự án theo loại </span></div>
                                </a>

                            </div>
                            <div className='child-content'>
                                <a className='child-content-link' href='/'>
                                    <div><b>Dự án</b></div>
                                    <div><span className='sub-title'>Chọn dự án có sẵn</span></div>
                                </a>

                            </div>
                            <div className='child-content'>
                                <a className='child-content-link' href='/'>
                                    <div><b>Tin tức</b></div>
                                    <div><span className='sub-title'>Tin tức bất động sản </span></div>
                                </a>

                            </div>
                            <div className='child-content'>
                                <a className='child-content-link' href='/'><div><b>Liên hệ</b></div>
                                    <div><span className='sub-title'>Liên hệ tư vấn</span></div></a>

                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <a href='/'> <i class="fas fa-question"></i> Hỏi đáp</a>

                            </div>

                            <div className='flag'>
                                <a href='/'>
                                    VN
                                </a>

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
                        <div className='option-child'>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className='option-child-text'>Chung cư</div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-industry"></i>
                                    </div>
                                    <div className='option-child-text'>Đất công nghiệp</div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className='option-child-text'>Thuê nhà máy</div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-sitemap"></i>
                                    </div>
                                    <div className='option-child-text'>Dự án</div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className='option-child-text'>Chung cư</div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className='option-child-text'>Chung cư</div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className='option-child-text'>Chung cư</div>
                                </a>

                            </div>
                            <div className='option-child-item'>
                                <a href='/' className='option-child-item-link'>
                                    <div className='option-child-icon'>
                                        <i className="fas fa-building"></i>
                                    </div>
                                    <div className='option-child-text'>Chung cư</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

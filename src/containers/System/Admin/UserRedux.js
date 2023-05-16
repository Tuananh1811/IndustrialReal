import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";
import './UserRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImageURL: '',
            isOpen: false
        }
    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })

        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }
    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file); //api html
            this.setState({
                previewImageURL: objectUrl
            })
        }


    }
    openPreviewImage = () => {
        if (!this.state.previewImageURL) return;
        this.setState({
            isOpen: true
        })
    }
    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;

        return (
            <div className='user-redux-container'>
                <div className='title my-3'>
                    <FormattedMessage id="manage-user.add" />
                </div>
                <div className="user-redux-body" >
                    <div className='container' >
                        <div className='row'>
                            <form>
                                <div className="row my-2" >
                                    <div className="form-group col-md-6">
                                        <label > <FormattedMessage id="manage-user.email" /></label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label > <FormattedMessage id="manage-user.password" /></label>
                                        <input type="password" className="form-control" />
                                    </div>

                                </div>
                                <div className='row my-2'>
                                    <div className="form-group col-md-6">
                                        <label > <FormattedMessage id="manage-user.firstname" /></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label > <FormattedMessage id="manage-user.lastname" /></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className='row my-2'>
                                    <div className="form-group col-6">
                                        <label > <FormattedMessage id="manage-user.address" /></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label > <FormattedMessage id="manage-user.phonenumber" /></label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="form-group col-md-3">
                                        <label > <FormattedMessage id="manage-user.gender" /></label>
                                        <select className="form-control form-select ">
                                            {
                                                genders && genders.length > 0 && genders.map((item, index) => {
                                                    return (
                                                        <option key={index}>
                                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label > <FormattedMessage id="manage-user.position" /></label>
                                        <select className="form-control form-select ">
                                            {
                                                positions && positions.length > 0 && positions.map((item, index) => {
                                                    return (
                                                        <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label ><FormattedMessage id="manage-user.role" /></label>
                                        <select className="form-control form-select ">
                                            {
                                                roles && roles.length > 0 && roles.map((item, index) => {
                                                    return (
                                                        <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-3">
                                        <label > <FormattedMessage id="manage-user.image" /></label>
                                        <div className='preview-img-container'>
                                            <input
                                                id='previewImg'
                                                type='file'
                                                hidden
                                                onChange={(event) => this.handleOnchangeImage(event)}
                                            />
                                            <label className='lable-upload' htmlFor='previewImg'>Tải ảnh <i className="fas fa-upload"></i></label>
                                            <div className='preview-image'
                                                style={{ backgroundImage: `url(${this.state.previewImageURL})` }}
                                                onClick={() => this.openPreviewImage()}
                                            >
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br></br>
                                <button type="submit" className="btn btn-primary"><FormattedMessage id="manage-user.save" /></button>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImageURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}

                    />}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

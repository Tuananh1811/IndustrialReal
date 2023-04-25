import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: []
        }
    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
this.props.getRoleStart();
        //     let resGender = await getAllCodeService('gender');
        //     let resPosition = await getAllCodeService('position');
        //     let resRoleID = await getAllCodeService('role');
        //     if (resGender && resGender.errCode === 0) {
        //         this.setState({
        //             genderArr: resGender.data
        //         })
        //     }

        //     if (resPosition && resPosition.errCode === 0) {
        //         this.setState({
        //             positionArr: resPosition.data
        //         })
        //     }
        //     if (resRoleID && resRoleID.errCode === 0) {
        //         this.setState({
        //             roleArr: resRoleID.data
        //         })
        //     }

        // }
        // catch (e) {
        //     console.log(e);
        // }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })

        }
        if(prevProps.positionRedux!== this.props.positionRedux){
            this.setState({
                positionArr:this.props.positionRedux
            })
        }
        if(prevProps.roleRedux!==this.props.roleRedux){
            this.setState({
                roleArr:this.props.roleRedux
            })
        }
    }
    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;

        // console.log("check props from redux", this.props.genderRedux);
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
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                </div>
                                <br></br>
                                <button type="submit" className="btn btn-primary"><FormattedMessage id="manage-user.save" /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux:state.admin.positions,
        roleRedux:state.admin.roles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart:()=>dispatch(actions.fetchRoleStart())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

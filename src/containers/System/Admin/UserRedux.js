import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: []
        }
    }
    async componentDidMount() {
        try {
            let resGender = await getAllCodeService('gender');
            let resPosition = await getAllCodeService('position');
            if (resGender && resGender.errCode === 0) {
                this.setState({
                    genderArr: resGender.data
                })
            }
            if (resPosition && resPosition.errCode === 0) {
                this.setState({
                    positionArr: resPosition.data
                })
            }

        }
        catch (e) {
            console.log(e);
        }
    }
    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
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
                                            <option selected>options</option>
                                            <option>...</option>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

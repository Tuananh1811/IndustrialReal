import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
    }
    render() {
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

                                            <option selected> Male</option>
                                            <option >Female </option>
                                            <option>... </option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label > <FormattedMessage id="manage-user.position" /></label>
                                        <select className="form-control form-select ">

                                            <option selected>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label ><FormattedMessage id="manage-user.role" /></label>
                                        <select className="form-control form-select ">

                                            <option selected>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

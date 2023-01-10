import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import  {handleLoginApi}  from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMessage:''
        }
    }
    //
    handleOnChangeUserName = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    handleOnChangePassword = (event) =>{
        this.setState({
            password:event.target.value
        })
    }
    handleLogin = async() => {
        this.setState({
            errMessage:''
        })
        try{
          let data=  await handleLoginApi(this.state.username,this.state.password);
          if(data && data.errCode !==0){
            this.setState({
                errMessage:data.message
            })
          }
          if(data && data.errCode===0){
            // eslint-disable-next-line no-undef 
           this.props.userLoginSuccess(data.user);
            console.log("success");
          }
        }catch(error){
            if(error.response){
                if(error.response.data){
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }//
    }
    render() {
        //JSX
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'><h3>Login</h3></div>
                        <div className='col-12 form-group login-input'>
                            <label>Username</label>
                            <input type='text'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUserName(event)}
                                className='form-control '
                                placeholder='Enter your username' />
                        </div>
                       
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <input type='password'
                                value={this.state.password}
                                onChange={(event)=>this.handleOnChangePassword(event)}
                                className='form-control'
                                placeholder='Enter your password' />
                        </div>
                        <div className='col-12' style={{color:'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={()=>this.handleLogin()}>Login</button>
                        </div>

                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <br></br>
                        <div className='col-12 text-center'>
                            <span >
                                Or Login with:
                            </span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail:()=> dispatch(actions.userLoginFail()),
        userLoginSuccess:(userInfo) =>dispatch(actions.userLoginSuccess(userInfo))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
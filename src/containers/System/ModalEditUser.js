import React, { Component } from 'react';
//import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Form, Label, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import _ from 'lodash';

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            companyName: '',
            roleId: ''
        }

    }

    componentDidMount() {
        // console.log("đimount edit",this.props.currentUser);
        let user = this.props.currentUser;
        //  let {currentUser}=this.props;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id:user.id,
                email: user.email,
                password: "hashcode",
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                companyName: user.companyName,
                phoneNumber: user.phoneNumber
            })
        }
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
    handleOnChangeInput = (event, id) => {

        //good code
        let copyState = { ...this.state };//copy state
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {
            console.log(event.target.value);
        })
    }
    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['firstName', 'lastName', 'email', 'password', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    
    handleSaveUser = () => {
        let isValid = this.checkValidInput();
        if (isValid === true) {
            this.props.editUser(this.state);
        }
    }
    render() {
        console.log(this.props);
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
            >
                <ModalHeader toggle={() => { this.toggle() }}>Edit a user</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup className='mb-3'>
                            <Label for="exampleEmail">Email<span className='required-icon'>*</span></Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                value={this.state.email}
                                onChange={(event) => this.handleOnChangeInput(event, "email")}
                                type="email"
                                disabled
                            />
                        </FormGroup>
                        <FormGroup className='mb-3'>
                            <Label for="examplePassword">Password<span className='required-icon'>*</span></Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                onChange={(event) => this.handleOnChangeInput(event, "password")}
                                type="password"
                                value={this.state.password}
                                disabled
                            />
                        </FormGroup>
                        <Row className='mb-3' xs="2">
                            <FormGroup>
                                <Label >First name<span className='required-icon'>*</span></Label>
                                <Input
                                    type='text'
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                                />

                            </FormGroup>
                            <FormGroup>
                                <Label >Last name<span className='required-icon'>*</span></Label>
                                <Input
                                    type='text'
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                                />
                            </FormGroup>
                        </Row>



                        

                        <Row className='mb-3' xs="2">
                            <FormGroup>
                                <Label >Phonenumber</Label>
                                <Input
                                    type='text'
                                    name="phoneNumber"
                                    value={this.state.phoneNumber}
                                    onChange={(event) => this.handleOnChangeInput(event, "phoneNumber")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label >Address</Label>
                                <Input
                                    type='text'
                                    name="address"
                                    value={this.state.address}
                                    onChange={(event) => this.handleOnChangeInput(event, "address")} />
                            </FormGroup>
                        </Row>

                        <Row className='mb-3' >
                            <FormGroup>
                                <Label >Company</Label>
                                <Input
                                    type='text'
                                    name="companyName"
                                    value={this.state.companyName}
                                    onChange={(event) => this.handleOnChangeInput(event, "companyName")} />
                            </FormGroup>


                        </Row>
                        <br />
                    </Form>
                </ModalBody>
                <ModalFooter>

                    <Button className='px-3' color="primary"
                        onClick={() => { this.handleSaveUser() }}>
                        Save changes
                    </Button>{' '}
                    <Button className='px-3' color="secondary" onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);





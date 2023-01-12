import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Form, FormControl, Label, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.listenToEmitter();
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: '',
                companyName: '',
                roleId: ''
            })

        })
    }
    componentDidMount() {
        console.log("mounting modal");
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
    handleAddNewUser = () => {
        let isValid = this.checkValidInput();
        if (isValid === true) {
            this.props.createNewUser(this.state);
        }
    }
    render() {

        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row className='mb-3' xs="2">
                            <FormGroup>
                                <Label >First name</Label>
                                <Input
                                    type='text'
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label >Last name</Label>
                                <Input
                                    type='text'
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                                />
                            </FormGroup>
                        </Row>

                        <FormGroup className='mb-3'>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                value={this.state.email}
                                onChange={(event) => this.handleOnChangeInput(event, "email")}
                                type="email"
                            />
                        </FormGroup>

                        <FormGroup className='mb-3'>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                onChange={(event) => this.handleOnChangeInput(event, "password")}
                                type="password"
                                value={this.state.password}
                            />
                        </FormGroup>

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

                        <Row className='mb-3' xs="3">
                            <FormGroup>
                                <Label >Company</Label>
                                <Input
                                    type='text'
                                    name="companyName"
                                    value={this.state.companyName}
                                    onChange={(event) => this.handleOnChangeInput(event, "companyName")} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Sex</Label>
                                <Input
                                    id="exampleSelect"
                                    name="gender"
                                    type="select"
                                    value={this.state.gender}
                                    onChange={(event) => this.handleOnChangeInput(event, "gender")}
                                >
                                    <option>----</option>
                                    <option value="1" >
                                        Male
                                    </option>
                                    <option value="0">
                                        Female
                                    </option>

                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleSelect">Role</Label>
                                <Input
                                    id="exampleSelect"
                                    name="roleId"
                                    type="select"
                                    value={this.state.roleId}
                                    onChange={(event) => this.handleOnChangeInput(event, "roleId")}
                                >
                                    <option>----</option>
                                    <option value="1">
                                        Admin
                                    </option>
                                    <option value="2">
                                        Employee
                                    </option>
                                </Input>
                            </FormGroup>
                        </Row>
                        <br />
                    </Form>
                </ModalBody>
                <ModalFooter>

                    <Button className='px-3' color="primary"
                        onClick={() => { this.handleAddNewUser() }}>
                        Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);





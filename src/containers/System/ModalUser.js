import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Form, FormControl, Label, Input, FormText, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
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
    }

    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
    handleOnChangeInput = (event,id) => {
        //bad code
        
        console.log(event.target.value,id);
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
                                onChange={(event) => this.handleOnChangeInput(event,"firstName")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label >Last name</Label>
                                <Input 
                                type='text' 
                                name="lastName"
                                onChange={(event) => this.handleOnChangeInput(event,"lastName")}
                                 />
                            </FormGroup>
                        </Row>

                        <FormGroup className='mb-3'>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                onChange={(event) => this.handleOnChangeInput(event,"email")}
                                type="email"
                            />
                        </FormGroup>

                        <FormGroup className='mb-3'>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                onChange={(event) => this.handleOnChangeInput(event,"password")}
                                type="password"
                            />
                        </FormGroup>

                        <Row className='mb-3' xs="2">
                            <FormGroup>
                                <Label >Phonenumber</Label>
                                <Input 
                                type='text' 
                                name="phoneNumber"
                                onChange={(event) => this.handleOnChangeInput(event,"password")}
                                 />
                            </FormGroup>
                            <FormGroup>
                                <Label >Address</Label>
                                <Input 
                                type='text' 
                                name="address"  
                                onChange={(event) => this.handleOnChangeInput(event,"address")} />
                            </FormGroup>
                        </Row>

                        <Row className='mb-3' xs="3">
                            <FormGroup>
                                <Label >Company</Label>
                                <Input 
                                type='text' 
                                name="companyName"  
                                onChange={(event) => this.handleOnChangeInput(event,"companyName")} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Sex</Label>
                                <Input
                                    id="exampleSelect"
                                    name="gender"
                                    type="select" 
                                    onChange={(event) => this.handleOnChangeInput(event,"gender")}
                                >
                                    <option value="1">
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
                                    onChange={(event) => this.handleOnChangeInput(event,"roleId")}
                                >
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
                        {/* <Button color="primary" className=' px-3' >
                            Submit
                        </Button> */}
                    </Form>
                </ModalBody>
                <ModalFooter>

                    <Button className='px-3' color="primary" onClick={() => { this.toggle() }}>
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





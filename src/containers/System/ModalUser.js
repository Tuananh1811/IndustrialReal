import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Form, FormControl, Label, Input, FormText, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFromParent();
    }

    render() {

        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'abcClassName'}>
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row className='mb-3' xs="2">
                            <FormGroup>
                                <Label >First name</Label>
                                <Input type='text' />
                            </FormGroup>
                            <FormGroup>
                                <Label >Last name</Label>
                                <Input type='text' />
                            </FormGroup>
                        </Row>

                        <FormGroup className='mb-3'>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                id="exampleEmail"
                                name="email"

                                type="email"
                            />
                        </FormGroup>
                        <FormGroup className='mb-3'>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                id="examplePassword"
                                name="password"

                                type="password"
                            />
                        </FormGroup>
                        <Row className='mb-3' xs="2">
                            <FormGroup>
                                <Label >Phonenumber</Label>
                                <Input type='text' />
                            </FormGroup>
                            <FormGroup>
                                <Label >Address</Label>
                                <Input type='text' />
                            </FormGroup>

                        </Row>
                        <Row className='mb-3' xs="3">
                            <FormGroup>
                                <Label >Company</Label>
                                <Input type='text' />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Sex</Label>
                                <Input
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        Male
                                    </option>
                                    <option>
                                        Female
                                    </option>

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Role</Label>
                                <Input
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        Admin
                                    </option>
                                    <option>
                                        Employee
                                    </option>

                                </Input>
                            </FormGroup>

                        </Row>
                        <br />
                        <Button color="primary" className=' px-3' >
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={() => { this.toggle() }}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter> */}
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





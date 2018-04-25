import React from 'react';
import FormErrors from './FormErrors.jsx';
import {checkName, checkAddress} from './validationRules';


export default class Form extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            formErrors: [],
            formValid: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleInputChange(evt) {
        let { name, value }  = evt.target;
        this.setState({ [name]: value }, ()=> {
            this.validate()
        });
    }

    submitForm(evt){
        evt.preventDefault();
        this.props.show(`Name: ${this.state.name}, Address: ${this.state.address}`);
    }

    validate(){
        let formErrors = [ checkName(this.state.name), checkAddress(this.state.address) ],
            formValid = (formErrors.join('').length === 0);
        this.setState({ formValid, formErrors });
    }

    render () {
        return (
            <div className="create-contact-form">
                <h2>Create Contact</h2>
                <form onSubmit={this.submitForm}>
                    <FormErrors formErrors={this.state.formErrors} />
                    <ul>
                        <li>
                            <label htmlFor="name">Name</label>
                            <input type="text" required name="name"
                                   placeholder="Name"
                                   value={this.state.name}
                                   onChange={this.handleInputChange}  />
                        </li>
                        <li>
                            <label htmlFor="address">Address</label>
                            <input type="text" required name="address"
                                   value={this.state.address}
                                   onChange={this.handleInputChange}  />
                        </li>
                        <li>
                            <input type="submit" value="Create" disabled={!this.state.formValid } />
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

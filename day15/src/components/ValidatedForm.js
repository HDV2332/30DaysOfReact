import React from 'react';
import validator from 'validator';

export default class ValidatedForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        touched: {
            firstName: false,
            lastName: false,
            email: false
        }
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target
        if (type === 'checkbox') {
            this.setState({
                skills: { ...this.state.skills, [name]: checked },
            })
        } else if (type === 'file') {
            this.setState({ [name]: e.target.files[0] })
        } else {
            this.setState({ [name]: value })
        }
    }

    handleBlur = (e) => {
        const { name, value } = e.target
        this.setState({ touched: { ...this.state.touched, [name]: true } })
    }

    validate = () => {
        const errors = {
            firstName: '',
            lastName: '',
            email: ''
        }
        if (
            (this.state.touched.firstName && this.state.firstName.length < 3) ||
            (this.state.touched.firstName && this.state.firstName.length > 12)
        ) {
            errors.firstName = 'First name must be between 2 and 12.'
        }
        if (
            (this.state.touched.lastName && this.state.lastName.length < 3) ||
            (this.state.touched.lastName && this.state.lastName.length > 12)
        ) {
            errors.lastName = 'Last name must be between 2 and 12.'
        }
        if (this.state.touched.email && !validator.isEmail(this.state.email)) {
            errors.email = 'Please enter correct email.'
        }
        return errors
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {
            firstName,
            lastName,
            email
        } = this.state

        const data = {
            firstName,
            lastName,
            email
        }

        console.log(data);
    }
    render() {
        const { firstName, lastName, email } = this.validate()
        return (
            <div className='form-wrapper'>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='row'>
                        <div className='form-group'>
                            <label htmlFor='firstName'>First Name </label>
                            <input
                                type='text'
                                name='firstName'
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder='First Name'
                            />{' '}
                            <br />
                            <small>{firstName}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name </label>
                            <input
                                type='text'
                                name='lastName'
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder='Last Name'
                            />{' '}
                            <br />
                            <small>{lastName}</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email </label>
                            <input
                                type='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder='Email'
                            />{' '}
                            <br />
                            <small>{email}</small>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

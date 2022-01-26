import React, { Component } from 'react'
import { selectOptions } from './components/Options/optionsSelect'

export default class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
      email: false,
      tel: false,
      dateOfBirth: false,
      favoriteColor: false,
      weight: false,
      country: false,
      bio: false
    },
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
      email: '',
      tel: '',
      dateOfBirth: '',
      favoriteColor: '',
      weight: '',
      country: '',
      bio: ''
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
    if (
      (this.state.touched.email && this.state.email.indexOf('@') < 1) ||
      (this.state.touched.email &&
        (this.state.touched.email.indexOf('.') - this.state.touched.email.indexOf('@') < 2)
      )) {
      errors.email = 'Please enter correct email.'
    }
    let regVN = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/
    if (this.state.touched.tel && (!regVN.test(this.state.tel))) {
      errors.tel = 'Please enter valid phone number.'
    }
    if (this.state.touched.dateOfBirth && this.state.dateOfBirth === '') {
      errors.dateOfBirth = 'Please enter a date.'
    }
    if (this.state.touched.favoriteColor && this.state.favoriteColor === '') {
      errors.favoriteColor = 'Please select a color'
    }
    let regNum = /^[+]?\d+([.]\d+)?$/
    if (this.state.touched.weight && (!regNum.test(this.state.weight))) {
      errors.weight = 'Please enter valid weight in Kilograms.'
    }
    if (this.state.touched.country && this.state.country === '') {
      errors.country = 'Please select a country.'
    }
    if (this.state.touched.bio && this.state.bio === '') {
      errors.bio = 'Please provide a bit more about yourself'
    }
    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = this.state

    const formattedSkills = []
    for (const key in skills) {
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
    }
    console.log(data)
  }

  render() {
    const { firstName, lastName, email, tel, dateOfBirth, favoriteColor, weight, country, bio } = this.validate()
    return (
      <div className='App-wrapper'>
        <div className='App'>
          <div className='title-wrapper'>
            <h3>Add Informations</h3>
          </div>
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

            <div className='form-group'>
              <label htmlFor='tel'>Telephone </label>
              <input
                type='tel'
                name='tel'
                value={this.state.tel}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Tel'
              />{' '}
              <br />
              <small>{tel}</small>
            </div>

            <div className='form-group'>
              <label htmlFor='dateOfBirth'>Date of birth </label>
              <input
                type='date'
                name='dateOfBirth'
                value={this.state.dateOfBirth}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Date of Birth'
              />{' '}
              <br />
              <small>{dateOfBirth}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='favoriteColor'>Favorite Color</label>
              <input
                type='color'
                id='favoriteColor'
                name='favoriteColor'
                value={this.state.favoriteColor}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Favorite Color'
              />{' '}
              <br />
              <small>{favoriteColor}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='weight'>Weight </label>
              <input
                type='number'
                id='weight'
                name='weight'
                value={this.state.weight}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Weight in Kg'
              />{' '}
              <br />
              <small>{weight}</small>
            </div>
            <div className='form-country'>
              <label htmlFor='country'>Country</label> <br />
              <select name='country' onChange={this.handleChange} onBlur={this.handleBlur} id='country'>
                {selectOptions}
              </select>
              {' '}
              <br />
              <small>{country}</small>
            </div>

            <div>
              <p>Gender</p>
              <div className='form-gender'>
                <div>
                  <input
                    type='radio'
                    id='female'
                    name='gender'
                    value='Female'
                    onChange={this.handleChange}
                    checked={this.state.gender === 'Female'}
                  />
                  <label htmlFor='female'>Female</label>
                </div>
                <div>
                  <input
                    id='male'
                    type='radio'
                    name='gender'
                    value='Male'
                    onChange={this.handleChange}
                    checked={this.state.gender === 'Male'}
                  />
                  <label htmlFor='male'>Male</label>
                </div>
                <div>
                  <input
                    id='other'
                    type='radio'
                    name='gender'
                    value='Other'
                    onChange={this.handleChange}
                    checked={this.state.gender === 'Other'}
                  />
                  <label htmlFor='other'>Other</label>
                </div>
              </div>
            </div>

            <div >
              <p>Select your skills</p>
              <div className='form-skills'>
                <div>
                  <input
                    type='checkbox'
                    id='html'
                    name='html'
                    onChange={this.handleChange}
                  />
                  <label htmlFor='html'>HTML</label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='css'
                    name='css'
                    onChange={this.handleChange}
                  />
                  <label htmlFor='css'>CSS</label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    id='javascript'
                    name='javascript'
                    onChange={this.handleChange}
                  />
                  <label htmlFor='javascript'>JavaScript</label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor='bio' >Bio</label>
              <br />
              <textarea
                className='form-bio-textarea'
                id='bio'
                name='bio'
                value={this.state.bio}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                cols='120'
                rows='10'
                placeholder='Write about yourself ...'
              />{' '}
              <br />
              <small>{bio}</small>
            </div>

            <div className='form-file'>
              <input type='file' name='file' onChange={this.handleChange} placeholder='Please choose a file' />
            </div>
            <div className='form-button'>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


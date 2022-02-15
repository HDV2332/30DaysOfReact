import React, { useState } from 'react'
import selectOptions from './components/selectOptions'
import validator from 'validator'

const App = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    title: '',
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
      title: false,
      telephone: false,
      dateOfBirth: false,
      weight: false,
      gender: false,
      bio: false,
      country: false
    },
  }
  const [formData, setFormData] = useState(initialState)

  const onChange = (e) => {

    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        skills: { ...formData.skills, [name]: checked },
      })
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const onSubmit = (e) => {

    e.preventDefault()
    const {
      firstName,
      lastName,
      title,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = formData

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }

    const data = {
      firstName,
      lastName,
      title,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    }
    
    //send collected data
    console.log(data)
  }

  const onBlur = (e) => {
    const { name } = e.target
    setFormData({ ...formData, touched: { ...formData.touched, [name]: true } })
  }

  const validate = () => {
    //Regex 
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const PHONENUM_REGEX = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/
    const WEIGHT_REGEX = /^[+]?\d+([.]\d+)?$/

    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      tel: '',
      dateOfBirth: '',
      weight: '',
      bio: '',
      country: '',
      gender: ''
    }

    if (
      (formData.touched.firstName && formData.firstName.length < 3) ||
      (formData.touched.firstName && formData.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12.'
    }

    if (
      (formData.touched.lastName && formData.lastName.length == "")
    ) {
      errors.lastName = 'Please enter your last name.'
    }

    if (
      (formData.touched.title && formData.title.length == "")
    ) {
      errors.title = 'Please enter a valid job position.'
    }

    if (
      (formData.touched.email && ((!EMAIL_REGEX.test(formData.email))))
    ) {
      // console.log('mail error');
      errors.email = 'Please enter a valid email address.'
    }

    if (
      (formData.touched.tel && (!PHONENUM_REGEX.test(formData.tel)))
    ) {
      errors.tel = 'Please enter a valid email telephone number.'
    }

    if (
      (formData.touched.dateOfBirth && (!validator.isDate(formData.dateOfBirth)))
    ) {
      errors.dateOfBirth = 'Please enter your date of birth.'
    }

    if (
      (formData.touched.weight && (!WEIGHT_REGEX.test(formData.weight)))
    ) {
      errors.weight = 'Please enter your weight in kilograms.'
    }

    if (
      (formData.touched.gender && formData.gender == "")
    ) {
      errors.gender = 'Please select a gender.'
    }
    if (
      (formData.touched.country && formData.country == "")
    ) {
      errors.country = 'Please select your country of origin.'
    }

    if (
      (formData.touched.bio && formData.bio == "")
    ) {
      errors.bio = 'Please provide informations about yourself.'
    }

    return errors
  }

  // accessing the state value by destrutcturing the state
  const {
    firstName,
    lastName,
    title,
    country,
    email,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    gender,
    bio,
  } = formData

  const errors = validate()
  return (
    <div className='App-wrapper'>
      <div className='App'>
        <div className='title-wrapper'>
          <h3>Add Informations</h3>
        </div>
        <form onSubmit={onSubmit} noValidate>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={firstName}
                onChange={onChange}
                onBlur={onBlur}
                placeholder='First Name'
              />
              <br />
              {errors.firstName && <small>{errors.firstName}</small>}
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={lastName}
                onChange={onChange}
                onBlur={onBlur}
                placeholder='Last Name'
              />
              <br />
              {errors.lastName && <small>{errors.lastName}</small>}
            </div>
            <div className='form-group'>
              <label htmlFor='title'>Title </label>
              <input
                type='text'
                id='title'
                name='title'
                placeholder='Title'
                value={title}
                onBlur={onBlur}
                onChange={onChange}
              />
              <br />
              {errors.title && <small>{errors.title}</small>}
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={onChange}
                onBlur={onBlur}
                placeholder='Email'
              />
              <br />
              {errors.email && <small>{errors.email}</small>}
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              id='tel'
              name='tel'
              value={tel}
              onChange={onChange}
              onBlur={onBlur}
              placeholder='Tel'
            />
            <br />
            {errors.tel && <small>{errors.tel}</small>}
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              id='dateOfBirth'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={onChange}
              onBlur={onBlur}
              placeholder='Date of Birth'
            />
            <br />
            {errors.dateOfBirth && <small>{errors.dateOfBirth}</small>}
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color</label>
            <input
              type='color'
              id='color'
              name='favoriteColor'
              value={favoriteColor}
              onChange={onChange}
              placeholder='Favorite Color'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={weight}
              onChange={onChange}
              onBlur={onBlur}
              placeholder='Weight in Kg'
            />
            <br />
            {errors.weight && <small>{errors.weight}</small>}
          </div>
          <div className='form-country'>
            <label htmlFor='country'>Country</label> <br />
            <select
              name='country'
              onChange={onChange}
              onBlur={onBlur}
              id='country'
              value={country}
            >
              {selectOptions}
            </select>
            <br />
            {errors.country && <small>{errors.country}</small>}
          </div>

          <div >
            <p>Gender</p>
            <div className='form-gender'>
              <div >
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  value='Female'
                  onChange={onChange}
                  checked={gender === 'Female'}
                />
                <label htmlFor='female'>Female</label>
              </div>
              <div>
                <input
                  id='male'
                  type='radio'
                  name='gender'
                  value='Male'
                  onChange={onChange}
                  checked={gender === 'Male'}
                />
                <label htmlFor='male'>Male</label>
              </div>
              <div>
                <input
                  id='other'
                  type='radio'
                  name='gender'
                  value='Other'
                  onChange={onChange}
                  checked={gender === 'Other'}
                />
                <label htmlFor='other'>Other</label>
              </div>
              <br />
              {errors.gender && <small>{errors.gender}</small>}
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div className='form-skills'>
              <div>
                <input type='checkbox' id='html' name='html' onChange={onChange} />
                <label htmlFor='html'>HTML</label>
              </div>
              <div>
                <input type='checkbox' id='css' name='css' onChange={onChange} />
                <label htmlFor='css'>CSS</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='javascript'
                  name='javascript'
                  onChange={onChange}
                />
                <label htmlFor='javascript'>JavaScript</label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={bio}
              onChange={onChange}
              onBlur={onBlur}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
            <br />
            {errors.bio && <small>{errors.bio}</small>}
          </div>

          <div className='form-file'>
            <input type='file' name='file' onChange={onChange} />
          </div>
          <div className='form-button'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;

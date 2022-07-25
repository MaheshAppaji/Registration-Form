// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    emailInput: '',
    passwordInput: '',
    confPasswordInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    showEmailError: false,
    showPasswordError: false,
    showConfPasswordError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastNameInput: value,
    })
  }

  renderLastNameField = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstNameInput: value,
    })
  }

  renderFirstNameField = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  onChangePassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onChangeConfPassword = event => {
    this.setState({
      confPasswordInput: event.target.value,
    })
  }

  onChangeEmail = event => {
    this.setState({
      emailInput: event.target.value,
    })
  }

  validateEmail = () => {
    const {emailInput} = this.state

    return emailInput !== ''
  }

  validatePassword = () => {
    const {passwordInput} = this.state
    return passwordInput !== ''
  }

  validateConfPassword = () => {
    const {confPasswordInput} = this.state

    return confPasswordInput !== ''
  }

  onBlurEmail = () => {
    const isValidEmail = this.validateEmail()

    this.setState({showEmailError: !isValidEmail})
  }

  onBlurPassword = () => {
    const isValidPassword = this.validatePassword()
    this.setState({
      showPasswordError: !isValidPassword,
    })
  }

  onBlurConfPassword = () => {
    const isValidConfPassword = this.validateConfPassword()
    this.setState({
      showConfPasswordError: !isValidConfPassword,
    })
  }

  renderEmailField = () => {
    const {emailInput, showEmailError} = this.state
    const className = showEmailError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          autoComplete="Off"
          id="email"
          className={className}
          value={emailInput}
          placeholder="First name"
          onChange={this.onChangeEmail}
          onBlur={this.onBlurEmail}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {passwordInput, showPasswordError} = this.state
    const className = showPasswordError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          autoComplete="Off"
          id="password"
          className={className}
          value={passwordInput}
          placeholder="Password"
          onChange={this.onChangePassword}
          onBlur={this.onBlurPassword}
        />
      </div>
    )
  }

  renderConfPasswordField = () => {
    const {confPasswordInput, showConfPasswordError} = this.state
    const className = showConfPasswordError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="cpassword">
          Password
        </label>
        <input
          type="password"
          autoComplete="Off"
          id="cpassword"
          className={className}
          value={confPasswordInput}
          placeholder="Confirm Password"
          onChange={this.onChangeConfPassword}
          onBlur={this.onBlurConfPassword}
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    const isValidEmail = this.validateEmail()
    const isValidPassword = this.validatePassword()
    const isValidConfPassword = this.validateConfPassword()

    if (
      isValidFirstName &&
      isValidLastName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfPassword
    ) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        showEmailError: !isValidEmail,
        showPasswordError: !isValidPassword,
        showConfPasswordError: !isValidConfPassword,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {
      showFirstNameError,
      showLastNameError,
      showEmailError,
      showPasswordError,
      showConfPasswordError,
    } = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-message">Required</p>}
        {this.renderEmailField()}
        {showEmailError && <p className="error-message">Required</p>}
        {this.renderPasswordField()}
        {showPasswordError && <p className="error-message">Required</p>}
        {this.renderConfPasswordField()}
        {showConfPasswordError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

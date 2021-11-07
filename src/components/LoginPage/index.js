import {Component} from 'react'
import logo from '../Assets/Images/logo.png'
import lgLoginImage from '../Assets/Images/lgLoginImage.png'
import './index.css'

class LoginForm extends Component {
  state = {
    inputUsername: '',
    inputPassword: '',
  }

  onChangeUsername = event => {
    this.setState({inputUsername: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  renderInputFields = () => {
    const {inputUsername, inputPassword} = this.state
    return (
      <>
        <div className="input-fields-container">
          <label htmlFor="username" className="label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            value={inputUsername}
            onChange={this.onChangeUsername}
            className="input-field"
          />
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            value={inputPassword}
            onChange={this.onChangePassword}
            className="input-field"
          />
          <button type="button" className="login-button">
            Login
          </button>
        </div>
      </>
    )
  }

  renderSystemLogin = () => (
    <div className="system-login-bg-container">
      <div className="system-login-container">
        <div className="system-login">
          <img src={logo} className="logo" alt="website logo" />
          <h1 className="website-name">Tasty Kitchens</h1>
          <h1 className="login">Login</h1>
          {this.renderInputFields()}
        </div>
      </div>
      <div className="system-login-image-container">
        <img
          src={lgLoginImage}
          alt="login page dish"
          className="system-login-image"
        />
      </div>
    </div>
  )

  render() {
    return (
      <>
        <div className="login-container">{this.renderSystemLogin()}</div>
      </>
    )
  }
}

export default LoginForm

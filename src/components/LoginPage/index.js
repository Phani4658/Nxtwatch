import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  InputFieldContainer,
  LabelText,
  InputField,
  Checkbox,
  LabelToggle,
  LoginPageBg,
  LoginCard,
  ErrorMsg,
  LoginBtn,
  Logo,
} from './styledComponents'
import ModeContext from '../../context/ModeContext'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    type: 'password',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleCheckbox = event => {
    if (event.target.checked) {
      this.setState({type: 'text'})
    } else {
      this.setState({type: 'password'})
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <InputFieldContainer>
        <LabelText htmlFor="username">USERNAME</LabelText>
        <InputField
          type="text"
          placeholder="username"
          id="username"
          name="username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </InputFieldContainer>
    )
  }

  renderPasswordField = () => {
    const {password, type} = this.state
    return (
      <InputFieldContainer>
        <LabelText htmlFor="password">PASSWORD</LabelText>
        <InputField
          type={type}
          placeholder="password"
          id="password"
          name="password"
          value={password}
          onChange={this.onChangePassword}
        />
        <Checkbox
          type="checkbox"
          id="toggle"
          onChange={this.onToggleCheckbox}
        />
        <LabelToggle htmlFor="toggle" className="toggle-password">
          Show Password
        </LabelToggle>
      </InputFieldContainer>
    )
  }

  renderLoginPage = () => {
    const {errorMsg, showErrorMsg} = this.state
    return (
      <ModeContext.Consumer>
        {value => {
          const {activeMode} = value
          const websiteLogoUrl =
            activeMode === 'Light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <LoginPageBg isLightMode={activeMode === 'Light'}>
              <LoginCard isLightMode={activeMode === 'Light'}>
                <Logo
                  src={websiteLogoUrl}
                  alt="website logo"
                  className="logo"
                />
                <form onSubmit={this.onClickLogin}>
                  {this.renderUsernameField()}
                  {this.renderPasswordField()}
                  <LoginBtn type="submit">Login</LoginBtn>
                  {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </form>
              </LoginCard>
            </LoginPageBg>
          )
        }}
      </ModeContext.Consumer>
    )
  }

  render() {
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return this.renderLoginPage()
  }
}

export default LoginPage

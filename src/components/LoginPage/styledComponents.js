import styled from 'styled-components'

export const InputFieldContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 2em;
`

export const LabelText = styled.label`
  font-size: 0.8em;
  font-weight: 600;
  display: block;
  margin-bottom: 3px;
`
export const InputField = styled.input`
  width: 100%;
  padding: 8px 15px;
  border-radius: 5px;
  border: 1px solid;
  margin-bottom: 4px;
`

export const Checkbox = styled.input`
  margin-right: 10px;
  margin-top: 10px;
`

export const LabelToggle = styled.label`
  margin-top: 10px;
`
export const LoginPageBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isLightMode ? '#f9f9f9' : '#181818')};
`

export const LoginCard = styled.div`
  padding: 2em;
  box-shadow: ${props =>
    props.isLightMode
      ? '15px 15px 10px 5px #e2e8f0'
      : '15px 15px 10px 5px ##212121'};
  background-color: ${props => (props.isLightMode ? '#f8fafc' : '#231f20')};
  border-radius: 7px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${props => (props.isLightMode ? '#475569' : '#fff')};
  @media screen and (max-width: 767px) {
    width: 90%;
    margin: auto;
  }
`
export const Logo = styled.img`
  width: 50%;
  margin: 2em auto;
  margin-top: 1em;
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  width: 80%;
  margin: 0 2.7em;
  border: none;
  border-radius: 7px;
  padding: 10px;
  color: #ffffff;
  font-size: 0.8em;
  font-weight: 600;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  width: 80%;
  margin: auto;
  margin-top: 3px;
  font-size: 0.8em;
`

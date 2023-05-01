import styled from 'styled-components'

export const HeaderLogo = styled.img`
  width: 50%;
`

export const HeaderStyle = styled.div`
  background-color: ${props => (props.isLightMode ? '#fff' : '#0f0f0f')};
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
`

export const Icon = styled.button`
  background-color: transparent;
  margin: none;
  border: none;
  width: 80px;
  height: 80px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`

export const ProfilePic = styled.img`
  width: 38px;
  height: 38px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const MobIcon = styled(Icon)`
  color: ${props => (props.isLightMode ? '#000' : '#fff')};
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  padding: 15px 30px;
  font-size: 1em;
  margin: 0 20px;
  border: 1px solid;
  cursor: pointer;
  border-color: ${props => (props.isLightMode ? '#3b82f6' : ' #ffffff')};
  color: ${props => (props.isLightMode ? '#3b82f6' : ' #ffffff')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HeaderRightLg = styled.ul`
  display: flex;
  align-items: center;
  margin: 10px;
  list-style-type: none;
  padding: none;
`

export const PopupPara = styled.p`
  color: ${props => (props.isLightMode ? '#3b82f6' : '#fff')};
`
export const PopupBg = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  margin: 0;
`

export const CancelButton = styled.button`
  background-color: transparent;
  padding: 15px 30px;
  font-size: 1em;
  margin: 0 20px;
  border: 1px solid;
  cursor: pointer;
  border-color: ${props => (props.isLightMode ? '#616e7c' : ' #212121')};
  color: ${props => (props.isLightMode ? '#000' : ' #fff')};
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 15px 30px;
  margin: 0 20px;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 700;
`

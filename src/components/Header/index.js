import {Link, withRouter} from 'react-router-dom'
import {HiMoon, HiSun, HiOutlineLogout} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {
  HeaderLogo,
  HeaderStyle,
  Icon,
  ProfilePic,
  LogoutBtn,
  HeaderRightLg,
  MobIcon,
  PopupPara,
  PopupBg,
  CancelButton,
  ConfirmButton,
} from './StyledComponents'
import ModeContext from '../../context/ModeContext'
import './index.css'

const Header = props => (
  <ModeContext.Consumer>
    {value => {
      const {activeMode, changeMode} = value
      // Popup Styling
      const contentStyle = {
        background: activeMode === 'Light' ? '#fff' : '#191919',
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const renderLogoutPopup = () => (
        <Popup
          modal
          trigger={
            <div>
              <LogoutBtn isLightMode={activeMode === 'Light'}>Logout</LogoutBtn>
              <MobIcon isLightMode={activeMode === 'Light'}>
                <HiOutlineLogout style={{fontSize: '23px'}} />
              </MobIcon>
            </div>
          }
          className="popup-content"
          {...{contentStyle}}
        >
          {close => (
            <PopupBg>
              <PopupPara isLightMode={activeMode === 'Light'}>
                Are you sure, you want to logout
              </PopupPara>
              <div>
                <CancelButton
                  isLightMode={activeMode === 'Light'}
                  onClick={() => close()}
                >
                  Cancel
                </CancelButton>
                <ConfirmButton onClick={onClickLogout}>Confirm</ConfirmButton>
              </div>
            </PopupBg>
          )}
        </Popup>
      )

      const websiteLogoUrl =
        activeMode === 'Light'
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      return (
        <HeaderStyle isLightMode={activeMode === 'Light'}>
          <div>
            <Link to="/">
              <HeaderLogo
                src={websiteLogoUrl}
                alt="website logo"
                className="header-logo"
              />
            </Link>
          </div>
          <HeaderRightLg className="header-right-part-lg">
            <Icon onClick={changeMode} data-testid="theme">
              {activeMode === 'Light' ? (
                <HiMoon style={{fontSize: '28px'}} />
              ) : (
                <HiSun style={{color: '#fff', fontSize: '28px'}} />
              )}
            </Icon>
            <ProfilePic
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <MobIcon isLightMode={activeMode === 'Light'}>
              <GiHamburgerMenu style={{fontSize: '20px'}} />
            </MobIcon>
            {renderLogoutPopup()}
          </HeaderRightLg>
        </HeaderStyle>
      )
    }}
  </ModeContext.Consumer>
)

export default withRouter(Header)

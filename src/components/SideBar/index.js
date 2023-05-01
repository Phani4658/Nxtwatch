import {Link} from 'react-router-dom'
import {HiOutlineHome, HiFire, HiSave} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import ModeContext from '../../context/ModeContext'
import {
  SideBarBg,
  SideBarHeading,
  IconsContainer,
  Icon,
  SideBarBottomContainer,
  SideBarParagraph,
  RouteName,
  RouteContainer,
} from './StyledComponents'

const SideBar = () => (
  <ModeContext.Consumer>
    {value => {
      const {activeMode, selectedRoute, changeRoute} = value
      return (
        <SideBarBg isLightMode={activeMode === 'Light'}>
          <div>
            <Link to="/" style={{textDecoration: 'none'}}>
              <RouteContainer
                id="Home"
                isLightMode={activeMode === 'Light'}
                isSelected={selectedRoute === 'Home'}
                onClick={changeRoute}
              >
                <HiOutlineHome
                  style={{fontSize: '24px', marginRight: '10px'}}
                />
                <RouteName>Home</RouteName>
              </RouteContainer>
            </Link>
            <Link to="/trending" style={{textDecoration: 'none'}}>
              <RouteContainer
                id="Trending"
                isLightMode={activeMode === 'Light'}
                isSelected={selectedRoute === 'Trending'}
                onClick={changeRoute}
              >
                <HiFire style={{fontSize: '24px', marginRight: '10px'}} />
                <RouteName>Trending</RouteName>
              </RouteContainer>
            </Link>
            <Link to="/gaming" style={{textDecoration: 'none'}}>
              <RouteContainer
                id="Gaming"
                isLightMode={activeMode === 'Light'}
                isSelected={selectedRoute === 'Gaming'}
                onClick={changeRoute}
              >
                <SiYoutubegaming
                  style={{fontSize: '24px', marginRight: '10px'}}
                />
                <RouteName>Gaming</RouteName>
              </RouteContainer>
            </Link>
            <Link to="/saved-videos" style={{textDecoration: 'none'}}>
              <RouteContainer
                id="Saved Videos"
                isLightMode={activeMode === 'Light'}
                isSelected={selectedRoute === 'Saved'}
                onClick={changeRoute}
              >
                <HiSave style={{fontSize: '24px', marginRight: '10px'}} />
                <RouteName>Saved Videos</RouteName>
              </RouteContainer>
            </Link>
          </div>
          <SideBarBottomContainer isLightMode={activeMode === 'Light'}>
            <SideBarHeading>CONTACT US</SideBarHeading>
            <IconsContainer>
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <SideBarParagraph>
              Enjoy! Now to see your channels and recommendations!
            </SideBarParagraph>
          </SideBarBottomContainer>
        </SideBarBg>
      )
    }}
  </ModeContext.Consumer>
)

export default SideBar

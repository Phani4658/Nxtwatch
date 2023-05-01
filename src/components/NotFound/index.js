import Header from '../Header'
import {
  NotFoundBg,
  NotFoundMain,
  NotFoundImg,
  NotFoundSection,
  NotFoundPara,
} from './styledComponents'
import ModeContext from '../../context/ModeContext'
import {SideBarContainer} from '../HomeRoute/styledComponents'
import SideBar from '../SideBar'

const NotFound = () => (
  <ModeContext.Consumer>
    {value => {
      const {activeMode} = value
      const notFoundImg =
        activeMode === 'Light'
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <NotFoundBg isLightMode={activeMode === 'Light'}>
          <Header />
          <NotFoundMain>
            <SideBarContainer>
              <SideBar />
            </SideBarContainer>
            <NotFoundSection isLightMode={activeMode === 'Light'}>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <h1>Page Not Found</h1>
              <NotFoundPara isLightMode={activeMode === 'Light'}>
                We are sorry, the page you requested could not be found
              </NotFoundPara>
            </NotFoundSection>
          </NotFoundMain>
        </NotFoundBg>
      )
    }}
  </ModeContext.Consumer>
)

export default NotFound

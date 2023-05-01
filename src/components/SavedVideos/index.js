import {HiFire} from 'react-icons/hi'
import ModeContext from '../../context/ModeContext'
import {
  TrendingPage,
  TrendingContainer,
  TrendingHeading,
  VideosContainer,
  RouteName,
} from '../Trending/styledComponents'
import {
  FailureViewImage,
  FailureHeading,
  FailureViewBg,
  FailurePara,
} from '../FailureView/styledComponents'
import {
  HomePageBottom,
  SideBarContainer,
  HomePageRight,
} from '../HomeRoute/styledComponents'
import SideBar from '../SideBar'
import Header from '../Header'
import TrendingVideoCard from '../TrendingVideoCard'

const SavedVideos = () => (
  <ModeContext.Consumer>
    {value => {
      const {savedVideos, activeMode} = value

      const renderNoVideos = () => (
        <FailureViewBg>
          <FailureViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <FailureHeading isLightMode={activeMode === 'Light'}>
            No saved videos found
          </FailureHeading>
          <FailurePara>
            You can save your videos while watching them
          </FailurePara>
        </FailureViewBg>
      )

      const renderSavedVideos = () => {
        if (savedVideos.length === 0) {
          return renderNoVideos()
        }
        return (
          <>
            <TrendingHeading isLightMode={activeMode === 'Light'}>
              <HiFire
                style={{
                  fontSize: '24px',
                  marginRight: '10px',
                  color: '#ff0b37',
                }}
              />
              <RouteName isLightMode={activeMode === 'Light'}>
                Trending
              </RouteName>
            </TrendingHeading>
            <VideosContainer>
              {savedVideos.map(video => (
                <TrendingVideoCard video={video} key={video.id} />
              ))}
            </VideosContainer>
          </>
        )
      }

      const renderVideosSection = () => (
        <TrendingContainer>{renderSavedVideos()}</TrendingContainer>
      )

      const renderTrendingView = () => (
        <HomePageBottom>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <HomePageRight>{renderVideosSection()}</HomePageRight>
        </HomePageBottom>
      )

      return (
        <TrendingPage
          isLightMode={activeMode === 'Light'}
          data-testid="savedVideos"
        >
          <Header />
          {renderTrendingView()}
        </TrendingPage>
      )
    }}
  </ModeContext.Consumer>
)

export default SavedVideos

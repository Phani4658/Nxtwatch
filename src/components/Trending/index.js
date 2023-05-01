import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ModeContext from '../../context/ModeContext'
import {
  HomePageBottom,
  SideBarContainer,
  HomePageRight,
  LoaderContainer,
} from '../HomeRoute/styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  TrendingPage,
  TrendingContainer,
  TrendingHeading,
  VideosContainer,
  RouteName,
} from './styledComponents'
import FailureView from '../FailureView'
import TrendingVideoCard from '../TrendingVideoCard'

const APIStatusIndicatorConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Trending extends Component {
  state = {APIStatus: APIStatusIndicatorConstants.loading, videosList: []}

  componentDidMount() {
    this.getVideoDetails()
  }

  changeToCamelCase = video => ({
    id: video.id,
    title: video.title,
    thumbnailUrl: video.thumbnail_url,
    channel: {
      name: video.channel.name,
      profileImageUrl: video.channel.profile_image_url,
    },
    viewCount: video.view_count,
    publishedAt: video.published_at,
  })

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const {videos} = data
    if (response.ok) {
      const updatedVideoDetails = videos.map(video =>
        this.changeToCamelCase(video),
      )

      this.setState({
        videosList: updatedVideoDetails,
        APIStatus: APIStatusIndicatorConstants.success,
      })
    } else {
      this.setState({APIStatus: APIStatusIndicatorConstants.failure})
    }
  }

  onClickSearchButton = () => {
    this.setState({APIStatus: APIStatusIndicatorConstants.loading})
    this.getVideoDetails()
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <VideosContainer>
        {videosList.map(video => (
          <TrendingVideoCard video={video} key={video.id} />
        ))}
      </VideosContainer>
    )
  }

  renderAPIResultView = () => {
    const {APIStatus} = this.state
    switch (APIStatus) {
      case APIStatusIndicatorConstants.loading:
        return this.renderLoaderView()
      case APIStatusIndicatorConstants.failure:
        return <FailureView onClickSearchButton={this.onClickSearchButton} />
      case APIStatusIndicatorConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  renderTrendingVideos = () => (
    <ModeContext.Consumer>
      {value => {
        const {activeMode} = value
        return (
          <TrendingContainer>
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
            {this.renderAPIResultView()}
          </TrendingContainer>
        )
      }}
    </ModeContext.Consumer>
  )

  renderTrendingView = () => (
    <HomePageBottom>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <HomePageRight>{this.renderTrendingVideos()}</HomePageRight>
    </HomePageBottom>
  )

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {activeMode} = value
          return (
            <TrendingPage
              isLightMode={activeMode === 'Light'}
              data-testid="trending"
            >
              <Header />
              {this.renderTrendingView()}
            </TrendingPage>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Trending

import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ModeContext from '../../context/ModeContext'
import {
  HomePage,
  SideBarContainer,
  HomePageBottom,
  BannerBg,
  HomePageRight,
  CloseButtonContainer,
  CloseButton,
  BannerLogo,
  BannerText,
  BannerBtn,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
  LoaderContainer,
  ResultView,
  VideosContainer,
} from './styledComponents'
import {
  FailureViewImage,
  FailureHeading,
  FailureViewBg,
  FailurePara,
  FailureBtn,
} from '../FailureView/styledComponents'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'
import FailureView from '../FailureView'

const APIStatusIndicatorConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeRoute extends Component {
  state = {
    showBanner: true,
    videosList: [],
    apiStatus: APIStatusIndicatorConstants.loading,
    searchQuery: '',
  }

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
    const {searchQuery} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
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
        apiStatus: APIStatusIndicatorConstants.success,
      })
    } else {
      this.setState({apiStatus: APIStatusIndicatorConstants.failure})
    }
  }

  onClickCloseBtn = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  renderBannerView = () => (
    <BannerBg data-testid="banner">
      <CloseButtonContainer>
        <CloseButton>
          <AiOutlineClose
            style={{fontSize: '20px'}}
            onClick={this.onClickCloseBtn}
            data-testid="close"
          />
        </CloseButton>
      </CloseButtonContainer>
      <div>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <BannerBtn>GET IT NOW</BannerBtn>
      </div>
    </BannerBg>
  )

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderNoVideos = () => (
    <ModeContext.Consumer>
      {value => {
        const {activeMode} = value
        return (
          <FailureViewBg>
            <FailureViewImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
            />
            <FailureHeading isLightMode={activeMode === 'Light'}>
              No Search results found
            </FailureHeading>
            <FailurePara>
              Try different key words or remove search filter
            </FailurePara>
            <FailureBtn onClick={this.onClickSearchButton}>Retry</FailureBtn>
          </FailureViewBg>
        )
      }}
    </ModeContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoVideos()
    }
    return (
      <VideosContainer>
        {videosList.map(video => (
          <VideoCard video={video} key={video.id} />
        ))}
      </VideosContainer>
    )
  }

  renderAPIResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
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

  onChangeSearchQuery = event => {
    this.setState({searchQuery: event.target.value})
  }

  onClickSearchButton = () => {
    this.setState({apiStatus: APIStatusIndicatorConstants.loading})
    this.getVideoDetails()
  }

  renderHomeView = () => {
    const {showBanner} = this.state

    return (
      <ModeContext.Consumer>
        {value => {
          const {activeMode} = value
          return (
            <HomePageBottom>
              <SideBarContainer>
                <SideBar />
              </SideBarContainer>
              <HomePageRight>
                {showBanner && this.renderBannerView()}
                <SearchBarContainer data-testid="searchButton">
                  <SearchBar
                    onChange={this.onChangeSearchQuery}
                    type="search"
                    placeholder="search"
                    isLightMode={activeMode === 'Light'}
                  />
                  <SearchIcon
                    isLightMode={activeMode === 'Light'}
                    onClick={this.onClickSearchButton}
                  >
                    <AiOutlineSearch style={{fontSize: '18px'}} />
                  </SearchIcon>
                </SearchBarContainer>
                <ResultView>{this.renderAPIResultView()}</ResultView>
              </HomePageRight>
            </HomePageBottom>
          )
        }}
      </ModeContext.Consumer>
    )
  }

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {activeMode} = value
          return (
            <HomePage isLightMode={activeMode === 'Light'} data-testid="home">
              <Header />
              {this.renderHomeView()}
            </HomePage>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default HomeRoute

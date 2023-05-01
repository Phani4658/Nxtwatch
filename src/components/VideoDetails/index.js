import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsDot} from 'react-icons/bs'
import {BiDislike, BiLike} from 'react-icons/bi'
import {HiOutlineSave} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import {
  HomePage,
  HomePageBottom,
  SideBarContainer,
  LoaderContainer,
  HomePageRight,
} from '../HomeRoute/styledComponents'
import SideBar from '../SideBar'
import ModeContext from '../../context/ModeContext'
import {
  VideoDetailsPage,
  VideoLoader,
  VideoDetailsBottomPart,
  VideoTitle,
  VideoLikeDetailsContainer,
  ViewCount,
  ViewAndLikeContainer,
  ButtonContainer,
  ButtonContainerSm,
  ButtonText,
  Button,
  ChannelDetails,
  ChannelLogoContainer,
  ChannelName,
  SubscribersCount,
  Description,
} from './styledComponents'
import VideoPlayer from '../VideoPlayer'
import FailureView from '../FailureView'
import {ChannelLogo} from '../VideoCard/styledComponents'
import {TrendingPage} from '../Trending/styledComponents'

const APIStatusIndicatorConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    apiStatus: APIStatusIndicatorConstants.loading,
    videoDetails: {},
    like: false,
    dislike: false,
    save: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  updateVideoDetails = videoDetails => ({
    id: videoDetails.id,
    title: videoDetails.title,
    videoUrl: videoDetails.video_url,
    thumbnailUrl: videoDetails.thumbnail_url,
    description: videoDetails.description,
    viewCount: videoDetails.view_count,
    publishedAt: videoDetails.published_at,
    channel: {
      name: videoDetails.channel.name,
      subscribersCount: videoDetails.channel.subscriber_count,
      profileImageUrl: videoDetails.channel.profile_image_url,
    },
  })

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const modifiedData = {videoDetails: data.video_details}
    const {videoDetails} = modifiedData
    const modifiedVideoDetails = this.updateVideoDetails(videoDetails)
    this.setState({
      apiStatus: APIStatusIndicatorConstants.success,
      videoDetails: modifiedVideoDetails,
    })
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({like: !prevState.like, dislike: false}))
  }

  onClickDislikeButton = () => {
    this.setState(prevState => ({dislike: !prevState.dislike, like: false}))
  }

  saveVideoDetails = () => (
    <ModeContext.Consumer>
      {value => {
        const {addToSavedVideos} = value
        const {videoDetails} = this.state
        addToSavedVideos(videoDetails)
      }}
    </ModeContext.Consumer>
  )

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  isCharacterALetter = char => /[a-zA-Z]/.test(char)

  renderSuccessView = () => {
    const {videoDetails, like, dislike, save} = this.state
    const {
      videoUrl,
      title,
      publishedAt,
      viewCount,
      id,
      channel,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscribersCount} = channel
    const timeOccured = formatDistanceToNow(new Date(publishedAt))
    let index = 0
    while (index < timeOccured.length) {
      if (
        !(
          this.isCharacterALetter(timeOccured[index]) ||
          timeOccured[index] === ' '
        )
      ) {
        break
      }

      index += 1
    }
    const saveText = save ? 'Saved' : 'Save'
    const modifiedTime = timeOccured.slice(index, timeOccured.length)
    return (
      <ModeContext.Consumer>
        {value => {
          const {activeMode, addToSavedVideos, deleteFromSavedVideos} = value

          const performAction = () => {
            if (!save) {
              addToSavedVideos(videoDetails)
            } else {
              deleteFromSavedVideos(id)
            }
          }

          const onClickSaveButton = () => {
            this.setState(prevState => ({save: !prevState.save}), performAction)
          }

          return (
            <VideoDetailsPage>
              <VideoLoader>
                <VideoPlayer videoUrl={videoUrl} />
              </VideoLoader>
              <VideoDetailsBottomPart>
                <VideoTitle isLightMode={activeMode === 'Light'}>
                  {title}
                </VideoTitle>
                <VideoLikeDetailsContainer>
                  <ViewAndLikeContainer isLightMode={activeMode === 'Light'}>
                    <ViewCount>{viewCount} views</ViewCount>
                    <BsDot style={{fontSize: '18px'}} />
                    <ViewCount>{publishedAt}</ViewCount>
                  </ViewAndLikeContainer>
                  <ButtonContainer>
                    <Button isActive={like}>
                      <BiLike />
                      <ButtonText
                        isActive={like}
                        onClick={this.onClickLikeButton}
                      >
                        Like
                      </ButtonText>
                    </Button>
                    <Button isActive={dislike}>
                      <BiDislike />
                      <ButtonText
                        isActive={dislike}
                        onClick={this.onClickDislikeButton}
                      >
                        Dislike
                      </ButtonText>
                    </Button>
                    <Button isActive={save}>
                      <HiOutlineSave />
                      <ButtonText isActive={save} onClick={onClickSaveButton}>
                        {saveText}
                      </ButtonText>
                    </Button>
                  </ButtonContainer>
                </VideoLikeDetailsContainer>
              </VideoDetailsBottomPart>
              <hr />
              <ChannelDetails>
                <ChannelLogoContainer>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                </ChannelLogoContainer>
                <div>
                  <ChannelName isLightMode={activeMode === 'Light'}>
                    {name}
                  </ChannelName>
                  <SubscribersCount isLightMode={activeMode === 'Light'}>
                    {subscribersCount} subscribers
                  </SubscribersCount>
                  <Description isLightMode={activeMode === 'Light'}>
                    {description}
                  </Description>
                </div>
              </ChannelDetails>
            </VideoDetailsPage>
          )
        }}
      </ModeContext.Consumer>
    )
  }

  onClickSearchButton = () => {
    this.getVideoDetails()
  }

  renderAPIView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case APIStatusIndicatorConstants.loading:
        return this.renderLoaderView()
      case APIStatusIndicatorConstants.success:
        return this.renderSuccessView()
      case APIStatusIndicatorConstants.failure:
        return <FailureView onClickSearchButton={this.onClickSearchButton} />
      default:
        return null
    }
  }

  renderVideoDetailsView = () => (
    <ModeContext.Consumer>
      {value => {
        const {activeMode} = value
        return (
          <HomePageBottom>
            <SideBarContainer>
              <SideBar />
            </SideBarContainer>
            <HomePageRight>{this.renderAPIView()}</HomePageRight>
          </HomePageBottom>
        )
      }}
    </ModeContext.Consumer>
  )

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {activeMode} = value
          return (
            <TrendingPage
              isLightMode={activeMode === 'Light'}
              data-testid="videoItemDetails"
            >
              <Header />
              {this.renderVideoDetailsView()}
            </TrendingPage>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default VideoDetails

/*

<ButtonContainerSm>
                  <Button isActive={like}>
                    <BiLike />
                    <ButtonText
                      isActive={like}
                      onClick={this.onClickLikeButton}
                    >
                      Like
                    </ButtonText>
                  </Button>
                  <Button isActive={dislike}>
                    <BiDislike />
                    <ButtonText
                      isActive={dislike}
                      onClick={this.onClickDislikeButton}
                    >
                      Dislike
                    </ButtonText>
                  </Button>
                  <Button isActive={save}>
                    <HiOutlineSave />
                    <ButtonText isActive={save} onClick={onClickSaveButton}>
                      {saveText}
                    </ButtonText>
                  </Button>
                </ButtonContainerSm>
*/

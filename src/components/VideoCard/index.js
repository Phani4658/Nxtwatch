import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoCardBg,
  ThumbnailUrl,
  VideoDetailsContainer,
  ChannelLogo,
  ChannelLogoContainer,
  VideoTitle,
  ChannelName,
  VideoOuterCard,
  ViewCount,
  ViewContainer,
} from './styledComponents'
import ModeContext from '../../context/ModeContext'

const VideoCard = props => {
  const {video} = props
  const {title, channel, thumbnailUrl, id, viewCount, publishedAt} = video
  const {name, profileImageUrl} = channel

  const isCharacterALetter = char => /[a-zA-Z]/.test(char)

  return (
    <ModeContext.Consumer>
      {value => {
        const {activeMode} = value
        const timeOccured = formatDistanceToNow(new Date(publishedAt))
        let index = 0
        while (index < timeOccured.length) {
          if (
            !(
              isCharacterALetter(timeOccured[index]) ||
              timeOccured[index] === ' '
            )
          ) {
            break
          }

          index += 1
        }
        const modifiedTime = timeOccured.slice(index, timeOccured.length)
        return (
          <VideoOuterCard>
            <Link
              to={`/videos/${id}`}
              style={{textDecoration: 'none', color: 'transparent'}}
            >
              <VideoCardBg>
                <ThumbnailUrl src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetailsContainer>
                  <ChannelLogoContainer>
                    <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  </ChannelLogoContainer>
                  <div>
                    <VideoTitle isLightMode={activeMode === 'Light'}>
                      {title}
                    </VideoTitle>
                    <ViewContainer isLightMode={activeMode === 'Light'}>
                      <ChannelName isLightMode={activeMode === 'Light'}>
                        {name}
                      </ChannelName>
                      <BsDot style={{fontSize: '18px'}} />
                      <ViewCount>{viewCount} views</ViewCount>
                      <BsDot style={{fontSize: '18px'}} />
                      <ViewCount>{publishedAt} </ViewCount>
                    </ViewContainer>
                  </div>
                </VideoDetailsContainer>
              </VideoCardBg>
            </Link>
          </VideoOuterCard>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default VideoCard

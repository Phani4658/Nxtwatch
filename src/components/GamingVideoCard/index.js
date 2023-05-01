import {Link} from 'react-router-dom'
import {
  VideoCardBg,
  ThumbnailUrl,
  VideoDetailsContainer,
  VideoTitle,
  VideoOuterCard,
  ViewCount,
  ViewContainer,
} from './styledComponents'
import ModeContext from '../../context/ModeContext'

const GamingVideoCard = props => {
  const {video} = props
  const {title, thumbnailUrl, id, viewCount} = video

  return (
    <ModeContext.Consumer>
      {value => {
        const {activeMode} = value

        return (
          <VideoOuterCard>
            <Link
              to={`/videos/${id}`}
              style={{textDecoration: 'none', color: 'transparent'}}
            >
              <VideoCardBg>
                <ThumbnailUrl src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetailsContainer>
                  <div>
                    <VideoTitle isLightMode={activeMode === 'Light'}>
                      {title}
                    </VideoTitle>
                    <ViewContainer isLightMode={activeMode === 'Light'}>
                      <ViewCount>{viewCount} watching worldwide</ViewCount>
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

export default GamingVideoCard

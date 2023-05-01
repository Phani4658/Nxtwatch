import ReactPlayer from 'react-player'
import './index.css'

const VideoPlayer = props => {
  const {videoUrl} = props
  return (
    <div className="responsive-container">
      <ReactPlayer
        width="100%"
        height="100%"
        url={videoUrl}
        controls
        style={{margin: 'auto'}}
      />
    </div>
  )
}

export default VideoPlayer

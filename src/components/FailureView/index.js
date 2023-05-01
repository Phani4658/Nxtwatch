import ModeContext from '../../context/ModeContext'
import {
  FailureViewBg,
  FailureViewImage,
  FailureHeading,
  FailurePara,
  FailureBtn,
} from './styledComponents'

const FailureView = props => {
  const {onClickSearchButton} = props
  return (
    <ModeContext.Consumer>
      {value => {
        const {activeMode} = value
        const failureImageUrl =
          activeMode === 'Light'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <FailureViewBg>
            <FailureViewImage src={failureImageUrl} alt="failure view" />
            <FailureHeading isLightMode={activeMode === 'Light'}>
              Oops! Something went Wrong
            </FailureHeading>
            <FailurePara>We are having some trouble</FailurePara>
            <FailureBtn onClick={onClickSearchButton}>Retry</FailureBtn>
          </FailureViewBg>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default FailureView

import styled from 'styled-components'

export const VideoDetailsPage = styled.div`
  padding: 20px;
`
export const VideoLoader = styled.div`
  margin: auto;
  max-width: 100%;
`

export const VideoDetailsBottomPart = styled.div`
  padding-top: 15px;
`

export const VideoTitle = styled.p`
  font-size: 18px;
  margin: 0;
  color: ${props => (props.isLightMode ? '#000' : '#fff')};
  line-height: 30px;
`

export const VideoLikeDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`

export const ViewCount = styled.p`
  font-size: 16px;
  margin: 22px 0;
  margin-left: 0;
`
export const ViewAndLikeContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.isLightMode ? ' #7e858e' : ' #cbd5e150')};
`

export const Button = styled.div`
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  border: none;
  font-size: 24px;
  display: flex;
  align-items: center;
`

export const ButtonText = styled.button`
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: none;
  margin: 0 5px;
  font-size: 18px;
  outline: none;
  cursor: pointer;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonContainerSm = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const ChannelDetails = styled.div`
  display: flex;
  margin-top: 20px;
`

export const ChannelLogoContainer = styled.div`
  width: 20%;
  margin-right: 15px;
  @media screen and (min-width: 767px) {
    width: 5%;
  }
`

export const ChannelName = styled.p`
  color: ${props => (props.isLightMode ? '#000' : '#fff')};
  margin: 0;
  margin-bottom: 6px;
`

export const SubscribersCount = styled.p`
  color: ${props => (props.isLightMode ? '#616e7c' : '#94a3b8')};
  margin: 0;
  margin-top: 6px;
`

export const Description = styled.p`
  color: ${props => (props.isLightMode ? '#000' : '#fff')};
`

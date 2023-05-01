import styled from 'styled-components'

export const VideoCardBg = styled.div`
  margin: 0 20px;
`

export const ThumbnailUrl = styled.img`
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
`
export const ChannelLogo = styled.img`
  border-radius: 50%;
  width: 100%;
`

export const ChannelLogoContainer = styled.div`
  width: 25%;
  margin-right: 15px;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  text-decoration: none;
  color: ${props => (props.isLightMode ? '#000' : '#fff')};
  margin: 0;
`
export const ChannelName = styled.p`
  font-size: 12px;
  color: ${props => (props.isLightMode ? ' #7e858e' : ' #cbd5e150')};
  margin: 10px 0px;
  @media screen and (max-width: 575px) {
    display: block;
  }
`
export const VideoOuterCard = styled.li`
  margin: 20px 0px;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
  @media screen and (min-width: 767px) {
    width: 32%;
  }
`

export const ViewContainer = styled.div`
  color: ${props => (props.isLightMode ? ' #7e858e' : ' #cbd5e150')};
  display: flex;
  align-items: center;
`
export const ViewCount = styled.p`
  font-size: 12px;
`

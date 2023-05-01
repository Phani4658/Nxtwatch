import styled from 'styled-components'

export const TrendingContainer = styled.div`
  padding-bottom: 20px;
`

export const TrendingHeading = styled.div`
  background-color: ${props => (props.isLightMode ? '#ebebeb' : '#7e858e50')};
  display: flex;
  align-items: center;
  padding: 15px;
  color: ${props => (props.isLightMode ? '#000' : '#fff')};
  margin-bottom: 20px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const TrendingPage = styled.div`
  background-color: ${props => (props.isLightMode ? '#f9f9f9' : '#0f0f0f')};
  height: 100vh;
  overflow: auto;
  max-width: 100vw;
`

export const RouteName = styled.h1`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
`

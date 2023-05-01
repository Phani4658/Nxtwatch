import styled from 'styled-components'

export const HomePage = styled.div`
  background-color: ${props => (props.isLightMode ? '#f9f9f9' : '#181818')};
  height: 100vh;
  overflow: auto;
  max-width: 100vw;
`

export const SideBarContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (max-width: 991px) {
    width: 30%;
  }
  width: 20%;
`

export const HomePageBottom = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
`

export const BannerBg = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 2em 1em;
`

export const HomePageRight = styled.div`
  width: 100%;
  overflow: auto;
`

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseButton = styled.button`
  outline: none;
  margin: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`

export const BannerLogo = styled.img`
  width: 40%;
  @media screen and (min-width: 567px) {
    width: 30%;
  }
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`

export const BannerText = styled.p`
  width: 60%;
`

export const BannerBtn = styled.button`
  background-color: transparent;
  border: 1px solid #010101;
  padding: 7px 15px;
  cursor: pointer;
`

export const SearchBarContainer = styled.div`
  margin: 1em;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #7e858e;
  width: 30%;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`

export const SearchBar = styled.input`
  background-color: ${props => (props.isLightMode ? '#ffffff' : '#191919')};
  color: ${props => (!props.isLightMode ? '#ffffff' : '#191919')};
  border: none;
  width: 100%;
  padding: 5px;
  outline: none;
`

export const SearchIcon = styled.button`
  background-color: ${props => (props.isLightMode ? '#f1f1f1' : '#94a3b830')};
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  outline: none;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ResultView = styled.div`
  overflow: auto;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  flex-direction: row;
  padding: 0;
  list-style-type: none;
`

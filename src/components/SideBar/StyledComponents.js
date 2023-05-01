import styled from 'styled-components'

export const SideBarBg = styled.div`
  background-color: ${props => (props.isLightMode ? '#fff' : '#0f0f0f')};
  margin-top: 0;
  min-height: 90vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SideBarHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
`

export const SideBarBottomContainer = styled.div`
  color: ${props => (props.isLightMode ? '#212121' : '#ffffff')};
  padding: 1em;
`

export const SideBarParagraph = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`

export const RouteContainer = styled.button`
  display: flex;
  justify-content: center;
  color: ${props => (props.isLightMode ? '#000' : '#fff')};
  align-items: center;
  text-decoration: none;
  padding: 1px 0;
  background-color: ${props => {
    if (props.isSelected) {
      if (props.isLightMode) {
        return '#f1f1f1'
      }
      return '#94a3b825'
    }
    return 'transparent'
  }};
  outline: none;
  border: none;
  width: 100%;
  cursor: pointer;
`

export const RouteName = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
`

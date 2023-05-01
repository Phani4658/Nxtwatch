import styled from 'styled-components'

export const NotFoundBg = styled.div`
  background-color: ${props => (props.isLightMode ? '#f9f9f9' : '#181818')};
  min-height: 100vh;
`

export const NotFoundMain = styled.div`
  display: flex;
`

export const NotFoundSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  min-width: 100vh;
  margin: auto;
  color: ${props => (props.isLightMode ? '#000' : '#fff')};
`
export const NotFoundImg = styled.img`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const NotFoundPara = styled.p`
  margin-top: 0;
  color: ${props => (props.isLightMode ? '#94a3b8' : '#616e7c')};
`

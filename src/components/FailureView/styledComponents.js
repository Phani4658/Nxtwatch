import styled from 'styled-components'

export const FailureViewBg = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
`

export const FailureViewImage = styled.img`
  width: 25%;
  margin: auto;
  @media screen and (max-width: 767px) {
    width: 60%;
    margin: auto;
  }
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isLightMode ? '#000' : '#fff')};
  font-size: 28px;
`

export const FailurePara = styled.p`
  color: ${props => (props.isLightMode ? ' #d7dfe9' : '#7e858e')};
  font-size: 18px;
  margin-top: 3px;
`

export const FailureBtn = styled.button`
  padding: 8px 20px;
  border: none;
  outline: none;
  color: #fff;
  background-color: #00306e;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`

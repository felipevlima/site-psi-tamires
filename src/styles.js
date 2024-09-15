import { styled } from 'styled-components'

export const HeroImage = styled.div`
  height: 100%;
  width: 100%;
  background: url(${props => props.src}) top center no-repeat;
  background-size: cover;
  box-shadow: 0px 10px 20px 4px #00000024;
  border-radius: 280px;
`

export const AboutMeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 0px 128px 0px 128px;
  background: url(${props => props.src}) top center no-repeat;
  background-size: cover;
  box-shadow: 0px 10px 20px 4px #00000024;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  span {
    font-size: 16px;
    font-weight: bold;
    color: #70826b;
  }
`

export const InputField = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #70826b;
  background: white;
  border-radius: 12px;
  outline: none;
`

export const TextAreaField = styled.textarea`
    width: 100%;
    padding: 8px 16px;
    border: 1px solid #70826b;
    background: white;
    border-radius: 12px;
    outline: none;
    min-height: 150px;
`
export const Button = styled.a`
  width: 100%;
  padding: 12px 16px;
  background: #70826b;
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`
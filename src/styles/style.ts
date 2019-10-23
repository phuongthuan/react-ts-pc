import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

export const Layout = styled.main`
  padding: 3rem;
  background-color: #e3e3e3;
`

const ButtonStyles = styled.button`
  color: white;
  border: 0;
  border-radius: 4px;
  outline: none;
  margin: .5rem 1rem .5rem 0;
  cursor: pointer;
  background-image: linear-gradient(-180deg, #ff1c68 0%, #9f0092 300px);
  padding: 5px 8px;
`

export const Button = posed(ButtonStyles)({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  background: white;
  min-height: calc(100vh - 20px);
`
export const Content = styled(PoseGroup)`
  padding: 0 20px;  
`

export const Quotes = styled.div`
  padding: 1em;
  font-size: 1.1em;
  border: 2px solid #000;
  border-radius: 10px;
  margin: 1em 0;
`

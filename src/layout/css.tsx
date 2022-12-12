import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: pink;
`

export const Section = styled.section`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: yellow;
  display: flex;
`

export const Nav = styled.nav`
  width: 300px;
  height: 100%;
  background-color: #7e7e86;
`

export const Main = styled.main`
  flex: 1;
  background-color: #958d8d;
`

export const Footer = styled.footer`
  width: 100vw;
  height: 60px;
  background-color: green;
  position: fixed;
  bottom: 0;
`

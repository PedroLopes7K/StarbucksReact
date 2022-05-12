import styled from 'styled-components'

export const Topo = styled.header`
  height: 10%;
  padding: 20px 0;
`
export const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2%;

  & .logo {
    width: 40%;
  }
`
export const Menu = styled.div`
  padding-top: 20px;
  width: 50%;
  text-align: right;
  & a {
    color: black;
    text-decoration: none;
    font-size: larger;
    font-weight: bold;
    margin-right: 15px;
    transition: 0.5s;
    cursor: pointer;
  }
  ${props =>
    props.id === 'verde'
      ? '& a:hover {color: #017143}'
      : props.id === 'rosa'
      ? '& a:hover {color: rgb(231, 165, 174)}'
      : '& a:hover {color: #c2479d}'}
`

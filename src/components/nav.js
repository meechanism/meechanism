import styled from "styled-components"
import Colors from "./colors"
import MediaQuery from '../utils/mediaQuery'
import { rhythm } from "../utils/typography"

export const Nav = styled.nav`
  box-sizing: border-box;
  width: 100%;
  margin: ${rhythm(1)};
  font-size: ${rhythm(0.5)};

  a {
    color: ${Colors.gray5};
    &.active {
      color: ${Colors.primary};

    }
  }
  ${MediaQuery.medium`
    margin: 0 0 0 ${rhythm(0.25)};
    padding: 0;
    display: flex;
    a {
      box-shadow: none;
    }
  `};
`

export const NavSection = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${Colors.gray2};
  border-right: 1px solid ${Colors.gray2};
`

export const NavItem = styled.span`
  position: relative;
  display: block;
  padding: 0.5rem;

  font-size: ${rhythm(0.75)};
  box-shadow: none;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    border: 0;
    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 2px;
      content: "";
      background-color: ${Colors.primary};
    }
  }

  ${MediaQuery.medium`
    font-size: ${rhythm(0.45)};
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${Colors.primary};
      &::before {
        width: 0px;
      }
    }
  `};

`

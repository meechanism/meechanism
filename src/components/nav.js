import styled from "styled-components"
import Colors from "./colors"
import MediaQuery from "../utils/mediaQuery"
import { rhythm } from "../utils/typography"
import colors from "./colors"

export const Nav = styled.nav`
  box-sizing: border-box;
  margin: 0;

  a {
    color: ${Colors.gray5};
    &.active {
      color: ${Colors.primary};
    }
  }
  ${MediaQuery.medium`
    width: 100%;
    margin: 0 0 0 ${rhythm(0.25)};
    padding: 0;
    display: flex;
    a {
      box-shadow: none;
    }
  `};
`

export const NavSection = styled.div`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${Colors.gray2};
  border-right: 1px solid ${Colors.gray2};
  box-sizing: border-box;
`

export const NavItem = styled.span`
  position: relative;
  display: inline-block;
  padding: 0.5rem 0.5rem 0.25rem;

  font-size: ${rhythm(0.55)};
  box-shadow: none;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;

  ${MediaQuery.medium`
    font-size: ${rhythm(0.45)};
  `};

  transition: all 0.2s ease-in-out;
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    width: 0px;
    height: 0.25rem;
    margin: 0.25rem 0 0;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.2s;
    opacity: 0;
    background-color: ${colors.primary};
  }

  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
    &:before,
    &:after {
      width: 50%;
      opacity: 1;
    }
  }
`

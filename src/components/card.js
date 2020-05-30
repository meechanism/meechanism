import styled from "styled-components"

import { rhythm } from "../utils/typography"
import MediaQuery from "../utils/mediaQuery"
import Colors from "../components/colors"

// Plain card
export default styled.div`
  border-radius: 4px;
  padding: ${rhythm(1)};
  text-align: ${props => (props.linked ? "center" : "left")};
  margin: 0 0 ${rhythm(1 / 2)};
  background: ${Colors.gray1};
  transition: background 0.25s ease-in-out;

  h4 {
    margin-top: 0;
  }

  &:hover {
    background: ${props => (props.linked ? Colors.white : Colors.gray1)};
  }

  ${MediaQuery.small`
    padding: ${rhythm(0.5)};
  `};
`

// Useful for shortened blog posts that link to the whole article
export const LinkedCard = styled.div`
  border-bottom: 2px solid transparent;
  ${props =>
    props.background ? props.background : `background: ${Colors.gray1}`};
  transition: border-bottom 0.25s ease-in-out;
  border-radius: 4px;

  margin: ${props => (props.margin ? props.margin : `0 0 ${rhythm(1)}`)};
  padding: ${props =>
    props.padding ? props.padding : `${rhythm(1)} ${rhythm(1)} ${rhythm(0)}`}; ;
  flex-grow: 1;
  text-align: ${props => (props.textAlign ? props.textAlign : "inherit")};
  color: ${props => (props.color ? props.color : Colors.black)};

  h4 {
    margin-top: 0px;
  }

  ${
    "" /* If we dont want hover effects, add `unlinked` prop to component usage */
  }
  ${props =>
    props.unlinked
      ? null
      : `&:hover {
    border-bottom: 2px solid ${Colors.primary};
    h2, h4, em {
      color: ${Colors.primary};
    }`}
  }

  ${MediaQuery.small`
    padding: ${rhythm(0.5)};
    font-size: ${rhythm(0.5)};
  `};
`

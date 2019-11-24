import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Colors from "../components/colors"

export default styled.div`
  border-radius: 4px;
  padding: ${rhythm(1)};
  text-align: ${props => (props.linked ? "center" : "left")};
  margin: 0 0 ${rhythm(1 / 2)};
  background: ${Colors.gray1};
  transition: background 0.25s ease-in-out;
  &:hover {
    background: ${props => (props.linked ? Colors.white : Colors.gray1)};
  }
`

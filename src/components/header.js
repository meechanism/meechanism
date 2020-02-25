import styled from "styled-components"
import colors from "./colors"
import { rhythm } from "../utils/typography"

export default styled.h1`
  font-weight: 800;
  color: transparent;
  font-size: ${rhythm(3)};
  -webkit-background-clip: text;
  line-height: ${rhythm(4)};
  letter-spacing: -0.25rem;
  margin: 0 0 ${rhythm(1)};

  -webkit-text-stroke-width: 2px;
  -moz-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${colors.gray5};
  -moz-text-stroke-color: ${colors.gray5};
  text-shadow: 6px 6px ${colors.secondary};
`

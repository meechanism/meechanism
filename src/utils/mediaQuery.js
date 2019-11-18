import { css } from "styled-components"

export const Breakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  xlarge: "1200px",
}

const createMediaQuery = (size, ...args) => css`
  @media (max-width: ${size}) {
    ${css(...args)};
  }
`

/**
 * Example media query usage in styled component:
 *   ${MediaQuery.small`
 *       width: auto;
 *   `};
 */
export default {
  small: (...args) => createMediaQuery(Breakpoints.small, ...args),
  medium: (...args) => createMediaQuery(Breakpoints.medium, ...args),
  large: (...args) => createMediaQuery(Breakpoints.large, ...args),
  xlarge: (...args) => createMediaQuery(Breakpoints.xlarge, ...args),
}

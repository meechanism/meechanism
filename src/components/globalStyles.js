import { createGlobalStyle } from "styled-components"
import Colors from "../components/colors"
import { rhythm, scale } from "../utils/typography"

export default createGlobalStyle`
  a {
    color: ${Colors.primary};
  }
  .gatsby-resp-image-image,
  .gatsby-resp-image-background-image {
    border-radius: 4px;
    margin-bottom: 12px;
  }
  figcaption {
    text-align: center;
    font-size: ${rhythm(0.5)};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    margin-top:0;
  }

  h3 {
    margin: 0 0 ${rhythm(1 / 2)};
  }
`

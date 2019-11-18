import { createGlobalStyle } from "styled-components"
import Colors from "../components/colors"

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
  }

  h1, h2, h3,h4, h5, h6 {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
  }
`

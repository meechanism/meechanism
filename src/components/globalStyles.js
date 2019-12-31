import { createGlobalStyle } from "styled-components"
import Colors from "../components/colors"
import { rhythm } from "../utils/typography"
import MediaQuery from '../utils/mediaQuery'

export default createGlobalStyle`
  a {
    color: ${Colors.primary};
    box-shadow: none;
    &:hover {
      opacity: 0.75;
    }
  }
  .gatsby-resp-image-image,
  .gatsby-resp-image-background-image {
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  figcaption {
    text-align: center;
    font-size: ${rhythm(0.5)};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    margin-top: ${rhythm(1)};
  }

  h3 {
    margin: 0 0 ${rhythm(1 / 2)};
  }

  ${'' /* for the project galleries */}

  .img--project {
    width: 45%;
    display:inline-block;
    margin: 0.5rem;
    ${MediaQuery.medium`
      margin: 0 auto 2rem;
      max-width: 50%;
    `};
  }

  .project-gallery {
    display: flex;
    flex-wrap: wrap ;
    justify-content: center;
    align-items: flex-start;
  }
`

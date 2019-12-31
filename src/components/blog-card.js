import React from "react"
import { Link } from "gatsby"

import {LinkedCard} from './card'

export default ({ node }) => <Link to={`blog${node.fields.slug}`}>
    <LinkedCard textAlign={'left'}>
        <em>{node.frontmatter.date}</em>
        <h4>{node.frontmatter.title}</h4>
        <p>{node.excerpt}</p>
    </LinkedCard>
</Link>
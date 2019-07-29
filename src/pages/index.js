import { Divider, Paper } from "@material-ui/core"
import { graphql } from "gatsby"
import React from "react"

import PropTypes from "prop-types"

const Index = ({ data }) => (
  <div>
    Hello world! Nice to meet you!
    <h1>{data.site.siteMetadata.title}</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <Divider />
        <Paper style={{ padding: "10px", margin: "10px" }}>
          <h3>{post.node.frontmatter.title}</h3>
          <p>{post.node.excerpt}</p>
        </Paper>
      </div>
    ))}
  </div>
)
Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
          }
          excerpt
        }
      }
    }
  }
`

export default Index

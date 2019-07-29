import { graphql } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const Index = ({ data }) => (
  <div>
    Hello world! nice to meet you!
    <h1>{data.site.siteMetadata.title}</h1>
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
  }
`

export default Index

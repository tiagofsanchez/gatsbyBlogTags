import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"

const layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <div
        style={{
          fontFamily: "Verdana",
          textAlign: "center",
          margin: "auto",
          marginBottom: "40px",
          width: "80%",
        }}
      >
        <h2>All your Posts</h2>
        <Link to={`/tags`} style={{textDecoration: "none" , opacity: "0.5"}}>check all your tags here</Link>
      </div>
      <div style={{marginBottom:"50px"}}>
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div
            key={frontmatter.path}
            style={{
              fontFamily: "Verdana",
              textAlign: "center",
              margin: "auto",
              width: "80%",
            }}
          >
            <Link to={frontmatter.path}>
              <h4>{frontmatter.title}</h4>
            </Link>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
            tags
          }
        }
      }
    }
  }
`

export default layout

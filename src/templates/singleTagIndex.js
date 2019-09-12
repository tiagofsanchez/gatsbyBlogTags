import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Tag from "../components/Tag"

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  
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
        <h2>Posts only about</h2> 
        
        <Tag tagName={tagName} />
        {posts.map(post => { 
          const { title , path} = post.frontmatter
          return (
            <Link to={path} key={title}>
              <h4>{title}</h4>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SingleTagTemplate

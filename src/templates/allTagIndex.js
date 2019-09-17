import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import TagsMenu from "../components/TagsMenu"

const AllTagsTemplate = ({ data, pageContext }) => {
  const { posts, tags } = pageContext
  console.log(posts)
  console.log(tags)
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
        <h2>Posts about all tags </h2> <TagsMenu tagName={tags} />
        {posts &&
          posts.map(post => {
            const { title, path } = post.node.frontmatter
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

export default AllTagsTemplate

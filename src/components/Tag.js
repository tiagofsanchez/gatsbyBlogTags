import React, { Fragment } from "react"
import { Link } from "gatsby"

const TagsMenu = props => {
  const { tagName } = props
  console.log(tagName)

  let tagOptions = (
    <Fragment>
      
      <Link style={{ textDecoration: "none" }} to={`/tags/${tagName}`}>
        <span
          style={{
            marginLeft: "10px",
            border: "solid 1px #eee",
            padding: "5px",
            backgroundColor: "pink",
            borderRadius: "5px"
          }}
        >
          {tagName}
        </span>
      </Link>
      <Link style={{ textDecoration: "none", opacity:"0.5" }} to={`/tags`}> back </Link>
    </Fragment>
  )

  return (
    <Fragment>
      <div
        style={{
          width: "80%",
          margin: "auto",
          marginBottom: "50px",
          textAlign: "center",
          dispplay: "flex",
        }}
      >
        {tagOptions}
      </div>
    </Fragment>
  )
}

export default TagsMenu

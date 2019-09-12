import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"


const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Verdana",
          textAlign: "center",
          borderBottom: "solid 1px #eee",
          paddingBottom: "20px",
          width: "80%",
          margin: "auto",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            marginBottom: "5px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            marginTop: 0,
            margin: "auto",
            opacity: 0.5,
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  )
}

// This is an old implementation a new implementation could be using useStaticQuery
const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header

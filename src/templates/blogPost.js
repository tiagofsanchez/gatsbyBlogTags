import React, { Fragment } from "react"
import Header from '../components/Header';
import { graphql } from "gatsby"

const Template = (props) => {

  console.log(props)
  console.log(props.pageContext)

 
  const title =props.data.markdownRemark.frontmatter.title
  const html = props.data.markdownRemark.html


  return (
    <Fragment>
        <Header/>
      <div
        style={{
          fontFamily: "Verdana",
          margin: "auto",
          width: "80%",
        }}
      >
        <h2 style={{textAlign:"center", marginBottom: "30px"}}>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Fragment>
  )
}

export default Template

//What is interesting here is that this query will get passed to the props and I will now have data my template so that I can render
// I will need the pathSlug so that I can query for the data that I have around this post
export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

// all of this is being build to create the pages for the post and rndering the page

const path = require("path")

//This will create the pages that are required for the all togs and the individual tags as well
const createTagPages = (createPage, posts) => {
const allTagsIndexTemplate = path.resolve('src/templates/allTagIndex.js')
const singleTagsIndexTemplate = path.resolve('src/templates/singleTagIndex.js')

const postsByTag = { }

  //creating the list of tags so that we have 1 place for them all
  posts.forEach(({node})=> {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag=> {
        if(!postsByTag[tag]) {
          postsByTag[tag] = []
        }
        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag);
  
  //creating the page with "all tag" posts
  createPage({
    path: `/tags`,
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
      posts
    }
  })

  // creating the individual "tags" pages with the correspondent posts
  tags.forEach(tagName => {
    const posts = postsByTag[tagName]

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagsIndexTemplate, 
      context: {
        posts,
        tagName
      }
    })
  })
 
}


// This will create a new page and "inject" the props into the component template that you will be using for the blog post!
exports.createPages = ( ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js")

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges

        createTagPages(createPage, posts);
        posts.forEach(({ node, index }) => {
          const path = node.frontmatter.path;
          const nextPost = index === posts.length - 1 ? null : posts[index + 1];
          const previousPost = index === 0 ? null : posts[index - 1];
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              //this will end up on pageContext in your template
              prev: previousPost ? previous.node : null,
              next: nextPost ? next.node : null,
            }
          });
          resolve();
        })
      })
    )
  })
})


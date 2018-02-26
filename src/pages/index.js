import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const getCategoriesString = (tags) => {
  if(tags && tags.length > 0){
    return tags.join(', ');
  }
}

const getPostClassesByIndex = (index) => {
  const indexZeroClasses = "f2 f1-m f-subheadline-l"
  const indexAnyClasses = "f3 f2-m f1-l"

  return index === 0 ? indexZeroClasses  : indexAnyClasses
}

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }, index) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <article key={node.id} className="mb4">
              <header>
                <span className="fw3 gray f5">{node.frontmatter.date}</span>
              </header>
              <section>
                <Link
                  to={node.fields.slug}
                  className={"link gray fw3 fw2-m fw2-l mv1 db title-gradient dim " + getPostClassesByIndex(index)}
                >
                  {node.frontmatter.title}{' '}
                </Link>
              </section>
              <footer>
                <span className="f6 moon-gray">
                  {getCategoriesString(node.frontmatter.tags)}
                </span>
              </footer>
            </article>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`

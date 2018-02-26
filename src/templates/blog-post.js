import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'

const getCategoriesString = (tags) => {
  if(tags && tags.length > 0){
    return tags.join(', ')
  }
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const date = post.frontmatter.date

    return (
      <article>
        <header>
          <span className="fw3 gray f5">{date}</span>
          <h1 className="f3 fw3 f2-m fw2-m f1-l fw2-l mv1 db title-gradient">
            {post.frontmatter.title}{' '}
          </h1>
          <span className="f6 moon-gray">
            {getCategoriesString(post.frontmatter.tags)}
          </span>
          <hr className="mv4 bb b--black-10" />
        </header>
        <section>
          <div
            className="blog__body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </section>
      </article>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`

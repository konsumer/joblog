import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import 'bulma'

const Navbar = ({title}) => (
  <nav className='navbar is-light'>
    <div className='container'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          {title}
        </Link>
      </div>
      <div className='navbar-start'>
        <Link className='navbar-item' to='/about'>
          About
        </Link>
      </div>
    </div>
  </nav>
)

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
    <Navbar title={data.site.siteMetadata.title} />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper

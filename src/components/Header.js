import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
  const Heading ={
    color:'green',
    backgroundColor:'black'
  }
  
  return (
    <div>
     <h1 style={{color: Heading.color}}> Title: {props.title}</h1>
     <h2 style={HeadingStyle}>Subtitle: {props.subtitle}</h2>
    </div>
  )
}

Header.defaultProps={
    subtitle: 'With Props Keyword'
}

Header.propTypes={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}
const HeadingStyle ={
  color:'red',
  backgroundColor:'black'
}

export default Header

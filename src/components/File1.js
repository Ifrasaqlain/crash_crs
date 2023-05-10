import React from 'react';
import Buttons from './Buttons';

const File1 = ({subtitle,title}) => {

   
  return (
    <div>
        <h1>File1: {title}</h1>
      <h2>File1: {subtitle}</h2>
      <Buttons text='Click Me' color='red' backgroundColor='#ddd'/>
    </div>
  )
}

File1.defaultProps={
    subtitle:'Without Props Keyword' ,
    title:'Title Without Props Keyword'
}

export default File1

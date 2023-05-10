import React from 'react';
import { useLocation } from 'react-router';

const Heading = ({text, onAdd, showAdd}) => {
  const location = useLocation()
  return (
    <div>
    {location.pathname==="/"  && (
      <div className='header-wrapper'>
      <div className="taks-inner--wrapper"> <h1>{text}</h1>
      <button style={{backgroundColor: showAdd ? 'red':'green'}}  onClick={onAdd}>{showAdd ? 'Close':'Open'}</button></div>
    </div>
    )}
    </div>
  )
}

export default Heading

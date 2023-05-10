import React, { useState } from 'react';
import PropTypes from 'prop-types'


const Buttons = ({color,backgroundColor,text}) => {
    const[count,setcount]=useState(0);
    const[number,setNumber]=useState(0)

    function handleClick(){
        setcount(count + 1)
    }
    function Numbers(){
        setNumber(number + 1)
    }

  return (
    <div>
       <Mybuttons onClick={handleClick} count={count} /><br />
       <Mybuttons onClick={handleClick} count={count} /><br />

       <button onClick={Numbers} style={{color:color, backgroundColor:backgroundColor}} >
       {text} {number}
       </button>
    </div>
  )
}


function Mybuttons({count,onClick,txt}){
    return (
    <button onClick={onClick}>
       {txt}  {count}
    </button>
    )
}

Mybuttons.defaultProps={
    txt:'Increases together'
}

Buttons.prototype={
    text: PropTypes.string,
    txt: PropTypes.string,
    count: PropTypes.number,
    number: PropTypes.number,
    Numbers: PropTypes.func,
    handleClick:PropTypes.func
}



export default Buttons

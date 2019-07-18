import React from 'react';
import './App.css';


function Title(props) {
  return (
    <div>
<h3 style={props.style}>{props.name}</h3>

    </div>
  );
}

export default Title;
import React from 'react';
import {Link} from 'react-router-dom';


export const SegmentEntry = (props) => {

    const template = <div

    className="row"

    style={{
        border: '1px solid #e22',
        background:props.bck,
        color:props.color,
        fontFamily: 'Righteous',
        ...props.add
      }}
  
    >{props.children}</div>

    return template;
}

import React, { Component } from 'react';


// Sets max height/width for icon images
var iconStyle = {
    maxHeight: "200px",
    maxWidth: "200px"
  }



const CharacterIcons = props => (
    <div className="container m-0 mw-100">
        <div className="row justify-content-center">

            {/* {console.log(props)} */}
            {/* Go through the array of icons to generate them on the page */}
            {props.icons.map(icon => (
                <button type="button" onClick={props.increaseScore} >
                    <div className="m-2">
                        <img className="icon" id={icon.clicked} data-num={icon.id} src={icon.path} alt={icon.alt} style={iconStyle} />
                    </div>
                </button>
            ))}
        </div>
    </div>
)

export default CharacterIcons
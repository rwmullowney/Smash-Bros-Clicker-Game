import React from 'react';


var iconStyle = {
    maxHeight: "200px",
    maxWidth: "200px"
}



const CharacterIcons = props => (
    <div className="container m-0 mw-100">
        <div className="row justify-content-center">

            {/* {console.log(props)} */}
            {props.icons.map(icon => (
                <button type="button" onClick={props.increaseScore} >
                    <div className="m-2">
                        <img className="icon" id="false" src={icon.path} alt={icon.alt} style={iconStyle}/>
                    </div>
                </button>
            ))}


        </div>
    </div>
)

export default CharacterIcons
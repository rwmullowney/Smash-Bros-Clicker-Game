import React from 'react';



const CharacterIcons = props => (
    <div className="container m-0 mw-100">
        <div className="row justify-content-center">

            {console.log(props)}
            {props.icons.map(icon => (
                <div className="m-2">
                    <img src={icon.path} alt={icon.alt}/>
                </div>
            ))}

            {/* {props.icons.map(icon => (
                <img src={item.path}>
            ))} */}


        </div>
    </div>
)

export default CharacterIcons
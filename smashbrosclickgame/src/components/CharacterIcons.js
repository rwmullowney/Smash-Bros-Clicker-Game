import React from 'react';



// let iconClick = (event) => {
//     event.target.id = "true"
//     console.log(event.target.id)
// }



const CharacterIcons = props => (
    <div className="container m-0 mw-100">
        <div className="row justify-content-center">

            {console.log(props)}
            {props.icons.map(icon => (
                <button type="button" onClick={function (event) {
                    event.preventDefault()
                    console.log(event.target.id)
                    if (event.target.id = "true") { console.log("You clicked a previously clicked button. You lose!") }
                    else if (event.target.id = "false") {
                        event.target.id = "true"
                    }
                    
                }} >
                    <div className="m-2">
                        <img className="icon" id="false" src={icon.path} alt={icon.alt} />
                    </div>
                </button>
            ))}


        </div>
    </div>
)

export default CharacterIcons
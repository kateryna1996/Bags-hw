import React from "react";
import '../App.css';


function Button({buttonTitle, onClick, disabled}) {

    const giveText = () => {
        console.log(buttonTitle);
    }

    return (


        <button onClick={giveText} disabled={disabled}>
            {buttonTitle}
        </button>

    )
}

export default Button;
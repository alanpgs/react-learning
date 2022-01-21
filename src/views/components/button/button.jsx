import { useState } from "react";
import "./button.scss";

function Button(){

    const [btnname, setBtnname] = useState('Click Me')


    const clicked = ()=> {
        setBtnname('You Clicked')
    }

    return (
        <button className="btn_primary" onClick={clicked}>
            <span>{btnname}</span>
        </button>
    )

}

export default Button;
import React from "react";
import '../App.css';

function Tile({title, children}) {
    return(
        <section>
            <h2>{title}
            </h2>
            {children}
        </section>
    )
}

export default Tile;
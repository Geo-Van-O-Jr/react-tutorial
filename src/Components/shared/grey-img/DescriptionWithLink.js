import React from "react";

const DescriptionWithLink = (props) => {
    if(props.link) {
        return (
            <div>
                <a href={props.link}>{props.link_description}</a>
                <p>{props.description}</p>
            </div>
        )
    }
    
    return (
        <p>{props.description}</p>
    )
}

export default DescriptionWithLink
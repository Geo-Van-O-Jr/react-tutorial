import React from "react";
import GreyImg from "../../shared/grey-img";
import DescriptionWithLink from "../../shared/grey-img/DescriptionWithLink";

const Planet = (props) => {
    const names = ['a', 'b', 'c']
    


    let title;
    if (props.title_with_underline) {
        title = <h4><u>{props.name}</u></h4>

    }
    else
        title = <h4>{props.name}</h4>

    return (
        <div onClick={() => { props.clickOnPlanet(props.catch_phrase) }} catch_phrase={props.catch_phrase}>
            {title}
            <DescriptionWithLink description={props.description} link={props.link} link_description={props.link_description} />
            <GreyImg img_url={props.img_url} gray={props.gray} />
            <hr></hr>
        </div>
    )
}

export default Planet
import React from "react";
import './style.css'


const GreyImg = (props) => {
    return (
        <img class={props.gray ? 'gray-img' : 'color-img'} src={props.img_url} ></img>
    )
}

export default GreyImg;



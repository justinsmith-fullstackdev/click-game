import React from 'react';

const Image = (props) => (

    <img className={"img-thumbnail"} src={require(`../img/${props.imgSrc}.gif`)} alt={props.imgSrc}/>

);

export default Image;
import React, {  } from "react";

import "./Breadcrum.css"
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrum= (props) => {
    const { product } = props;
    return (
        <div className="breadcrum">
            Home  <img alt="" src={arrow_icon} /> Shop <img alt="" src={arrow_icon} /> {product.category} <img alt="" src={ arrow_icon} /> {product.name}
        </div>
    )
}
export default Breadcrum;
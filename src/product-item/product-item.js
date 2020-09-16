import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {addProduct} from "../redux/actions";

import "./product-item.css";

const ProductItem = ({product, addProduct}) => {

    return <div className = "productItem">
        <img className = "productImg" src = {product.img} alt = "product" />
        <span>{product.name}</span>
        <span>Priority: {product.priority}</span>
        <button className = "btnAdd" onClick={() => addProduct(product.id)}>Add to order</button>
    </div>
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addProduct
}, dispatch);

export default connect(null, mapDispatchToProps)(ProductItem)
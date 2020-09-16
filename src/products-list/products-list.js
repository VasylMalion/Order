import React from "react";
import {connect} from "react-redux";
import ProductItem from "../product-item/product-item";

import "./products-list.css";

const ProductsList = ({products}) => {

    const productsMap = products.map( product =>
        <div key={product.id}>
            <ProductItem product = {product}/>
        </div>);

    return <div className = "productList" >
        {productsMap}
    </div>
};

const mapStateToProps = ({products}) => {

    return {
        products
    }
};

export default connect(mapStateToProps)(ProductsList)
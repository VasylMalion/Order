import React from "react";
import {connect} from "react-redux";

import EntryViewItem from "../entry-view-item/entry-view-item";

const EntryView = ({order}) => {

    const orderMap = order.map( (item, idx) =>
        <div
            className = "orderItem"
            key={item.id}
        >
            <EntryViewItem oneOrder = {item} idx = {idx} />
    </div>);

    return <div>
        <span className = "orderHeader">Order</span>
        <br />
        <div className = "orderItem" >
            <span># </span>
            <span>name </span>
            <span>details </span>
            <span>priority</span>
            <span>have / not have</span>
            <span>delete</span>
            <span>change</span>
        </div>
        <hr />
        {orderMap}
    </div>
}

const mapStateToProps = ({order}) => {

    return {
        order
    }
}

export default connect(mapStateToProps)(EntryView)
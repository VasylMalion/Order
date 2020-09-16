import React from "react";
import {connect} from "react-redux";

import EntryViewItem from "../entry-view-item/entry-view-item";

import './entry-view.css';

const EntryView = ({order}) => {

    const orderMap = order.map( (item, idx) =>
        <div
            className = "orderItem2"
            key={item.id}
        >
            <EntryViewItem oneOrder = {item} idx = {idx} />
            <hr />
    </div>);

    return <div className = "order">
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
        <hr className = "hr" />
        {orderMap}
    </div>
}

const mapStateToProps = ({order}) => {

    return {
        order
    }
}

export default connect(mapStateToProps)(EntryView)
import React from "react";
import {connect} from "react-redux";

import ListViewItem from "../list-view-item/list-view-item";
import Filter from "../filter/filter";

import './list-view.css';

const ListView = ({filterOrder}) => {

    let sortOrder = [];
    if (filterOrder) {

        sortOrder = filterOrder.sort((a, b) => {

            if ( a.priority > b.priority ) {
                return 1
            }
            if ( a.priority === b.priority ) {
                if (a.name > b.name) {
                    return 1
                } else {
                    return -1
                }
            }
            if ( a.priority < b.priority ) {
                return -1
            }

            return 0
        })
    }

    const orderMap = sortOrder.map( (item, idx) =>
        <div
            className = "orderItem"
            key={item.id}
        >
            <ListViewItem oneOrder = {item} idx = {idx} />
            <hr />
    </div>);

    return <div className = "order">
        <span className = "orderHeader">
            Order
        </span>
        <Filter />
        <br />
        <div className = "orderItem" >
            <span># </span>
            <span>name </span>
            <span>count </span>
            <span>priority</span>
            <span>have / ran out</span>
            <span>delete</span>
            <span>last change</span>
            <hr />
        </div>
        <hr className = "hr" />
        {orderMap}
    </div>
}

const mapStateToProps = ({filterOrder}) => {

    return {
        filterOrder
    }
}

export default connect(mapStateToProps)(ListView)
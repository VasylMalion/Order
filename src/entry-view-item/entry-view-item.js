import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {TiDelete} from 'react-icons/ti';

import {deleteItem, haveItem} from "../redux/actions";

import "./entry-view-item.css";

const EntryViewItem = ({oneOrder, idx, deleteItem, haveItem}) => {

    return <div className = "orderItem">
        <span>{idx + 1}</span>
        <span>{oneOrder.name}</span>
        <span>{oneOrder.priority}</span>
        <span onClick = {() => haveItem(oneOrder.id)}>
            {oneOrder.have ? "have" : "not have"}
        </span>
        <span onClick = {() => deleteItem(oneOrder.id)}>
            <TiDelete/>
        </span>
        <span className = "changes">
            {oneOrder.changes.map( (item, idx) => <
                span key = {idx}>
                {item},
            </span>)}
        </span>
    </div>
}

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteItem,
    haveItem
}, dispatch);

export default connect(null, mapDispatchToProps)(EntryViewItem);
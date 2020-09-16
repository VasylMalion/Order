import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {TiDelete} from 'react-icons/ti';

import {deleteItem, haveItem} from "../redux/actions";

const EntryViewItem = ({oneOrder, idx, deleteItem, haveItem}) => {

    return <div className = "orderItem">
        <span>{idx + 1}</span>
        <span>{oneOrder.name}</span>
        <span>{oneOrder.details}</span>
        <span>{oneOrder.priority}</span>
        <span
            className = "btnHave"
            onClick = {() => haveItem(oneOrder.id)}
        >
            {oneOrder.have ? "have" : "not have"}
        </span>
        <span
            className = "btnDelete"
            onClick = {() => deleteItem(oneOrder.id)}
        >
            <TiDelete/>
        </span>
        <span>
            {oneOrder.changes.map( (item, idx) =>
                <span key = {idx}>
                {item} &ensp;
            </span>)}
        </span>
    </div>
}

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteItem,
    haveItem
}, dispatch);

export default connect(null, mapDispatchToProps)(EntryViewItem);
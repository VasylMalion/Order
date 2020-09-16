import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {FaPlus, FaMinus} from 'react-icons/fa';
import {TiDelete} from 'react-icons/ti';

import {
    increaseProduct,
    decreaseProduct,
    deleteItem,
    haveItem,
} from "../redux/actions";

import "./list-view-item.css";

const ListViewItem = ({oneOrder, idx, increaseProduct,
                          decreaseProduct, deleteItem, haveItem}) => {

    return <div className = "orderItem">
        <span>
            {idx + 1}
        </span>
        <span>
            {oneOrder.name}
        </span>
        <span>
            <span className = "btnCount" >
                <FaMinus onClick = {() => decreaseProduct(oneOrder.id)} />
            </span>
            <span>
                {oneOrder.count}
            </span>
            <span className = "btnCount" >
                <FaPlus onClick = {() => increaseProduct(oneOrder.id)} />
            </span>
        </span>
        <span>
            {oneOrder.priority}
        </span>
        <span
            className = "btnHave"
            onClick = {() => haveItem(oneOrder.id)}
        >
            {oneOrder.have ? "have" : "ran out"}
        </span>
        <span
            className = "btnDelete"
            onClick = {() => deleteItem(oneOrder.id)}>
            <TiDelete/>
        </span>
        <span>
            {oneOrder.changes[oneOrder.changes.length -1]}
        </span>
    </div>
}

const mapDispatchToProps = dispatch => bindActionCreators({
    increaseProduct,
    decreaseProduct,
    deleteItem,
    haveItem
}, dispatch);

export default connect(null, mapDispatchToProps)(ListViewItem);
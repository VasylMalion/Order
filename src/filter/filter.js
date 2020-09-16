import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {filterAll,
    filterHave,
    filterRunOut} from "../redux/actions";
import "./filter.css";

const Filter = ({filterAll, filterHave, filterRunOut}) => {

    return <div className = "filter">
        <button onClick = {() => filterAll()}> All </button>
        <button onClick = {() => filterHave()}> Have </button>
        <button onClick = {() => filterRunOut()}> Run out </button>
    </div>
}

const mapStateToProps = ({order}) => {

    return {
        order
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    filterAll,
    filterHave,
    filterRunOut
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
import React from "react";
import {NavLink} from "react-router-dom";

import "./header.css";

const Header = () => {

    return <div className = "header">
            <NavLink className = "headerLink" to = '/' > Products </NavLink>
            <NavLink className = "headerLink" to = '/list-view' > List view </NavLink>
            <NavLink className = "headerLink" to = '/entry-view' > Entry view </NavLink>
    </div>
};

export {Header}
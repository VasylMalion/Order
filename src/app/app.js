import React from "react";
import {Route} from "react-router";

import {Header} from "../header/header";
import ProductList from "../products-list/products-list";
import ListView from "../list-view/list-view";
import EntryView from "../entry-view/entry-view";

import "./app.css";

const App = () => {

    return <div >
        <Header />
        <div className = "content">
            <Route exact path = "/" component = {() => <ProductList />} />
            <Route path = "/list-view" component = {() => <ListView />} />
            <Route path = "/entry-view" component = {() => <EntryView />} />
        </div>
    </div>
}

export {App}
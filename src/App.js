import React from "react";
import "./App.css";
import SearchScene from "./screens/SearchScreen/SearchScreen";
import BookshelfScene from "./screens/BookshelfScreen/BookshelfScreen";
import {Route} from "react-router-dom";
class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                <Route path="/search" component={SearchScene}/>
                <Route exact path="/" component={BookshelfScene}/>
            </div>
        )
    }
}

export default BooksApp

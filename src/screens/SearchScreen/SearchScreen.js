import React from "react";
import NavigationSearch from "./components/NavigationSearch";
import * as BookAPI from "../../BooksAPI";
import SearchResult from "./components/SearchResult";
class SearchScreen extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
    }

    searchBook = (query) => {
        BookAPI.search(query, 20).then((books) => {
            console.log(books)
            this.setState({books: books});
        }).catch(function() {
            this.setState({books: []});
        });;
    }
    render() {
        const {books} = this.state;
        return (
            <div className="search-books">
                <NavigationSearch onSearchBook={this.searchBook}/>
                <SearchResult books={books}/>
            </div>
        )
    }
}
export default SearchScreen
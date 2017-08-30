import React from "react";
import NavigationSearch from "./components/NavigationSearch";
import * as BookAPI from "../../BooksAPI";
import SearchResult from "./components/SearchResult";
class SearchScreen extends React.Component {

    state = {
        isLoading: true,
        books: [],
        currentBooks: []
    }

    componentDidMount() {
        BookAPI.getAll().then((books) => {
            this.processBooks(books);
        })
    }

    processBooks = (books) => {

        this.setState((state) => {
            state.currentBooks = books,
                state.isLoading = false
        });
    }

    searchBook = (query) => {
        BookAPI.search(query, 20).then((books) => {
            const {currentBooks} = this.state;
            books.map((book) => {
                currentBooks.forEach(function (currentBook) {
                    if (currentBook.id === book.id) {
                        book.shelf = currentBook.shelf;
                        return book;
                    }
                });
                return book;
            });

            this.setState((state) => {

                state.books = books
            });
        }).catch(function () {
            this.setState({books: []});
        });
        ;
    }

    render() {
        const {books, isLoading} = this.state;
        if (isLoading) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div className="search-books">
                <NavigationSearch onSearchBook={this.searchBook}/>
                <SearchResult books={books}/>
            </div>
        )
    }
}
export default SearchScreen
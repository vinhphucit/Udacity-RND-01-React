import React from "react";
import PropTypes from "prop-types";
import BookSearchRow from "./BookSearchRow";
export default class SearchResult extends React.Component {
    onUpdateBookState = (book, type) => {
        const {books} = this.state;
        books.map((cbook)=>{
            if(book.id === cbook.id){
                cbook.shelf = type;
                return cbook;
            }
        })

    }

    render() {
        const {books} = this.props;
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        books.map((book) => (
                                <BookSearchRow book={book} updateBookState={this.props.updateBookState} key={book.id}/>
                            )
                        )
                    }
                </ol>
            </div>
        )
    }
}

SearchResult.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookState: PropTypes.func.isRequired
}

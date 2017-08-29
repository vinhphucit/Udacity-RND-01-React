import React from "react";
import PropTypes from "prop-types";
import BookSearchRow from "./BookSearchRow";
export default class SearchResult extends React.Component {

    render() {
        const {books} = this.props;
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        books.map((book) => (
                                <BookSearchRow book={book} key={book.id}/>
                            )
                        )
                    }
                </ol>
            </div>
        )
    }
}

SearchResult.propTypes = {
    books: PropTypes.array.isRequired
}

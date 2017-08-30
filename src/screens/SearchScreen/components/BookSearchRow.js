import React from "react";
import PropTypes from "prop-types";
import * as BookAPI from "../../../BooksAPI";
import * as Constant from "../../../Constants";
export default class BookSearchRow extends React.Component {

    onShelfChange = (book, type) => {
        BookAPI.update(book, type).then(() => {
            this.props.updateBookState(book, type);
        })
    }

    render() {
        const {book} = this.props;
        const title = book.title ? book.title : "No title available";

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf ? book.shelf : Constant.none} onChange={(evt) => {
                                this.onShelfChange(book, evt.target.value)
                            }}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{ title }</div>
                    {
                        book.authors && book.authors.map((author, index) => (
                            <div className="book-authors" key={index}>{author}</div>
                        ))}


                </div>
            </li>
        )
    }
}
BookSearchRow.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookState: PropTypes.func.isRequired
}

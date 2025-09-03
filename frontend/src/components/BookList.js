import React from "react";

function BookList({ books }) {
  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <b>{book.title}</b> — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

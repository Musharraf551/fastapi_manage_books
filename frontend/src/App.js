import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  const [books, setBooks] = useState([]);

  // Fetch books from FastAPI
  useEffect(() => {
    fetch("http://127.0.0.1:8000/books/")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  // Function to add new book
  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Book Manager</h1>
      <AddBook onBookAdded={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;

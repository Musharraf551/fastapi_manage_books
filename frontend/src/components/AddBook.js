import React, { useState } from "react";

function AddBook({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/books/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author }),
    });

    const newBook = await response.json();
    onBookAdded(newBook);

    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBook;

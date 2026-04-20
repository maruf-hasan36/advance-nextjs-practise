import BookCard from "@/components/BookCard";
import React from "react";

const BookPage = async () => {
  const res = await fetch("http://localhost:5000/books", { cache: "no-store" });
  const books = await res.json();
  return (
    <div>
      <h1>
        Books : {books.length}
        <div className="grid grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book}></BookCard>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default BookPage;

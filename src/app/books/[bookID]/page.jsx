import React from "react";

const BookDetailsPage = async ({ params }) => {
  const { bookID } = await params;
  const res = await fetch(`http://localhost:5000/books/${bookID}`);
  const { author, price } = await res.json();
  return (
    <div>
      <h1>All book are here</h1>
      book id : {bookID}
      <h1>{author}</h1>
      <p>{price}</p>
    </div>
  );
};

export default BookDetailsPage;

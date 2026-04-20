import React from "react";

const BookDetailsPage = async ({ params }) => {
  const { bookID } = await params;
  const res = await fetch(`http://localhost:5000/books/${bookID}`);
  const { author, price } = await res.json();
  return (
    <div>
      book id : {bookID}
      <h1>{author}</h1>
      <p>{price}</p>
    </div>
  );
};

export default BookDetailsPage;

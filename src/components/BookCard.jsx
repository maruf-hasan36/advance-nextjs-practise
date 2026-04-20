import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  const { title, author, price, category, rating } = book;
  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <p>${price}</p>
        <p>{category}</p>
        <p>{rating}</p>
        <div className="card-actions justify-end">
          <Link href={`/books/${book.id}`}>
            <button className="btn">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

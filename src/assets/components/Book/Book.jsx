import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="flex flex-col p-6 bg-base-100 rounded-xl shadow-xl space-y-4 border">
        <div className="flex justify-center items-center py-6 bg-gray-100 rounded-xl">
          <img
            src={image}
            alt={`Image of ${bookName}`}
            className="rounded-xl h-52"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-4">
            {tags.map((tag, idx) => (
              <span
                className="text-green-500 bg-green-50 px-3 py-1 rounded-full font-medium"
                key={idx}
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className=" flex-grow font-semibold">{bookName}</h2>
          <p className="flex-grow">By : {author}</p>
          <div className="border-b-2 border-dashed border-gray-200"></div>
          <div className="flex justify-between items-center">
            <span>{category}</span>
            <div className="flex items-center gap-1">
              <span>{rating}</span>
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2  bg-gray-400"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

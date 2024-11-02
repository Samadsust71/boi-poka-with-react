import React from "react";
import { Link } from "react-router-dom";

const ListedBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="p-6 border rounded-2xl flex flex-col md:flex-row gap-6">
      <div className="py-7 flex justify-center items-center bg-gray-100 rounded-xl basis-[30%] space-y-4">
        <img src={image} className="h-[172px]" alt={`Image of ${bookName}`} />
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-bold">{bookName}</h2>
        <p className="font-medium">By : {author}</p>
        <div className="flex items-center gap-6">
          <div className="flex gap-6 items-center">
            <span className="font-bold">Tag</span>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="py-1 px-3 bg-green-100 text-green-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p>Year Of Publishing : {yearOfPublishing}</p>
        </div>
        <div className="flex items-center gap-6">
          <span>Publisher : {publisher}</span>
          <span>Page : {totalPages}</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="bg-blue-100 text-blue-600 py-3 px-4 rounded-full">
            Category : {category}
          </div>
          <div className="bg-orange-100 text-orange-600 py-3 px-4 rounded-full">
            Rating : {rating}
          </div>

          <Link to={`/book/${bookId}`}>
            <button className="px-4 py-3 rounded-full font-semibold bg-[#23BE0A] border border-[#23BE0A] text-white hover:bg-white hover:text-[#23BE0A] cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId: Id } = useParams();
  const id = parseInt(Id);
  const data = useLoaderData();
  const bookData = data.find((book) => book.bookId === id);
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
  } = bookData;
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 my-10">
      <div className="p-16 flex justify-center items-center bg-gray-100 rounded-xl md:w-[50%]">
        <img src={image} alt={`image of ${bookName}`} className="h-[590px]" />
      </div>
      <div className="space-y-4 md:w-[45%]">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="font-medium text-xl">By : {author}</p>
        <div className="border-b"></div>
        <p className="font-medium text-xl">{category}</p>
        <div className="border-b"></div>
        <p><span className="font-bold">Review : </span>{review}</p>
        <div className="flex items-center gap-4">
            <span className="font-bold">Tags :</span>
          {tags.map((tag, idx) => (
            <span
              className="text-green-500 bg-green-50 px-3 py-1 rounded-full font-medium"
              key={idx}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="border-b"></div>
        <p>Number of Pages : <span className="font-bold">{totalPages}</span></p>
        <p>Publisher : <span className="font-bold">{publisher}</span></p>
        <p>Year of Publishing : <span className="font-bold">{yearOfPublishing}</span></p>
        <p>Ratings : <span className="font-bold">{rating}</span></p>
        <div className="flex items-center gap-4">
        <button className="px-4 py-3 rounded-lg font-semibold bg-[#23BE0A] border border-[#23BE0A] text-white hover:bg-white hover:text-[#23BE0A] cursor-pointer">Read</button>
        <button className="px-4 py-3 rounded-lg font-semibold bg-[#50B1C9] border border-[#50B1C9] text-white hover:bg-white hover:text-[#50B1C9] cursor-pointer">Wishlist</button>
        </div>

      </div>
    </div>
  );
};

export default BookDetails;

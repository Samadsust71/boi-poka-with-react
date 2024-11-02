import React from "react";
import bannerImg from '../../images/books.jpg'

const Banner = () => {
  return (
    <div className="bg-gray-100 rounded-3xl p-16 mt-6">
      <div className="flex flex-col-reverse lg:flex-row  items-center gap-6">
      <div>
          <h1 className="text-5xl font-bold mb-8">Books to freshen up your bookshelf</h1>
          <a href='#book-list'>
          <button className="px-4 py-3 rounded-lg font-semibold bg-[#23BE0A] border border-[#23BE0A] text-white hover:bg-white hover:text-[#23BE0A] cursor-pointer">View The List</button>
          </a>
        </div>
        <img
          src={bannerImg}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Banner;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadData, getWishListData } from "../utility/utilities";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort,setSort]=useState('')
  const allBooksData = useLoaderData();
  useEffect(() => {
    const readBooksId = getReadData().map((id) => parseInt(id));
    const wishListBooksId = getWishListData().map((id) => parseInt(id));
    const readBooksData = allBooksData.filter((book) =>
      readBooksId.includes(book.bookId)
    );
    const wishListBooksData = allBooksData.filter((book) =>
      wishListBooksId.includes(book.bookId)
    );
    setReadList(readBooksData);
    setWishList(wishListBooksData);
  }, []);
  const handleSort =(sort)=>{
    
    if (sort === 'Ratings') {
      const allReadList = [...readList].sort((a,b)=>b.rating-a.rating)
      const allWishList = [...wishList].sort((a,b)=>b.rating-a.rating)
      setReadList(allReadList)
      setWishList(allWishList)
    }
    if (sort === 'No of Pages') {
      const allReadList = [...readList].sort((a,b)=>a.totalPages-b.totalPages)
      const allWishList = [...wishList].sort((a,b)=>a.totalPages-b.totalPages)
      setReadList(allReadList)
      setWishList(allWishList)
    }
    if (sort === 'Publisher year') {
      const allReadList = [...readList].sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing)
      const allWishList = [...wishList].sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing)
      setReadList(allReadList)
      setWishList(allWishList)
    }
    setSort(sort)
  }
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold bg-gray-100 rounded-xl py-8 text-center">
        Books
      </h2>
      <div className="text-center mt-6">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 px-4 py-3 rounded-lg font-semibold bg-[#23BE0A] border border-[#23BE0A] text-white hover:bg-white hover:text-[#23BE0A] cursor-pointer">
            {sort?`Sort By : ${sort}`:'Sort By'}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow space-y-1"
          >
            <li onClick={()=>{handleSort('Ratings')}}
             className="cursor-pointer">
              <a>Ratings</a>
            </li>
            <li onClick={()=>{handleSort('No of Pages')}}
            className="cursor-pointer">
              <a>No of Pages</a>
            </li>
            <li onClick={()=>{handleSort('Publisher year')}}
            className="cursor-pointer">
              <a>Publisher year</a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="my-6">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className="space-y-6">
              {readList.map((book) => (
                <ListedBook key={book.bookId} book={book} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="space-y-6">
              {wishList.map((book) => (
                <ListedBook key={book.bookId} book={book} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;

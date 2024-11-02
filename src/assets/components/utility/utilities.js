import { toast } from "react-toastify";

const getReadData = () => {
  const storedData = localStorage.getItem("read-list");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
const getWishListData = () => {
  const storedData = localStorage.getItem("wish-list");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const addReadDataToDB = (id)=>{
    const getDataFromDB = getReadData()
    if (getDataFromDB.includes(id)) {
        return toast.warn(`Already added to the read list`)
    }
    else{
       getDataFromDB.push(id)
       const dataInJsonFormat = JSON.stringify(getDataFromDB)
       localStorage.setItem('read-list',dataInJsonFormat)
       toast.success(`Added to the read list`)
    }
}
const addWishListDataToDB = (id)=>{
    const getDataFromDB = getWishListData()
    if (getDataFromDB.includes(id)) {
      return toast.warn(`Already added to the wish list`)
    }
    else{
       getDataFromDB.push(id)
       const dataInJsonFormat = JSON.stringify(getDataFromDB)
       localStorage.setItem('wish-list',dataInJsonFormat)
       toast.success(`Added to the wish list`)
    }
}
export {getReadData,getWishListData,addReadDataToDB,addWishListDataToDB}

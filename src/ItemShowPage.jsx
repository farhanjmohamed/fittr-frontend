import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ItemShowPage() {
  const [item, setItem] = useState({});
  const params = useParams();

  const handleShowItem = () => {
    axios.get(`http://localhost:3000/items/${params.id}.json`).then((response) => {
      console.log(response.data);
      setItem(response.data);
    });
  };

  const handleDestoryItem = () => {
    axios.delete(`http://localhost:3000/items/${params.id}.json`).then((response) => {
      window.location.href = "/items";
    });
  };

  useEffect(handleShowItem, []);

  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-1 mx-auto place-items-center">
        <p className="mt-10 text-2xl mb-4 font-black">{item.name}</p>
        <img src={item.img_url} className="w-auto h-96 mb-3" />

        <div className="grid grid-rows-1 gap-2 mt-2">
          <a href={`/items/${item.id}/edit`} className="rounded-md w-32 text-center bg-black text-white">
            Update Item
          </a>
          <button className="rounded-md w-32 text-center bg-black text-white" onClick={handleDestoryItem}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Items() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
      handleIndexCategories();
    });
  };

  const handleIndexCategories = () => {
    axios.get("http://localhost:3000/categories.json").then((response2) => {
      console.log(response2.data);
      setCategories(response2.data);
    });
  };

  useEffect(handleIndexItems, []);

  return (
    <div className="text-center w-screen h-auto min-h-screen">
      <p className="mt-10 text-4xl font-black text-center">Items</p>
      {localStorage.jwt === undefined ? (
        <>
          <p className="mt-3 text-xl">Login to view items</p>
        </>
      ) : (
        <>
          <div className="rounded-xl text-lg bg-black text-white w-24 mx-auto text-center mt-10">
            <Link to="/items/new">Add Item</Link>
          </div>
          <br />
          <div className="grid grid-cols-6 auto-rows-auto mx-auto p-4 gap-5">
            {categories.map((category) => (
              <div key={category.id}>
                <p className="mt-5 mb-4 text-2xl font-bold italic">{category.name}</p>
                {category.items.map((item) => (
                  <div key={item.id} class="inline-block h-auto w-auto mt-5">
                    <img
                      src={item.img_url}
                      class="h-auto w-60 mx-auto items-center rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
                      title={item.description}
                    />
                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium break-words">{item.name}</strong>
                    </div>
                    <div className="rounded-xl bg-black text-white w-28 mx-auto text-center mt-5 mb-5">
                      <a href={`/items/${item.id}`}>Edit Item</a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

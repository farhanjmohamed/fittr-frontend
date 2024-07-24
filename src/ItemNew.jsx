import axios from "axios";
import { useState } from "react";

export function ItemNew() {
  const [errors, setErrors] = useState([]);
  const [categoryId, setCategoryId] = useState([]);

  const handleChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleTopClick = (event) => {
    event.preventDefault();
    setCategoryId("1");
    console.log(categoryId);
  };

  const handleBottomClick = (event) => {
    event.preventDefault();
    setCategoryId("2");
    console.log(categoryId);
  };

  const handleOutterwearClick = (event) => {
    event.preventDefault();
    setCategoryId("3");
    console.log(categoryId);
  };

  const handleFootwearClick = (event) => {
    event.preventDefault();
    setCategoryId("4");
    console.log(categoryId);
  };

  const handleTailoringClick = (event) => {
    event.preventDefault();
    setCategoryId("5");
    console.log(categoryId);
  };

  const handleAccessoriesClick = (event) => {
    event.preventDefault();
    setCategoryId("6");
    console.log(categoryId);
  };

  const handleCreateItem = (event) => {
    event.preventDefault();
    let params = new FormData(event.target);
    params.append("category_id", categoryId);
    axios
      .post("http://localhost:3000/items.json", params)
      .then((response) => {
        window.location.href = "/items";
        console.log(response.data);
      })
      .catch((error) => {
        setErrors(error.response.data.errors ? error.response.data.errors : ["Must Login!"]);
      });
  };

  return (
    <div className="w-screen h-screen flex justify-around items-center" id="items-new">
      <form className="grid grid-cols-1 auto-rows-auto" onSubmit={handleCreateItem}>
        <div>
          <p className="text-center font-black text-4xl mb-4">New Item</p>
        </div>
        <div>
          <input
            name="name"
            placeholder="Item Name"
            className="rounded-md border-gray-900 border px-2 mb-2 w-full text-lg"
          />
        </div>
        <div>
          <input
            name="img_url"
            placeholder="Item Url"
            className="rounded-md border-gray-900 border px-2 mb-2 w-full text-lg"
          />
        </div>
        <div>
          <input
            name="description"
            placeholder="Item Description"
            className="rounded-md border-gray-900 border px-2 mb-2 w-full text-lg"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-6">
          <div>
            <input
              class="sr-only"
              id="option1"
              type="radio"
              name="category_id"
              tabindex="-1"
              onClick={handleTopClick}
            />
            <label
              for="option1"
              class="block w-full rounded-lg border border-black p-3 text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-black"
              tabindex="0"
            >
              <span class="text-sm font-medium"> Tops </span>
            </label>
          </div>
          <div>
            <input
              class="sr-only"
              id="option2"
              type="radio"
              name="category_id"
              tabindex="-1"
              onClick={handleBottomClick}
            />
            <label
              for="option2"
              class="block w-full rounded-lg border border-black p-3 text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-black"
              tabindex="0"
            >
              <span class="text-sm font-medium"> Bottoms </span>
            </label>
          </div>
          <div>
            <input
              class="sr-only"
              id="option3"
              type="radio"
              name="category_id"
              tabindex="-1"
              onClick={handleOutterwearClick}
            />
            <label
              for="option3"
              class="block w-full rounded-lg border border-black p-3 text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-black"
              tabindex="0"
            >
              <span class="text-sm font-medium"> Outterwear </span>
            </label>
          </div>
          <div>
            <input
              class="sr-only"
              id="option4"
              type="radio"
              name="category_id"
              tabindex="-1"
              onClick={handleFootwearClick}
            />
            <label
              for="option4"
              class="block w-full rounded-lg border border-black p-3 text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-black"
              tabindex="0"
            >
              <span class="text-sm font-medium"> Footwear </span>
            </label>
          </div>
          <div>
            <input class="sr-only" id="option5" type="radio" tabindex="-1" onClick={handleTailoringClick} />
            <label
              for="option5"
              class="block w-full rounded-lg border border-black p-3 text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-black"
              tabindex="0"
            >
              <span class="text-sm font-medium"> Tailoring </span>
            </label>
          </div>
          <div>
            <input class="sr-only" id="option6" type="radio" tabindex="-1" onClick={handleAccessoriesClick} />
            <label
              for="option6"
              class="block w-full rounded-lg border border-black p-3 text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-black"
              tabindex="0"
            >
              <span class="text-sm font-medium"> Accessories </span>
            </label>
          </div>
        </div>
        <button type="submit" className="rounded-lg bg-black text-white w-1/5 mx-auto text-center mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

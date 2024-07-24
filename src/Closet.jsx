import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Closet() {
  const clearForm = (form) => {
    let elements = form.elements;

    for (var i = 0; i < elements.length; i++) {
      elements[i].value = "";
    }
    setOutfit([]);
  };

  const handleClearForm = () => {
    clearForm(document.getElementById("createOutfit"));
  };

  const params = useParams();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [outfit, setOutfit] = useState([]);
  const [errors, setErrors] = useState([]);
  const [outfitName, setOutfitName] = useState("");

  const handleIndexItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
      handleIndexCategories();
    });
  };

  const handleGetOutfit = () => {
    if (params.id) {
      axios.get(`http://localhost:3000/outfits/${params.id}.json`).then((response) => {
        console.log(response.data.items);
        setOutfit(response.data.items);
        setOutfitName(response.data.name);
      });
    }
  };

  const handleIndexCategories = () => {
    axios.get("http://localhost:3000/categories.json").then((response2) => {
      console.log(response2.data);
      setCategories(response2.data);
    });
  };

  const handleUpdateOutfit = (item) => {
    setOutfit([...outfit, item]);
  };

  const handleAddUpdate = () => {
    console.log(outfit);
  };

  const handleCreateOutfit = (event) => {
    event.preventDefault();
    let outfitParams = new FormData(event.target);
    outfitParams.append("outfit", JSON.stringify(outfit));
    if (params.id) {
      axios
        .patch(`http://localhost:3000/outfits/${params.id}.json`, outfitParams)
        .then((response) => {
          window.location.href = "/outfits";
        })
        .catch((error) => {
          setErrors(error.response.data.errors ? error.response.data.errors : ["Must Login!"]);
        });
    } else {
      axios
        .post("http://localhost:3000/outfits.json", outfitParams)
        .then((response) => {
          window.location.href = "/outfits";
        })
        .catch((error) => {
          setErrors(error.response.data.errors ? error.response.data.errors : ["Must Login!"]);
        });
    }
  };

  useEffect(handleIndexItems, []);

  useEffect(handleGetOutfit, []);

  useEffect(handleAddUpdate, [outfit]);

  return (
    <div className="text-center w-screen h-auto min-h-screen grid grid-cols-2">
      <div className="mt-10">
        <p className="text-center ml-10 text-4xl font-black">Outfit</p>
        <div className="border border-black ml-5 mt-5 w-150 h-150 overflow-scroll max-h-screen">
          <p className="italic underline">Add Items to Outfit</p>
          {outfit.map((item) => (
            <div>
              <img className="h-56 w-auto mx-auto" src={item.img_url} />
              <p className="mt-2">{item.name}</p>
            </div>
          ))}
        </div>
        <br />
        <form id="createOutfit" onSubmit={handleCreateOutfit}>
          <input
            type="text"
            name="name"
            className="mt-3 rounded-lg ml-5 w-1/2 text-center"
            placeholder="Outfit Name"
            defaultValue={outfitName}
          />
          <br />
          <button className="rounded-full bg-black text-white w-1/5 mt-2">Save</button>
        </form>
        <button className="rounded-full bg-black text-white w-1/5 mt-2" onClick={handleClearForm}>
          Clear
        </button>
      </div>
      <div className="overflow-scroll max-h-screen">
        <p className="mt-10 text-4xl font-black">Categories</p>
        <br />
        {localStorage.jwt === undefined ? (
          <>
            <p>Login to view closet</p>
          </>
        ) : (
          <>
            {categories.map((category) => (
              <div key={category.id} className="block">
                <p className="text-2xl font-bold italic">{category.name}</p>
                <br />
                {category.items.map((item) => (
                  <div key={item.id} class="block" onClick={() => handleUpdateOutfit(item)}>
                    <br />
                    <img
                      src={item.img_url}
                      class="h-56 w-auto mx-auto items-center rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
                    />
                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">{item.name}</strong>
                      <br />
                    </div>
                  </div>
                ))}
                <br />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

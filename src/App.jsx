import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { About } from "./About";
import { Closet } from "./Closet";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Outfit } from "./Outfit";
import { Items } from "./Items";
import { ItemShowPage } from "./ItemShowPage";
import { ItemNew } from "./ItemNew";
import { ItemUpdate } from "./ItemUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/closet" element={<Closet />} />
            <Route path="/outfits/:id" element={<Closet />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/outfits" element={<Outfit />} />
            <Route path="/items" element={<Items />} />
            <Route path="/items/:id" element={<ItemShowPage />} />
            <Route path="/items/new" element={<ItemNew />} />
            <Route path="/items/:id/edit" element={<ItemUpdate />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

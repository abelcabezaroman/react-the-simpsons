import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Search from "../../components/Search/Search";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async (searchText = "") => {
    const res = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=" + searchText
    );
    console.log(res.data)
    setCharacters(res.data)
  };

  useEffect(() => getCharacters, []);

  return (
    <div>
      <Search onSubmit={getCharacters}></Search>
      <Gallery list={characters}></Gallery>
    </div>
  );
}

import { useState } from "react";

export default function Dictionary() {
  const dictionaryArray = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    {
      word: "Component",
      meaning: "A reusable building block in React.",
    },
    {
      word: "State",
      meaning: "An object that stores data for a component.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const foundEntry = dictionaryArray.find(
      (entry) => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (foundEntry) {
      setDefinition(foundEntry.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <input
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3>
      <p>{definition}</p>
    </>
  );
}

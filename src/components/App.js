import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const[toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => 
      setToys(data)
    )
  },[])

  function addNewToy(newToy){
    setToys([...toys, newToy])
  }

  function handleDeleteToy(deletedToy) {
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) => toy.id === updatedToy.id ? updatedToy : toy)
    setToys(updatedToys)
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteToy={handleDeleteToy} handleUpdateToy={handleUpdateToy} />
    </>
  );
}

export default App;



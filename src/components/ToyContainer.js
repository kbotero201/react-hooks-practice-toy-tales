import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDeleteToy, handleUpdateToy}) {

  let displayToys = toys.map( toy => (
    <ToyCard key={toy.id} toy={toy} handleDeleteToy={handleDeleteToy} handleUpdateToy={handleUpdateToy}/>
  ))


  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;

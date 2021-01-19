import React from "react";

function ToyCard({toy, handleDeleteToy, handleUpdateToy}) {

  function handleDeleteClick(){
    console.log("hello")

    let id= toy.id

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        handleDeleteToy(toy);
      });

  }

  function handleLikeClick(){
    let id= toy.id

    let newLikes = {
      likes: toy.likes + 1
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(newLikes),
    })
      .then( resp => resp.json())
      .then(data => {
          handleUpdateToy(data)
      })

  }
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn" >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

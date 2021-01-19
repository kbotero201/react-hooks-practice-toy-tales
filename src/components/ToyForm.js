import React, {useState} from "react";

function ToyForm({addNewToy}) {

  const[ name, setName] = useState("")
  const[ url, setUrl] = useState("")

  function handleSubmit(event){
    event.preventDefault()

    let newToy={
      name: name,
      url: url,
      likes: 0
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then( resp => resp.json())
      .then(data => {
          //console.log(data)
          addNewToy(data)
      })

  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

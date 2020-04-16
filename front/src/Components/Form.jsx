import React, { useState, useEffect } from "react";
import useFormField from "./useFormField";
function Form() {
  //   const [fields, handleFieldsChange] = useFormField({
  //     email: "",
  //     password: "",
  //   });
  const [infos, setInfos] = useState({
    name: "",
    age: "",
    photo: "",
    gender: "",
    description: "",
  });
  const [error, setError] = useState(null);

  const [formSent, setFormSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(infos),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => setFormSent(true))
      // userId
      // 123456fjdsh
      // <Redirect to="/user/123456jigfnds" />
      .catch((err) => setError(err.message));
  }

  //   route('user/:id')
  // UserProfile params.match.id

  // const student:{
  //       name:"Mia",
  //       camput:"Berlin"
  //   }
  // student.name === student[name]

  // age // updateData(event) => event.target.value // event.target.type = number // event.target.name = age
  // ...infos, age: 1000

  function updateData(event) {
    setInfos({ ...infos, [event.target.name]: event.target.value });
    console.log(infos);
  }
  return formSent ? (
    error ? (
      <h1>Error {error}</h1>
    ) : (
      <h1>Thanks for registering {infos.name}</h1>
    )
  ) : (
    <div>
      <h1> Welcome to Cats Dating App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(event) => updateData(event)}
        />
        <input
          type="number"
          name="age"
          onChange={(event) => updateData(event)}
        />
        <input
          type="text"
          name="photo"
          onChange={(event) => updateData(event)}
        />
        <input
          type="text"
          name="gender"
          onChange={(event) => updateData(event)}
        />
        <input
          type="text"
          name="description"
          onChange={(event) => updateData(event)}
        />
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;

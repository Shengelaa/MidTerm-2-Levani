import React, { useState, useEffect } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(() => {
    let Todos;
    return Todos ? JSON.parse(Todos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setTodoList((prevList) => [...prevList, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Chawere Todo'
        />
        <button type='submit'>Add</button>
      </form>
      <div>
        {todoList.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>
    </div>
  );
};

export default App;

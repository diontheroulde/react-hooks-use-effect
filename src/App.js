import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] =useState(0)
  const [text, setText] = useState("")

const handleClick = () => {
  setCount(count + 1)
}
console.log(count)

const handleChange = (event) => {
  setText(event.target.value)
}

useEffect(() => {
  document.title = text;
}, [text]);

useEffect(() => {
  setTimeout(() => setCount(0), 5000);
}, []); 

  console.log("Component rendering");

  return (
    <div>
      <button 
        onClick={handleClick}>I've been clicked {count} times
        </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={handleChange}
      ></input>


    </div>
  )

}

export default App;

import { useState } from "react";

export default function Form({ onAddItems }) {
  // step a) create piece of state for the input
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // prevent or else the page will be reset or re-rendered
    e.preventDefault();

    // if empty string nothing happens
    if (!description) return;

    const newItem = {
      id: Date.now(),
      quantity,
      description,
      packed: false,
    };
    console.log(newItem);

    onAddItems(newItem);

    // return to initial states
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* step b) use the state as value*/}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        // step c) connect the state and the value using onChange handler
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

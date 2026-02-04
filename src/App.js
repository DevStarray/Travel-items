import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={items} onAddItems={handleAddItem} />
      <Items />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
  }
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
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

      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul></ul>
      <div className="actions"}>
        <select>
          <option value="">Sort by input order</option>
          <option value="">Sort by description</option>
          <option value="">Sort by packed status</option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
}

function Items() {
  return (
    <>
    </>
  )
}
function Stats() {
  return (
    <div className="stats">
      <h3>Start adding some items to your packing list 🚀</h3>
    </div>
  );
}

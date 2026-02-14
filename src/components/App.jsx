import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "phone", quantity: 1, packed: true },
// ];

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ]);

  const clearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) setItems([]);
  };
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  };

  const handleAddItems = (newItem) => {
    setItems((items) => [...items, newItem]);
  };
  const handleDeleteItem = (itemId) => {
    setItems((items) => items.filter((item) => item.id != itemId));
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

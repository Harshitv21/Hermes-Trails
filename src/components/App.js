import { useState } from "react";
import Heading from "./Heading";
import Form from "./Form";
import PackingList from "./PackingList";
import Progress from "./Progress";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItem) => {
    setItems((item) => [...item, newItem]);
  };

  const handleDeleteItems = (id) => {
    setItems((item) => item.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((item) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItem = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list❓"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Heading />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearItems={handleClearItem}
      />
      <Progress items={items} />
    </div>
  );
}



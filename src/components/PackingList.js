import { useState } from "react";
import Item from "./Item";

export default function PackingList ({ items, onDeleteItems, onToggleItems, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed - Number(b.packed)));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((ent) => (
          <Item
            item={ent}
            key={ent.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">By input order</option>
          <option value="description">By description</option>
          <option value="packed">By packed status</option>
        </select>
        {items.length !== 0 ? (
          <button onClick={() => onClearItems()}>
            Clear list
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

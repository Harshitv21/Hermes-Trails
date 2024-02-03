export default function Progress({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding some items to your packing list 🚀
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100) || 0;

  return (
    <footer className="stats">
      {percentage === 100
        ? "You got everything on your list let's go! 🛫"
        : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%) 🧳`}
    </footer>
  );
}
;

import Item from "@/components/item";
import ITEMS from "@/constants/items";

export default function Home() {
  return (
    <div>
      <h1>장바구니</h1>
      <ul className="cart">
        {ITEMS.map((item) => (
          <li key={item.id}>
            <Item
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

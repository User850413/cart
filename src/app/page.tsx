import Card from "@/components/card";
import ITEMS from "@/constants/items";

export default function Home() {
  return (
    <div className="cardListWrapper">
      <h1 className="cardListTitle">옷 목록</h1>
      <ul className="cardList">
        {ITEMS.map((item) => (
          <li key={item.id}>
            <Card
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

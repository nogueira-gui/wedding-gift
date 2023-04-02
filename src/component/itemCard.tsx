import { PropsWithChildren } from "react";

interface ItemCardProps {
  image: string;
  title: string;
  description: string;
  quantity: number;
  selected?: boolean;
}

export default function ItemCard({
  image,
  title,
  description,
  quantity,
  selected = false
}: PropsWithChildren<ItemCardProps>) {
  return (
    <div className={`item-card ${selected ? "selected" : ""}`}>
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Quantidade: {quantity}</span>
      </div>
    </div>
  );
}

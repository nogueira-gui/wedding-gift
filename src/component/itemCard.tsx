import { PropsWithChildren, useState } from "react";

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
  selected=false
}: PropsWithChildren<ItemCardProps>) {
  const [selectedItem,setSelected] = useState<boolean>(selected);
  return (
    <div onTouchEnd={()=>setSelected(!selectedItem)} className={`item-card ${selectedItem ? "selected" : ""}`}>
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

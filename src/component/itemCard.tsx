import { PropsWithChildren, useState } from "react";

interface ItemCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  quantity: number;
  selected?: boolean;
  handleSelectedItem: Function;
}

export default function ItemCard({
  id,
  image,
  title,
  description,
  quantity,
  selected = false,
  handleSelectedItem
}: PropsWithChildren<ItemCardProps>) {
  const [selectedItem, setSelected] = useState<boolean>(selected);

  const handlerSelection = () => {
    handleSelectedItem(id, !selectedItem);
    setSelected(!selectedItem);
  }

  return (
    <div className={`item-card ${selectedItem ? "selected" : ""}`}>
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => handlerSelection()} /*disabled={selectedItem}*/ 
        style={selectedItem ? {backgroundColor:"red"} : {}} >
          {selectedItem ? "Presenteado" : "Presentear"}</button>
      </div>
    </div>
  );
}

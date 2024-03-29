import { PropsWithChildren, useState } from "react";

interface ItemCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  quantity: number;
  selected?: boolean;
  bookedByAnotherUser?: boolean;
  handleSelectedItem: Function;
}

export default function ItemCard({
  id,
  image,
  title,
  description,
  quantity,
  selected = false,
  bookedByAnotherUser,
  handleSelectedItem
}: PropsWithChildren<ItemCardProps>) {
  const [selectedItem, setSelected] = useState<boolean>(selected);

  const handlerSelection = () => {
    handleSelectedItem({id,image,title,description,quantity,selected}, !selectedItem);
    setSelected(!selectedItem);
  }

  return (
    <div className={`item-card ${selectedItem && !bookedByAnotherUser ? "selected" : ""}`}>
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => handlerSelection()} disabled={bookedByAnotherUser} 
        style={bookedByAnotherUser ? {backgroundColor:"grey"} : selectedItem ? {backgroundColor:"red"} : {}} >
          {bookedByAnotherUser ? "Indisponível" : selectedItem ? "Reservado" : "Presentear"}</button>
      </div>
    </div>
  );
}

import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Accra", "Takoradi", "Keta"];
  items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

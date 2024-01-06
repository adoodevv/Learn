function ListGroup() {
  let items = ["New York", "Accra", "Takoradi", "Keta"];
  let selectedIndex = 0;

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={ selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

function ListGroup() {
  const items = ["New York", "Accra", "Takoradi", "Keta"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

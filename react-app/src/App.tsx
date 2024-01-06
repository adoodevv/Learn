import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Accra", "Takoradi", "Keta"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
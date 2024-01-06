import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Accra", "Takoradi", "Keta"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App;
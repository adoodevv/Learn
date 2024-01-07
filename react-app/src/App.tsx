import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Accra", "Takoradi", "Keta"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        Hello <span>World</span>
      </Alert>}
      <Button color = "secondary" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
import "./App.css";
import { Button } from "./Button";
import { Wrap } from "./Wrap";

function App() {
  return (
    <div>
      <Wrap>
        <Button />
      </Wrap>
      <Button type="primary" />
      <Button type="danger" />
      <Button type="danger" onClick={() => alert(1)} />
    </div>
  );
}

export default App;

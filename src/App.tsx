import Parent from "./components/Parent";
import { ParentProvider } from "./context/ParentContext";

function App() {
  return (
    <div className="App">
      <ParentProvider>
        <Parent />
      </ParentProvider>
    </div>
  );
}

export default App;

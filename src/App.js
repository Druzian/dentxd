
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      </header>
    </div>
  );
}

export default App;

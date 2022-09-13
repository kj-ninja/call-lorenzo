import Header from "./components/Header";
import HowAreWeDoing from "./components/HowAreWeDoing";
import HowMuchItCost from "./components/HowMuchItCost";
import WhenWeWork from "./components/WhenWeWork";

function App() {
  return (
    <div className="App">
      <Header/>
      <HowAreWeDoing/>
      <HowMuchItCost />
      <WhenWeWork />
    </div>
  );
}

export default App;

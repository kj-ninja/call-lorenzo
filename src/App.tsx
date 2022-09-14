import Header from "./components/Header";
import HowAreWeDoing from "./components/HowAreWeDoing";
import HowMuchItCost from "./components/HowMuchItCost";
import WhenWeWork from "./components/WhenWeWork";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<HowAreWeDoing/>*/}
      {/*<HowMuchItCost />*/}
      <WhenWeWork />
      <Footer />
    </div>
  );
}

export default App;

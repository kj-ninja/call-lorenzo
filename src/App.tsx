import Header from "./components/Header";
import HowAreWeDoing from "./components/HowAreWeDoing";
import HowMuchItCost from "./components/HowMuchItCost";
import Footer from "./components/Footer";
import HowToContactUs from "./components/HowToContactUs";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<HowAreWeDoing/>*/}
      {/*<HowMuchItCost />*/}
      <HowToContactUs />
      <Footer />
    </div>
  );
}

export default App;

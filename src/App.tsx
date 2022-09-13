import Header from "./components/Header";
import HowAreWeDoing from "./components/HowAreWeDoing";
import HowMuchItCost from "./components/HowMuchItCost";
import Footer from "./components/Footer";
import WhatIsOurOffer from "./components/WhatIsOurOffer";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<HowAreWeDoing/>*/}
      {/*<HowMuchItCost />*/}
      <WhatIsOurOffer />
      <Footer />
    </div>
  );
}

export default App;

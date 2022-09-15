import Header from "./components/Header";
import HowAreWeDoing from "./components/HowAreWeDoing";
import HowMuchItCost from "./components/HowMuchItCost";
import WhenWeWork from "./components/WhenWeWork";
import HowToContactUs from "./components/HowToContactUs";
import WhatIsOurOffer from "./components/WhatIsOurOffer";
import WhoWeAre from "./components/WhoWeAre";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<HowAreWeDoing/>*/}
      {/*<HowMuchItCost />*/}
      {/*<WhenWeWork />*/}
      {/*<HowToContactUs />*/}
      {/*<WhatIsOurOffer />*/}
      <WhoWeAre />
      <Footer />
    </div>
  );
}

export default App;

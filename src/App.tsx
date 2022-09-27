import useDeviceDetect from "./components/hooks/useDeviceDetect";
import Header from "./components/Header";
import HowAreWeDoing from "./components/HowAreWeDoing";
import HowMuchItCost from "./components/HowMuchItCost";
import WhenWeWork from "./components/WhenWeWork";
import HowToContactUs from "./components/HowToContactUs";
import WhatIsOurOffer from "./components/WhatIsOurOffer";
import WhoWeAre from "./components/WhoWeAre";
import AdditionalInfo from "./components/AdditionalInfo";
import Footer from "./components/Footer";
import HeaderForMobile from "./components/HeaderForMobile";

function App() {
  const { isMobile } = useDeviceDetect();

  return (
    <div className="App">
      {
        isMobile ?
          <HeaderForMobile />
          :
          <Header />
      }
      <HowAreWeDoing/>
      <HowMuchItCost />
      <WhenWeWork />
      <HowToContactUs />
      <WhatIsOurOffer />
      <WhoWeAre/>
      <AdditionalInfo />
      <Footer />
    </div>
  );
}

export default App;

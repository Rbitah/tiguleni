import LandingBanner from "./componenrs/LandingBanner";
import Navibar from "./componenrs/Navibar";
import NewProducts from "./componenrs/NewProducts";
import ServicesByCategory from "./componenrs/ServicesByCategory";
import SecondBanner from "./componenrs/SecondBanner"

function App() {
  return (
    <>
      <Navibar/>
      <LandingBanner/>
      <NewProducts/>
      <ServicesByCategory/>
      <SecondBanner/>
    </>
  );
}

export default App;

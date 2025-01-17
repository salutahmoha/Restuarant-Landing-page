import Header from "./component/Header/Header";
import HeroSection from "./component/Hero/Hero";
import CustomerFavourites from "./component/CustomerFavourites/CustomerFavourites";
import SpecialDishes from "./component/Menu/Menu";

// import Services from "./component/Services/Services";
// import Footer from "./component/Footer/Footer";
// import Copyrights from "./component/Copyrights/Copyrights";
// import Testimonials from "./component/Testimonials/Testimonials";

import Testimonials from "./component/Testimonials/Testimonials";
import Services from "./component/Services/Services";
import Footer from "./component/Footer/Footer";
import Copyrights from "./component/Copyrights/Copyrights";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CustomerFavourites />
      <SpecialDishes />
      <Testimonials />
      <Services />
      <Footer />
      <Copyrights />
    </>
  );
}

export default App;

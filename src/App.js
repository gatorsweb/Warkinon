import Companies from "./components/companies/Companies";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Feature from "./components/feature/Feature";
import CompnayFeature from "./components/companyFeature/CompnayFeature";
import CreativeService from "./components/creativeService/CreativeService";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import CalltoAction from "./components/calltoaction/CalltoAction";
import Footer from "./components/footer/Footer";



function App() {
  return (
   
    <div>
      <Nav/>
      <Hero/>
      <Companies/>
      <Feature/>
      <CompnayFeature/>
      <CreativeService/>
      <Portfolio/>
      <Testimonial/>
      <CalltoAction/>
      <Footer/>
      
    </div>
  );
}

export default App;

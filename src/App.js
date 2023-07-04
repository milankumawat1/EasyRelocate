import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage'
import ContuctUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Info from './Components/Info'
import OurServices from './Components/OurServices';
import AboutPage from './Components/AboutPage'
import SuccessNumbers from './Components/SuccessNumbers';
import SimpleSteps from './Components/SimpleSteps';
import FeaturePage from './Components/FeaturePage';
function App() {
  return (
    <div className="App">
      <HomePage/>
      <AboutPage/>
      <SuccessNumbers/>
      {/* <br></br> */}
      <OurServices/>
      <SimpleSteps/>
      {/* <FeaturePage/> */}
      <ContuctUs/> <br/> <br/>
      {/* <Info/> */}
      <Footer/>
    </div>
  );
}

export default App;

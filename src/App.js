import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav'
import Landing from './components/landing/Landing'
import Selector from './components/form/Selector'
import Featured from './components/FeaturedCars/Featured'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import Advantage from './components/advantage/Advantage'
import Gallery from './components/imageGallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import ContactBanner from './components/contactBanner/ContactBanner'
import Footer from './components/Footer/Footer'
import Missing from './components/Missing/Missing'
function App() {
  return (
    <div className="App">
      <Router>
     <Nav/>
    <Switch>
    <Route path="/" exact component={Home}/>
    {/* Featred cars  */}
    {/* Services */}
    {/* offer with grid */}
    {/* Testimonials */}
    </Switch>
  <Footer/>
  <Route path="*" component={Missing} />
     </Router>
    </div>
  );
}

const Home =()=>
{
  return(
  <>
    <Landing/>
    <Selector/>
    <Featured/>
    <Advantage/>
    <Gallery/>
    <Testimonials/>
    <ContactBanner/>
    </>
  )
}
export default App;


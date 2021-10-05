import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Footer from './component/Footer/Footer';
import NotFound from './component/Notfound/NotFound';
import ContactUs from './component/ContactUs/ContactUs';
import Courses from './component/Courses/Courses';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Hero></Hero>
          </Route>
          <Route exact path='/'>
            <Hero></Hero>
          </Route>
          <Route path='/contact'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

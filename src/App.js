import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/Header/AboutUs/AboutUs';
import ContactUs from './component/Header/ContactUs/ContactUs';
import Courses from './component/Header/Courses/Courses';
import Footer from './component/Header/Footer/Footer';
import Header from './component/Header/Header';
import Hero from './component/Header/Hero/Hero';
import NotFound from './component/Header/Notfound/NotFound';

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

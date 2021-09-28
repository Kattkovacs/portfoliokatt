import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
  <>
  <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/services' component={Service}/>
      <Route exact path='/contact' component={Contact}/>
    </Switch>
  <Footer />
  </>
  );
}

export default App;

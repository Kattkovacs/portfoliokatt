import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Photography from './Components/Photography';
import GraphicDesign from './Components/GraphicDesign';
import WebDesign from './Components/WebDesign';
import {Switch, Route} from 'react-router-dom';
import ProjectBarat from './Components/ProjectBarat';
import ProjectExclusive from './Components/ProjectExclusive';
import ProjectUgocsa from './Components/ProjectUgocsa';

function App() {
  return (
  <>
  <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/services' component={Service}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/photography' component={Photography}/>
      <Route exact path='/graphic-design' component={GraphicDesign}/>      
      <Route exact path='/web-design' component={WebDesign}/>

      <Route exact path='/project-barat' component={ProjectBarat}/>
      <Route exact path='/project-exclusive' component={ProjectExclusive}/>
      <Route exact path='/project-ugocsa' component={ProjectUgocsa}/>
    </Switch>
  <Footer />
  </>
  );
}

export default App;

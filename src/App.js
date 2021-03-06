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
import ProjectBarat from './Components/GraphicProjectData/ProjectBarat';
import ProjectExclusive from './Components/GraphicProjectData/ProjectExclusive';
import ProjectUgocsa from './Components/GraphicProjectData/ProjectUgocsa';
import ProjectBcn from './Components/PhotoProjectData/ProjectBcn';
import ProjectGrundImpro from './Components/PhotoProjectData/ProjectGrundImpro';
import ProjectAutumn from './Components/PhotoProjectData/ProjectAutumn';
import ProjectIgnaci from './Components/WebProjectData/ProjectIgnaci';

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
      <Route exact path='/photo-bcn' component={ProjectBcn}/>
      <Route exact path='/photo-grund-impro' component={ProjectGrundImpro}/>
      <Route exact path='/photo-autumn' component={ProjectAutumn}/>
      <Route exact path='/web-ipm' component={ProjectIgnaci}/>
    </Switch>
  <Footer />
  </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import { AdminIT } from './components/pages/AdminIT';
import { AdminKTPM } from './components/pages/AdminKTPM';
import { Earthpage } from "./components/pages/earthPage";
import { Jupiterpage } from "./components/pages/jupiterPage";
import { Marspage } from "./components/pages/marsPage";
import { Mercurypage } from "./components/pages/mercutyPage";
import { Venuspage } from "./components/pages/venusPage";
import Home from "./planet/home";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  
`;

function App() {
  return (
    <CanvasContainer>
       <Router>
        
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/mercurypage' component={Mercurypage} /> 
          <Route path='/venuspage' component={Venuspage} />
          <Route path='/earthpage' component={Earthpage} /> 
          <Route path='/marspage' component={Marspage} />
          <Route path='/jupiterpage' component={Jupiterpage} />
          <Route path='/admin/cntt' component={AdminIT} />
          <Route path='/admin/ktpm' component={AdminKTPM} />
          
          {/* <Route path="*" component={NotFound} />  */}
        </Switch>
       
        
      </Router>
    </CanvasContainer>
  );

}

export default App;

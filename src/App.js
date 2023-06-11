import Nav from "./Components/NavItems/Nav";
import Home from "./Components/BodyComponents/Home";
import About from "./Components/BodyComponents/About";
import Skills from "./Components/BodyComponents/Skills";
import Projects from "./Components/BodyComponents/Projects";
import { NavfocusProvider } from "./context/NavFocusContext";
import { Route, Switch } from "react-router-dom";


const App = () => {

  return (
    <>
      <NavfocusProvider>
        <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/skills' component={Skills} />
      </Switch>
    </NavfocusProvider>
    </>
  );
}

export default App;

import Navbar from './components/navbar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './context/authContex';
import DataContextProvider from './context/dataContext';



//importing pages
import Home from './pages/Home'
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import About from './pages/Aboutus';
import Registration from './pages/Registration';
import Education from './pages/Education' ;
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Feedback from './pages/Feedback';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (<AuthContextProvider>
    <DataContextProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/registration">
            <Registration/>
          </Route>
          <Route exact path="/education">
            <Education/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/gallery">
            <Gallery/>
          </Route>
          <Route exact path="/feedback">
           <Feedback/>
          </Route>
        </Switch>
       <Footer/>
      </div>
    </Router>
    </DataContextProvider>
  </AuthContextProvider>
  );
}

export default App;

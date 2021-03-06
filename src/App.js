import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";

// Components
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
       </Switch>
       <main>
          <Switch>
            <Route path="/portfolio">
            </Route>
            <Route path="contact">
              <Contact/>
           </Route>
           <Route path="/">
             <About/>
           </Route>
         </Switch>
       </main>
       <Footer />
      </div>
     </Router>
    );
  }

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../src/components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

// import App1 from './App';
// import Form from "./Form"


 
// function based component VS class based component
// props
// const Person = (props) => {
//   const { name, lname } = props;
//   return (
//     <div>
//       {/* <p> {props.name} </p> */}
//       <p> {name} </p>
//       <h3> {lname} </h3>
//     </div>
//   )
// }

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
    </Router>
    // JSX
  )
}

ReactDOM.render(<App />, document.getElementById("root"));












// const age = 25;
// const currentAge = calculateAge("Sep 15, 1990");
// const age1 = calc();

// function calc(a, b) {
//   console.log(a + b)
// }

// function calculateAge(dob) {
//   const birthday = new Date(dob);
//   const diff = Date.now() - birthday.getTime();
//   const ageDate = new Date(diff);
//   const age = ageDate.getUTCFullYear() - 1970;
//   return age;
// }



// calculateAge("12-15-1993");

// console.log(age);

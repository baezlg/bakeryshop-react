import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Products from "./components/pages/Products";
import Employees from "./components/pages/Employees";
import ProductContextProvider from "./context/product/productContext";
import EmployeeContextProvider from "./context/employee/employeeContext";

function App() {
  return (
    <EmployeeContextProvider>
    <ProductContextProvider>
        <Router>
          <Fragment>
            <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/products" component={Products} />
                  <Route exact path="/employees" component={Employees} />
                </Switch>
              </div>
            </Fragment>
        </Router>
      </ProductContextProvider>
      </EmployeeContextProvider>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.component";
import LandingPage from "./pages/LandingPage.component";
import Products from "./components/Products.component";
import ProductsDetail from "./components/ProductDetail.component";
import NotFound from "./pages/NotFound.component";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductsDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

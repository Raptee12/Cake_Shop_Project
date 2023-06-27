import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Topbar from "./components/Topbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policies from "./components/Policies";
import NavBar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Orderscreen from "./screens/Orderscreen";
import AdminScreen from "./screens/AdminScreen";
function App() {
  return (
    <BrowserRouter>
     <Topbar/>
     <NavBar />
     <Switch>
       <Route path="/admin" component={AdminScreen}/>
       <Route path="/orders" component={Orderscreen} exact/>
       <Route path="/login" component={Login} exact/>
       <Route path="/register" component={Register} exact/>
       <Route path="/cart" component={CartScreen} exact/>
       <Route path="/about" component={About} exact/>
       <Route path="/contact" component={Contact} exact/>
       <Route path="/policy" component={Policies} exact/>
       <Route path="/" component={Homescreen} exact/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;

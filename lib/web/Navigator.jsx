"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
var react_router_dom_1 = require("react-router-dom");
function Home() {
    return <h2>Home</h2>;
}
function About() {
    return <h2>About</h2>;
}
function Users() {
    return <h2>Users</h2>;
}
var Router = function () {
    return (<react_router_dom_1.BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/about">About</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/users">Users</react_router_dom_1.Link>
              </li>
            </ul>
          </nav>
  
          
          <react_router_dom_1.Switch>
            <react_router_dom_1.Route path="/about">
              <About />
            </react_router_dom_1.Route>
            <react_router_dom_1.Route path="/users">
              <Users />
            </react_router_dom_1.Route>
            <react_router_dom_1.Route path="/">
              <Home />
            </react_router_dom_1.Route>
          </react_router_dom_1.Switch>
        </div>
      </react_router_dom_1.BrowserRouter>);
};
exports.Navigator = function (props) {
    return (<div>
        <p style={{}}> Jayesse Web Navigator </p>
        <Router />
      </div>);
};
//# sourceMappingURL=Navigator.jsx.map
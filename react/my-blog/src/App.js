import Navbar from './Navbar.js';
import Home from './Home.js';
import { Route, Switch } from "react-router-dom";
import Create from './Create.js';
import BlogDetails from './BlogDetails.js';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/blogs/:id" component={BlogDetails} />
        </Switch>
      </div>
  );
}

export default App;
import { ProvideAuth } from "./features/login/hooks/useAuth";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { PrivateRoute } from "./features/login/components/private-router/private-router";
import { Login } from "./features/login/ui/login/login";
import { Hall } from "./features/hall/ui/hall/hall";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/hall">
              <Hall />
            </PrivateRoute>
            <Redirect from="/" to="/hall" />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;

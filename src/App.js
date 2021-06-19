import { ProvideAuth } from "./core/hooks/useAuth";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { PrivateRoute } from "./features/login/components/private-router/private-router";
import { Login } from "./features/login/ui/login/login";
import { Hall } from "./features/hall/ui/hall/hall";
import { Game } from "./features/game/ui/game/game";

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
            <PrivateRoute path="/game">
              <Game />
            </PrivateRoute>
            <Redirect from="/" to="/hall" />
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;

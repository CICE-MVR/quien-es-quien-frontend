import { ProvideAuth } from "./core/hooks/useAuth";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./features/login/components/private-router/private-router";
import { Login } from "./features/login/ui/login/login";
import { Register } from "./features/register/ui/register/register";
import { Hall } from "./features/hall/ui/hall/hall";
import { Game } from "./features/game/ui/game/game";

import styles from "./App.module.css";
import { Landing } from "./features/landing/ui/landing/landing";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className={styles.container}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/hall">
              <Hall />
            </PrivateRoute>
            <PrivateRoute path="/game/:gameId">
              <Game />
            </PrivateRoute>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;

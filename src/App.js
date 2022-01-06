import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
      </nav>
      <Switch>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route
          path="/"
          render={e => (e.match.isExact ? <Page1 /> : <NotFound />)}
        />
      </Switch>
    </div>
  );
};

// No tienes que hacer nada por debajo de esta linea
//==================================================

export const Page1 = props => {
  return <h1>Pagina 1</h1>;
};

export const Page2 = props => {
  return <h1>Pagina 2</h1>;
};

export const NotFound = props => {
  return <h1>Pagina no encontrada</h1>;
};

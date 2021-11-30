import React from "react";
import { Router, Route, Switch } from "react-router-dom";
// Use plain Router when creating your own history object.
// import { BrowserRouter, Route } from "react-router-dom";
// Alternate Routers to BrowserRouter.
// import { HashRouter, Route } from "react-router-dom";
// import { MemoryRouter, Route } from "react-router-dom";
// 253929713557-0mq8s7nsv7021sl9m05190qf123osajq.apps.googleusercontent.com

import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

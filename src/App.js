import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GraphQLClient, ClientContext } from "graphql-hooks";

import Countries from "./pages/Countries";
import Continents from "./pages/Continents";
import Country from "./pages/Country";
import Main from "./pages/Main";
import NotFoundPage from "./pages/NotFoundPage";

const client = new GraphQLClient({
  url: "https://countries.trevorblades.com/"
});

export default function App() {
  return (
    <ClientContext.Provider value={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/continents" component={Continents} />
          <Route path="/continent/:code" component={Countries} />
          <Route path="/country/:code" component={Country} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ClientContext.Provider>
  );
}

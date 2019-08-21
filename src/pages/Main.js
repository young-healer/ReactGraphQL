import React from "react";

import { HomePage, PushMe, Button } from "../components/StyledComponents";

const Main = () => {
  return (
    <HomePage>
      <Button to="/continents">Continents</Button>
      <PushMe>Push me please</PushMe>
    </HomePage>
  );
};

export default Main;

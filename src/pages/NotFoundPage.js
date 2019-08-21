import React from "react";

import {
  HomePage,
  DivWrapper,
  NotFound,
  Button
} from "../components/StyledComponents";

const NotFoundPage = () => {
  return (
    <HomePage>
      <DivWrapper>
        <NotFound>404</NotFound>
        <Button to="/">Home</Button>
      </DivWrapper>
    </HomePage>
  );
};

export default NotFoundPage;

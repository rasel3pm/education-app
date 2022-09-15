import React from "react";
import { Container } from "react-bootstrap";

import "./count.css";
import CountBox from "./CountBox";
import CounterText from "./CounterText";
const Count = () => {
  return (
    <div className="counter">
      <Container>
        <div className="inner_counter">
          <div>
            <CounterText></CounterText>
          </div>
          <div className="counter-res">
            <CountBox></CountBox>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Count;

import React from "react";
import { Container } from "react-bootstrap";
import HowWorkText from "./HowWorkText";
import "./How.css";
import HowBox from "./HowBox";

const index = () => {
  const data = [
    {
      title: "Sign up",
      des: "Ipsum yorem dolor amet sit elit. Duis at est id leosco for it",
    },
    {
      title: "Select course",
      des: "Ipsum yorem dolor amet sit elit. Duis at est id leosco for it",
    },
    {
      title: "Start Learning",
      des: "Ipsum yorem dolor amet sit elit. Duis at est id leosco for it",
    },
    {
      title: "Get Certificate",
      des: "Ipsum yorem dolor amet sit elit. Duis at est id leosco for it",
    },
  ];

  return (
    <div className="my-5">
      <Container>
        <HowWorkText></HowWorkText>

        <div className="model">
          {data.map((res) => (
            <HowBox title={res.title} des={res.des} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default index;

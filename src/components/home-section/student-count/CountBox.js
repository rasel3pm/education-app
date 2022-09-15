import React from 'react'
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const CountBox = () => {
  return (
    <div>
       <div className="counter-items">
              <FontAwesomeIcon className="icon" icon={faCheck} />
              <div>
                <h3>
                  <CountUp end={1200} />+
                </h3>
                <p>Learners & counting</p>
              </div>
            </div>
            <div className="counter-items">
              <FontAwesomeIcon className="icon" icon={faCheck} />
              <div>
                <h3>
                  <CountUp end={320} />+
                </h3>
                <p>Learners & counting</p>
              </div>
            </div>
            <div className="counter-items">
              <FontAwesomeIcon className="icon" icon={faCheck} />
              <div>
                <h3>
                  <CountUp end={1340} />+
                </h3>
                <p>Successful students</p>
              </div>
            </div>
    </div>
  )
}

export default CountBox

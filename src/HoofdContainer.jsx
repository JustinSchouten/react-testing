import React, { useState } from "react";
import BoxOne from "./Boxone";
import BoxTwo from "./Boxtwo";
import { Button } from "react-bootstrap";

function HoofdContainer() {
  const [boxOneVisible, setBoxOneVisible] = useState(false);
  const [boxTwoVisible, setBoxTwoVisible] = useState(false);

  // let button1 = <Boxone onClick={() => setBoxVisible((prevBoxVisible) => !boxVisible)}>
  // let button2 = <Boxtwo onClick={() => setBoxTwoVisible((prevBoxVisible) => !boxTwoVisible)}>

  return (
    <div className="container">
      <div className="buttons">
        <Button
          onClick={() => setBoxOneVisible((prevBoxVisible) => !boxOneVisible)}
        >
          Box 1
        </Button>
        <Button
          onClick={() =>
            setBoxTwoVisible((prevBoxTwoVisible) => !boxTwoVisible)
          }
        >
          Box 2
        </Button>
      </div>
      {boxOneVisible && <BoxOne />}
      {boxTwoVisible && <BoxTwo />}
    </div>
  );
}

export default HoofdContainer;

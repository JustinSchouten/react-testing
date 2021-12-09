import React, { useState } from "react";
import Box from "./Box";
import BoxTwo from "./Boxtwo";

function Test() {
  const [boxVisible, setBoxVisible] = useState(false);
  const [boxTwoVisible, setBoxTwoVisible] = useState(false);

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => setBoxVisible((prevBoxVisible) => !boxVisible)}>
          Box 1
        </button>
        <button
          onClick={() =>
            setBoxTwoVisible((prevBoxTwoVisible) => !boxTwoVisible)
          }
        >
          Box 2
        </button>
      </div>
      {boxVisible && <Box />}
      {boxTwoVisible && <BoxTwo />}
      {/*{boxVisible && <BoxTwo />}*/}
    </div>
  );
}

export default Test;

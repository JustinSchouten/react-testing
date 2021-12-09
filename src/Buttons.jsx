import React from "react";
import BoxOne from "./Boxone";

export default function Test() {
  function showHide() {
    let boxOneVisible = true;
    let boxTwoVisible = false;

    if ((boxOneVisible = true)) {
      <BoxOne />;
    } else if (boxTwoVisible) {
    }
  }

  return <div>test</div>;
}

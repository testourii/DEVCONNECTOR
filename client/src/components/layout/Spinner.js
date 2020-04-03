import React, { Fragment } from "react";
import SSpinner from "../../img/spinner.gif";

export default function Spinner() {
  return (
    <Fragment>
      <img
        src={SSpinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="loading..."
      />
    </Fragment>
  );
}

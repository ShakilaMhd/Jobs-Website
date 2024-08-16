import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

function Spinner({ loading }) {
  return (
    <>
      <ClipLoader color="#4338ca" loading={loading} cssOverride={override} />
      <h2>cccc</h2>
    </>
  );
}

export default Spinner;

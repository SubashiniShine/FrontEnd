import React, { useState } from "react";

const NestedMarkUpdate = () => {
  const [markDetails, setMarkDetails] = useState({
    name: "Suba",
    mark: {
      English: 50,
      Maths: 100,
    },
  });
  const handleMarkChange = () => {
    setMarkDetails((prevState) => ({
      ...prevState,
      mark: {
        ...prevState.mark,
        English: 100,
      },
    }));
  };
  return (
    <div>
      <h1>NestedMarkUpdate</h1>
      <p>English mark: {markDetails.mark.English}</p>
      <button onClick={handleMarkChange}>Modify English mark</button>
    </div>
  );
};

export default NestedMarkUpdate;

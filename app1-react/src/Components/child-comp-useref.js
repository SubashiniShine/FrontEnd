import React, { useEffect } from "react";

function ChildComponentUseRef({ dataRef }) {
  useEffect(() => {
    dataRef.current = "Hello from child"; // Set data
  }, [dataRef]);

  return <p>Child Component</p>;
}

export default ChildComponentUseRef;

import "./App.css";
import OnclickExample from "./Components/FormDetails";
import FormSubmission from "./Components/form-submission";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import FetchApi from "./Components/fetchApi";
import FetchApiTable from "./Components/fetchapi-table";
import { useState, useRef  } from "react";
import ChildComponent from "./Components/child-component";
import ChildComponentUseRef from "./Components/child-comp-useref";

function App() {
  const [message, setMessage] = useState("");
  const handleDataFromChild = (data) => {
    setMessage(data);
  };
  const childRef = useRef();
  const getChildData = () => {
    alert(childRef.current); // Access data from child
  };
  
  return (
    <div className="App">
      <h1>React Coding Example</h1>
      {/* <OnclickExample />
      <FormSubmission />
      <Counter />
      <Todo />
      <FetchApi />
      <FetchApiTable/> */}
      <ChildComponent sendDataToParent={handleDataFromChild} />
      <p>Message: {message}</p>
      <ChildComponentUseRef dataRef={childRef} />
      <button onClick={getChildData}>Get Data</button>
    </div>
  );
}

export default App;

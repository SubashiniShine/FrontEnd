import { useEffect, useState } from "react";
const FetchApi = () => {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setRecord(data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  },[]);
  return (
    <div>
      <h1>FetchApi</h1>
      <ul>
        {record.map((item, index) => (
          <>
            <li key={index}>
              {item.name} -{item.email}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default FetchApi;

import { useEffect, useState } from "react";

const FetchApiTable = () => {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data, "data");
        setRecord(data);
      } catch (error) {
        console.error("error in fetching data");
      }
    };
    fetchApi();
  }, []);
  return (
    <div>
      <h2>Fetch API Table Component</h2>
      <table
        border="1"
        style={{
          borderCollapse: "collapse",
          width: "80%",
          backgroundColor: "#d0e16bff",
        }}
      >
        <thead style={{ backgroundColor: "green" }}>
          <tr>
            <th style={{ backgroundColor: "green" }}>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {record.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td> {item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchApiTable;

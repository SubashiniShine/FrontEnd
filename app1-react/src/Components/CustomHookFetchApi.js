import React from "react";
import CustomHookFetch from "./customHookFetch";

const CustomHookFetchApi = () => {
  const { data, error, loading } = CustomHookFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </div>
  );
};

export default CustomHookFetchApi;

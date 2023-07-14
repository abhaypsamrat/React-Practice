import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;

  return (
    <div>
      <p>{data.title}</p>
    </div>
  );
}

export default App;

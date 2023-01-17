import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <h3>User List on console</h3>
    </main>
  );
}

export default App;

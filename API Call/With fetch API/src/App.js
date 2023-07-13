import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
      response
        .json()
        .then((json) => setData(json))
        .catch((error) => console.error(error))
    );
  }, []);

  return (
    <div>
      {data? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default App;

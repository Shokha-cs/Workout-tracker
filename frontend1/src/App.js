// import React from "react";
// import AppRoutes from "./routes";

// function App() {
//   return <AppRoutes />;
// }

// export default App;
import axios from "axios";
import React, { useEffect, useState } from "react";
export default function App() {
  const [backendData, setbackendData] = useState(null);
  useEffect(() => {
    axios.get("/api").then((response) => {
      setbackendData(response.data);
    });
  }, []);

  return (
    <>
      <h1>Backend Message:</h1>
      {typeof backendData?.message === "undefined" ? (
        <p>Loading....</p>
      ) : (
        <p>{backendData.message}</p>
      )}
    </>
  );
}

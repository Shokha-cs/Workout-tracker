import React, { useEffect, useState } from "react";
// import api from "./src/api/api";
import Header from "../components/Header";
// import BackendMessage from "../components/BackendMessage";
// import QuoteSection from "../components/QuoteSection";

function Home() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   api
  //     .get("/hello")
  //     .then((response) => {
  //       setMessage(response.data.message);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching from backend:", error);
  //     });
  // }, []);

  return (
    <>
      <Header />

      <section className="backend-section">
        <h2>Backend Message:</h2>
        <p>Message has not been defined yet, only react now</p>
      </section>

      <section id="box1">
        <h2>About website</h2>
        <p>Welcome to Momentum</p>
        {/* <QuoteSection /> */}
      </section>
    </>
  );
}

export default Home;

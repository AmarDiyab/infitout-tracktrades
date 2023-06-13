import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Table from "./components/Table";

const App = () => {
  return (
    <div style={{ backgroundColor: "#fbfbfb" }}>
      <Navbar />
      <Header />
      <Table />
    </div>
  );
};

export default App;

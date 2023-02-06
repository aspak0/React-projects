import React from "react";
import { Header } from "./components/Header";
import { Balence } from "./components/Balence";
import { IncomeExpenses } from "./components/IncomeExpenses";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Balence />
          <IncomeExpenses />
        </div>
      </div>
    </>
  );
};

export default App;

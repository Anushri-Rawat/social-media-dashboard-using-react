import "./components/commonCSS/style.css";
import DashBoardSection from "./components/DashBoardSection";
import Header from "./components/Header";
import OverViewSection from "./components/OverViewSection";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  function switchThemeHandler() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }
  return (
    <body className={`${theme}-theme`}>
      <Header switchTheme={switchThemeHandler} mode={theme}></Header>
      <DashBoardSection></DashBoardSection>
      <h4 className="container">Overview-Today</h4>
      <OverViewSection></OverViewSection>
    </body>
  );
}

export default App;

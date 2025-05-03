import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css";

const Layout = () => {
  useEffect(() => {
    const userTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", userTheme);
  }, []);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <button onClick={toggleTheme} className="theme-toggle">🌓</button>
      <Outlet />
    </>
  );
};

export default Layout;

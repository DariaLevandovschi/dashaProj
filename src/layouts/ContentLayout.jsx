import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import { Layout } from "antd";

const ContentLayout = () => {
  return (
    <Layout className="layout">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<About />} />
        <Route path="/about" element={<Products />} />
      </Routes>
    </Layout>
  );
};

export default ContentLayout;
